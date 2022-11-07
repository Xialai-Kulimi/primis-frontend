<template>
  <v-app>
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
    let res = (await api.get_data('auth/me')).data
    if (!res.data) {
      await this.$router.push('login')
    }
    this.set_user(res.data)
  },
  components: {AppBar}
};
</script>
<style>
*{
  font-family: '微軟正黑體';
}
</style>