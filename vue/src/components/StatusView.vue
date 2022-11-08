<template>
    <v-card outlined height="20vh">
      <v-layout column reverse fill-height>
      <v-container style="padding: 0">
        <v-text-field 
          dense 
          solo 
          hide-details
          label="說些什麼吧"></v-text-field>
      </v-container>

      <v-card-text style="padding-bottom: 0">
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
      return this.$store.state.status;
    }
  },

};
</script>
