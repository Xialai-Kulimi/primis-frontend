<template>
  <v-app style="display: fixed">
    <DisconnectOverlay></DisconnectOverlay>
    <LeftDrawer></LeftDrawer>

    <v-main>
      <router-view />
      <v-layout justify-center>
        <router-link to="/about" class="grey--text text--darken-3">
          關於 PRIMIS
        </router-link>
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>
import { WS } from "@/plugins/ws";
import DisconnectOverlay from "@/components/DisconnectOverlay";
import LeftDrawer from "@/components/LeftDrawer";

export default {
  name: "App",
  mixins: [WS],
  data: () => ({
    ws: null,
  }),
  mounted: async function () {
    this.initWebsocket();
  },
  components: { DisconnectOverlay, LeftDrawer },
};
</script>
<style>
* {
  font-family: "微軟正黑體";
  white-space: pre-line;
}

html {
  height: 2vh;
  background-color: #121212;
}

.CloisterBlack {
  font-family: "CloisterBlack" !important;
}

.large {
  font-size: 6rem !important;
}

@font-face {
  font-family: "CloisterBlack";
  src: url("./assets/CloisterBlack.ttf");
}

router-link {
  text-decoration: none;
}
</style>
