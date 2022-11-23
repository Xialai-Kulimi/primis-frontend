<template>
  <v-container>
    <v-card outlined style="padding-right: 10px">
      <v-layout row align-center>
        <v-card-title class="primary--text">
          <pre>PRIMIS</pre>
        </v-card-title>
        <v-spacer></v-spacer>
        <v-card-subtitle>{{ user.username }}</v-card-subtitle>
        <v-btn text color="primary" href="/api/auth/login">{{ (user.username) ? '登出' : '登入' }}</v-btn>
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" text color="grey">設定</v-btn>
          </template>

          <v-card outlined>
            <v-card-title>
              設定
            </v-card-title>

            <v-card-text>
              <v-select @input="setLayout" v-model="layout" :items="layout_list" label="佈局" solo></v-select>
            </v-card-text>

          </v-card>
        </v-dialog>
      </v-layout>
    </v-card>

  </v-container>
</template>
  
<script>
export default {
  name: 'AppBar',
  computed: {
    user() {
      return this.$store.state.userStore.user;
    }
  },
  methods: {
    setLayout() {
      localStorage.setItem('layout', this.layout)
      window.location.reload()
    }
  },
  data: () => ({
    layout_list: ['classic', 'tab-inventory', 'tab-reachable'],
    layout: 'classic',
    dialog: false
  }),
  mounted() {
    if (localStorage.layout) {
      this.layout = localStorage.layout;
    }
  },
  watch: {
    layout(newLayout) {
      localStorage.layout = newLayout;
    }
  }
}
</script>
  