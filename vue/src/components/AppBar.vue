<template>
  <v-container>
    <v-card outlined style="padding-right: 10px">
      <v-layout row align-center>
        <v-card-title class="primary--text"><pre>PRIMIS</pre></v-card-title>
        <v-spacer></v-spacer>
        <v-card-subtitle>{{user.username}}</v-card-subtitle>
        <v-btn text color="primary">登出</v-btn>
      </v-layout>
    </v-card>

  </v-container>
</template>
  
<script>
export default {
  name: 'AppBar',
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  data: () => ({

  }),
}
</script>
  