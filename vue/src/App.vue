<template>
  <v-app style="display: fixed">
    <AppBar></AppBar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar';
import api from '@/plugins/api';
import {WS} from "@/plugins/ws";


export default {
  name: 'App',
  mixins:[WS],
  data: () => ({
    ws: null
  }),
  computed: {
    user() {
      return this.$store.state.userStore.user;
    },
    messages() {
      return this.$store.state.userStore.messages;
    }
  },
  methods: {
    set_user(new_user) {
      this.$store.commit("setUser", new_user)
    },
    wsRecv(data) {
      let recv = JSON.parse(data)
      // console.log(recv.type)
      if (recv.type === 'operation') {
        // console.log('op')  
        this.$store.commit("setOperation", recv)
      }
      else if (['caption', 'surrounding', 'status'].includes(recv.type)) {
        this.$store.commit("pushTexts", recv)
      }
      else if (['target', 'reachable', 'inventory'].includes(recv.type)) {
        this.$store.commit("setButtons", recv)
      }
    }
  },
  watch: {
    messages: {
      handler: function () {
        if (this.messages.length > 0) {
          let message = this.messages.shift()
          this.$store.commit("shiftMessage")
          this.wsSend(message)
        }
      }
    },
    '$store.state.wsStore.wsData':function (newValue){
      this.wsRecv(newValue)
    }

  },
  mounted: async function () {
    let res = await api.request('auth/me')
    // console.log(res)
    if (!res.data) {
      window.location.replace('/api/auth/login')
    }
    this.set_user(res.data)
    this.initWebsocket()
  },
  components: { AppBar }
};
</script>
<style>
* {
  font-family: '微軟正黑體';
  white-space: pre-line;
}

html {
  height: 2vh;
  background-color: #121212;
}

.CloisterBlack {
  font-family: 'CloisterBlack';
}

@font-face {
  font-family: 'CloisterBlack';
  src: url('./assets/CloisterBlack.ttf');
}
</style>