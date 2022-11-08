<template>
    <v-card outlined height="40vh">
      <v-layout column reverse fill-height>
      <v-container style="padding: 0">
        <v-text-field 
          dense 
          solo 
          hide-details
          label="說些什麼吧"></v-text-field>
      </v-container>

      <v-card-text style="padding-bottom: 0">
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
