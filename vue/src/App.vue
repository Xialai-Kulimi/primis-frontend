<template>
  <v-app style="display: fixed">
    <DisconnectOverlay></DisconnectOverlay>
    <v-app-bar app v-if="!left_drawer || !right_drawer">

      <v-btn v-if="!left_drawer" icon @click.stop="left_drawer = !left_drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="!right_drawer" icon @click.stop="right_drawer = !right_drawer">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer app v-model="left_drawer">

    </v-navigation-drawer>

    <v-app-bar app>
      <AppBar></AppBar>
    </v-app-bar>

    <v-main>
      <router-view />



    </v-main>
    <v-navigation-drawer app v-model="right_drawer" right>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar';
import api from '@/plugins/api';
import { WS } from "@/plugins/ws";
import DisconnectOverlay from '@/components/DisconnectOverlay';

export default {
  name: 'App',
  mixins: [WS],
  data: () => ({
    ws: null,
    left_drawer: null,

    right_drawer: null,

    items: [
      { title: 'Home', icon: 'mdi-home-city' },
      { title: 'My Account', icon: 'mdi-account' },
      { title: 'Users', icon: 'mdi-account-group-outline' },
    ],
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
  components: { AppBar, DisconnectOverlay }
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
