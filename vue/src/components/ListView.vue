<template>
  <v-card
    elevation="0"
    :height="height"
    style="overflow-x: auto; flex-wrap: wrap"
  >
    <v-lazy
      transition="fade-transition"
      :options="{
        threshold: 0.5,
      }"
    >
      <v-list v-if="buttons.length !== 0" flat>
        <v-dialog
          v-for="(button, index) in buttons"
          :key="index"
          v-model="button.dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-list-item v-bind="attrs" v-on="on" :disabled="buttons.disabled">
              <v-list-item-content>
                <v-list-item-title :class="button.style">{{
                  button.text
                }}</v-list-item-title>
                <v-list-item-subtitle>
                  {{ button.description }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-spacer></v-spacer>

              <v-list-item-action>
                <v-btn icon @click.stop.prevent="SubmitClick(button.id, 'default')">
                  <v-icon color="grey lighten-1">{{icon}}</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </template>

          <v-card outlined>
            <v-card-title :class="button.style">
              {{ button.text }}
            </v-card-title>
            <v-card-subtitle>{{ button.description }}</v-card-subtitle>
            <v-card-text>
              <v-list>
                <v-list-item
                  v-for="(item, index) in button.list"
                  :key="index"
                  @click="SubmitClick(button.id, item.value)"
                  :disabled="item.disabled"
                >
                  <v-list-item-title>{{ item.text }} </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-list>
    </v-lazy>
  </v-card>
</template>
<script>
export default {
  name: "ListView",
  props: ["type", "height", "icon"],
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
