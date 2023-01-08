<template>
  <v-list>
    <template v-if="!$auth.loading">
      <template v-if="$auth.isAuthenticated">
        <UserInfo></UserInfo>

        <v-divider></v-divider>

        <v-list-item @click="logout" :ripple="false">
          <v-list-item-icon>
            <v-icon color="primary">mdi-logout-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>登出</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-dialog v-model="login_overlay" persistent max-width="500">
        <v-card outlined>
          <v-banner>
            <v-icon slot="icon" color="primary" size="36">
              mdi-account-question-outline
            </v-icon>
            未登入！需要帳戶資訊進行進一步識別。

            <template v-slot:actions>
              <v-btn color="primary" text @click="login"> 登入 </v-btn>
            </template>
          </v-banner>
        </v-card>
      </v-dialog>

      <v-divider></v-divider>
    </template>
    <template v-else> </template>

    <v-list-item @click="setting" :ripple="false">
      <v-list-item-icon>
        <v-icon color="primary">mdi-cog-outline</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>設定</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
import UserInfo from "@/components/UserInfo";

export default {
  name: "LeftSideBarAppend",
  components: { UserInfo },
  data: () => ({
    login_overlay: false,
  }),

  methods: {
    setting: function () {},
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
  watch: {
    "$auth.loading": function () {
      if (!this.$auth.isAuthenticated) {
        this.login_overlay = true;
      }
    },
  },
};
</script>
