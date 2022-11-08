<template>
  <v-app style="display: fixed">
    <AppBar></AppBar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar';
import api from '@/plugins/api';


export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    set_user(new_user) {
      this.$store.commit("SetUser", new_user);
    }
  },
  mounted: async function () {
    let res = (await api.get_data('auth/me'))
    if (!res.username) {
      window.location.replace('/api/auth/login')
    }
    this.set_user(res)
  },
  components: {AppBar}
};
</script>
<style>
*{
  font-family: '微軟正黑體';
  white-space: pre-line;
}
html {
  height: 2vh;
  background-color: #121212;
}
.CloisterBlack{
  font-family: 'CloisterBlack';
}
@font-face {
  font-family: 'CloisterBlack';
  src: url('./assets/CloisterBlack.ttf');
}
</style>