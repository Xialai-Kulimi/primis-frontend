<template>
  <v-list-item :ripple="false">
    <v-list-item-icon>
      <v-progress-circular
        indeterminate
        color="grey darken-3"
      ></v-progress-circular>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>
        <v-skeleton-loader type="text"></v-skeleton-loader>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
export default {
  name: "ListItemIconLoader",
};
</script>
