<template>
  <v-app style="display: fixed">

    <v-app-bar app>

      <v-btn v-if="!left_drawer" icon @click.stop="left_drawer = !left_drawer">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>

      <AppBar></AppBar>
      <v-btn v-if="!right_drawer" icon @click.stop="right_drawer = !right_drawer">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer app v-model="left_drawer">

    </v-navigation-drawer>

    <v-overlay :value="!wsConnectState">
      <v-container>
        <v-alert text color="primary" class="mb-0" tile>

          <v-card-title>
            連線中
          </v-card-title>
          <v-card-subtitle>如果遲遲無法連線可以嘗試重新載入此分頁，並且避免同時在多個頁面登入。</v-card-subtitle>

          <v-btn color="primary" text block>立即重新連線</v-btn>

        </v-alert>
        <v-progress-linear indeterminate color="primary" size="64"></v-progress-linear>
      </v-container>
    </v-overlay>
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


export default {
  name: 'App',
  mixins: [WS],
  data: () => ({
    ws: null,
    left_drawer: false,

    right_drawer: false,

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
