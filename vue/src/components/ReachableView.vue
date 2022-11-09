<template>
  <v-card outlined height="20vh" style="overflow-x: auto; flex-wrap: wrap;">
    <v-card-text>
      <v-layout row>
        <v-form v-for="(button, index) in reachable" :key="index" style="padding: 2px">
          <v-btn :color="button.color">{{ button.text }}</v-btn>
          <v-menu>
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
        </v-form>
      </v-layout>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'ReachableView',
  computed: {
    reachable() {
      // return Array(130).fill({
      //   text: 'text2',
      //   id: 'btn2',
      //   color: 'error',
      //   list: [
      //     { text: 'text', value: 'value' },
      //     { text: 'text2', value: 'value2' },
      //     { text: 'text3', value: 'value3' },
      //   ]
      // },)
      // [
      //   {
      //     text: 'text1',
      //     id: 'btn1',
      //     color: 'primary',
      //     list: [
      //       { text: 'text', value: 'value' },
      //       { text: 'text2', value: 'value2' },
      //       { text: 'text3', value: 'value3' },
      //     ]
      //   },

      // ]
      return this.$store.state.reachable;
    }
  },
  methods: {
    // SubmitClick
  },
  data: () => {
    return {

    }
  },
  mounted: () => {

  }
};
</script>
