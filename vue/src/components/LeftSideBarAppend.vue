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
      <template v-else>
        <v-list-item @click="login" :ripple="false">
          <v-list-item-icon>
            <v-icon color="primary">mdi-logout-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>登入</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>
    </template>
    <template v-else>
        <ListItemIconLoader></ListItemIconLoader>
    </template>

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
import ListItemIconLoader from "@/components/ListItemIconLoader";

export default {
  name: "LeftSideBarAppend",
  components: { UserInfo, ListItemIconLoader },
  data: () => ({}),
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
};
</script>
