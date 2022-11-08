<template>
    <v-card outlined height="40vh">
      <v-layout column reverse fill-height>


      <v-card-text style="padding-bottom: 0;overflow: auto;">
        <div v-for="item in surrounding" :key="item" :class="item.class">{{ item.message }}</div>
      </v-card-text>

    </v-layout>
    </v-card>
</template>
<script>
export default {
  name: 'SurroundingView',
  computed: {
    surrounding() {
      return this.$store.state.surrounding;
    }
  },

};
</script>
