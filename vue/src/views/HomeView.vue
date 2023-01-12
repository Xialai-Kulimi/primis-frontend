<template>
  <v-container class="pa-0">
    <v-card outlined>
      <v-responsive class="pa-0 overflow-auto" max-height="30vh">
        <CellList list_name="header"></CellList>
      </v-responsive>
      <v-divider></v-divider>
      <v-responsive class="pa-0 overflow-auto" max-height="100vh">
        <CellList list_name="body"></CellList>
      </v-responsive>
      <v-divider></v-divider>
      <v-responsive class="pa-0 overflow-auto" max-height="100vh">
        <CellList list_name="footer"></CellList>
      </v-responsive>
    </v-card>
  </v-container>
</template>

<script>
import CellList from "@/components/main/CellList";

export default {
  name: "HomeView",
  data: () => {
    return {};
  },
  methods: {
    handle_link_click(path) {
      console.log("handle " + path);
    },
  },
  computed: {
    // operation() {
    //   return this.$store.state.userStore.operation;
    // },
  },
  watch: {},
  components: { CellList },
  mounted() {
    window.addEventListener("click", (event) => {
      let { target } = event;
      while (target && target.tagName !== "A") target = target.parentNode;

      if (target && target.matches("a:not([href*='://'])") && target.href) {
        const url = new URL(target.href);
        const to = url.pathname;
        if (to.startsWith("/api/")) {
          this.handle_link_click(to);
          event.preventDefault();
        }
      }
    });
  },
};
</script>
