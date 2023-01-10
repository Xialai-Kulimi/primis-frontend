<template>
  <v-container>
    
    <v-card outlined>

    </v-card>
  </v-container>
</template>

<script>
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
  components: {},
  mounted() {
    window.addEventListener("click", (event) => {
      let { target } = event;
      while (target && target.tagName !== "A") target = target.parentNode;

      if (target && target.matches("a:not([href*='://'])") && target.href) {
        const url = new URL(target.href);
        const to = url.pathname;
        this.handle_link_click(to);
        event.preventDefault();
      }
    });
  },
};
</script>
