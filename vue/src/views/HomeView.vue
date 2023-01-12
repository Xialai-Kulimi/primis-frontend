<template>
  <v-container class="pa-0">
    <BarArea area_name="header"></BarArea>

    <NormalArea area_name="body"></NormalArea>

    <BottomArea area_name="footer"></BottomArea>
  </v-container>
</template>

<script>
import BarArea from "@/components/main/BarArea";
import NormalArea from "@/components/main/NormalArea";
import BottomArea from "@/components/main/BottomArea";

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
  components: { BottomArea, BarArea, NormalArea },
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
