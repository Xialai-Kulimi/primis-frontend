<template>
  <v-card outlined height="20vh">
    <v-card-text>
      <template v-for="(button, index) in target">
        <v-btn :color="button.color">{{button.text}}</v-btn>
        <v-menu >
          <template v-slot:activator="{ on, attrs }">
            <v-btn :color="button.color" v-bind="attrs" v-on="on" icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          
          <v-list>
          <v-list-item v-for="(item, index) in button.list" :key="index">
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>

    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'TargetView',
  computed: {
    target() {
      return this.$store.state.target;
    }
  },
  data: () => {
    return {

    }
  },
  mounted: () => {

  }
};
</script>
