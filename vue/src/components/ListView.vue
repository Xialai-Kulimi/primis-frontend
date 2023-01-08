<template>
  <v-card
    elevation="0"
    :height="height"
    style="overflow-x: auto; flex-wrap: wrap"
  >
    <v-dialog v-model="dialog" width="500">
      <v-card outlined v-if="dialog_button">
        <v-card-title :class="dialog_button.style">
          {{ dialog_button.text }}
        </v-card-title>
        <v-card-subtitle>{{ dialog_button.description }}</v-card-subtitle>
        <v-card-text>
          <v-list>
            <v-list-item
              v-for="(item, index2) in dialog_button.list"
              :key="index2"
              @click="SubmitClick(dialog_button.id, item.value)"
              :disabled="item.disabled"
            >
              <v-list-item-title>{{ item.text }} </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-lazy
      transition="fade-transition"
      :options="{
        threshold: 0.5,
      }"
    >
      <v-list v-if="buttons.length !== 0" flat>
        <v-list-item
          v-for="(button, index) in buttons"
          @click="OpenDialog(button)"
          :disabled="button.disabled"
          :key="index"
        >
          <v-list-item-content>
            <v-list-item-title :class="button.style">{{
              button.text
            }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ button.description }}
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action v-if="button.value">
            <v-btn
              text
              rounded
              @click.stop.prevent="SubmitClick(button.id, button.value)"
              class="text-caption"
              color="grey lighten-1"
            >
              {{ button.action }}
              <v-icon color="grey lighten-1">{{ button.icon }}</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-lazy>
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
    OpenDialog(button) {
      this.dialog_button = structuredClone(button);
      this.dialog = true;
    },
  },
  data: () => {
    return {
      dialog: false,
      dialog_button: {},
    };
  },
  mounted: () => {},
};
</script>
