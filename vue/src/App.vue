<template>
  <v-app style="display: fixed">
    <DisconnectOverlay></DisconnectOverlay>
    <!-- <v-app-bar app clipped-left>
      <template v-if="!left_drawer">
        <v-btn icon @click.stop="left_drawer = !left_drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-app-bar-title class="CloisterBlack primary--text">
          <pre class="primary--text">PRIMIS</pre>
        </v-app-bar-title>
      </template>
      <template v-else>      
        <v-app-bar-title class="primary--text">
          <pre>PRIMIS</pre>
        </v-app-bar-title>
      </template>
      
      
    </v-app-bar> -->
    <v-btn v-if="!left_drawer" @click="left_drawer = !left_drawer" elevation="2" fab fixed left bottom color="#121212">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-navigation-drawer app v-model="left_drawer" color="#121212">
      <template v-slot:prepend>
        <v-card-title>
          <router-link to="/" style="text-decoration: none;">
            <pre class="primary--text">PRIMIS</pre>
          </router-link>
        </v-card-title>
      </template>

      <template v-slot:append>
        <LeftSideBarAppend></LeftSideBarAppend>
      </template>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>


  </v-app>
</template>

<script>
// import AppBar from '@/components/AppBar';
import api from '@/plugins/api';
import { WS } from "@/plugins/ws";
import DisconnectOverlay from '@/components/DisconnectOverlay';
import LeftSideBarAppend from '@/components/LeftSideBarAppend';

export default {
  name: 'App',
  mixins: [WS],
  data: () => ({
    ws: null,
    left_drawer: null,

    right_drawer: null,


  }),
  computed: {
    wsConnectState() {
      return this.$store.state.wsStore.connect;
    },
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
  },
  mounted: async function () {
    let res = await api.request('auth/me')
    // console.log(res)
    if (res.data.text) {
      window.location.replace('/api/auth/login')
    }
    this.set_user(res.data)
    this.initWebsocket()
  },
  components: { DisconnectOverlay, LeftSideBarAppend }
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
  font-family: 'CloisterBlack' !important;
}

.large {
  font-size: 6rem !important;
}

@font-face {
  font-family: 'CloisterBlack';
  src: url('./assets/CloisterBlack.ttf');
}
</style>
