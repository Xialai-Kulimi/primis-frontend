<template>
  <v-card
    elevation="0"
    :height="height"
    style="overflow-x: auto; flex-wrap: wrap"
  >
    
      <v-list v-if="buttons.length !== 0">
        <v-list-item v-for="(button, index) in buttons" :key="index">
          <v-dialog v-model="button.dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-list-content v-bind="attrs" v-on="on">
                <v-list-item-title :class="button.color + '--text'">{{
                  button.text
                }}</v-list-item-title>
                <v-list-item-subtitle>
                  {{ button.description }}
                </v-list-item-subtitle>
              </v-list-content>
            </template>

            <v-card outlined>
              <v-card-title :class="button.color + '--text'">
                {{ button.text }}
              </v-card-title>
                <v-card-subtitle>{{ button.description }}</v-card-subtitle>
              <v-card-text>
                <v-list>
  
              <v-list-item  v-for="(item, index) in button.list" :key="index">
                <v-list-item-title @click="SubmitClick(button.id, item.value)"
                  >{{ item.text }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-spacer></v-spacer>

          <v-list-item-action>
            <v-btn icon @click="SubmitClick(button.id, 'default')">
              <v-icon color="grey lighten-1">mdi-walk</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
  </v-card>
</template>
<script>
export default {
  name: "ListView",
  props: ["type", "height"],
  computed: {
    buttons() {
      return this.$store.state.userStore.buttons[this.type];
    },
  },
  methods: {
    SubmitClick(id, value) {
      this.$store.commit(
        "pushMessage",
        JSON.stringify({ type: "click", payload: { id: id, value: value } })
      );
    },
  },
  data: () => {
    return {};
  },
  mounted: () => {},
};
</script>
