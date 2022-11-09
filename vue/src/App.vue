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


export default {
  name: 'App',

  data: () => ({
    ws: null
  }),
  computed: {
    user() {
      return this.$store.state.user;
    },
    messages() {
      return this.$store.state.messages;
    }
  },
  methods: {
    set_user(new_user) {
      this.$store.commit("setUser", new_user)
    },
    ws_recv(data) {
      let recv = JSON.parse(data.data)
      console.log(recv)
      if (recv.type === 'operation') {
        this.$store.commit("setOperation", recv)
      }
      else if (['caption', 'surrounding', 'status'].includes(recv.type)) {
        this.$store.commit("pushTexts", recv)
      }
      else if (['target', 'reachable'].includes(recv.type)) {
        this.$store.commit("setButtons", recv)
      }
      else {
      }
    },
    ws_send(data) {
      // console.log('send: ', data)
      this.ws.send(data)
    },
    ws_connect() {
      this.ws = new WebSocket('ws://' + window.location.host + '/api/ws')
    }
  },
  watch: {
    messages: {
      handler: function () {
        if (this.messages.length > 0) {
          let message = this.messages.shift()
          this.$store.commit("shiftMessage")
          this.ws_send(message)
        }
      }
    }
  },
  mounted: async function () {
    let res = (await api.get_data('auth/me'))
    // console.log(res.status)
    if (!res.data) {
      window.location.replace('/api/auth/login')
    }
    this.set_user(res.data)

    this.ws_connect()
    this.ws.addEventListener('open',
      (e) => {
        // console.log('ws open', e)
        // this.ws_send('tewtset')
      })
    this.ws.addEventListener('close', { handleEvent: (e) => { console.log('ws close', e); this.ws_connect() } })
    // this.ws.addEventListener('message', { handleEvent: (res) => { console.log('recv: ', res) } })
    this.ws.addEventListener('message', this.ws_recv)


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