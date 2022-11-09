<template>
    <v-card outlined height="20vh">
      <v-layout column reverse fill-height>

      <v-card-text style="padding-bottom: 0;overflow: auto;">
        <div v-for="item in status" :key="item" :class="item.class">{{ item.message }}</div>
      </v-card-text>

    </v-layout>
    </v-card>
</template>
<script>


export default {
  name: 'StatusView',
  computed: {
    status() {
      return this.$store.state.userStore.texts.status;
    }
  },

};
</script>
