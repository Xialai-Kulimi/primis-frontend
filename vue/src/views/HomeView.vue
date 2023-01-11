<template>
  <v-container>
    <BarArea></BarArea>
    <v-card outlined>
      <NormalArea></NormalArea>
    </v-card>
  </v-container>
</template>

<script>
import BarArea from "@/components/main/BarArea";
import NormalArea from "@/components/main/BarArea";
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
  components: { BarArea, NormalArea },
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
