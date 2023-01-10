<template>
  <v-overlay :value="!wsConnectState">
    <v-container>
      <v-alert text color="primary" class="mb-0" tile icon="mdi-web-remove" prominent border="left">
        <v-card-title>
          連線中
        </v-card-title>
        <v-card-subtitle>如果遲遲無法連線可以嘗試重新載入此分頁，並且避免同時在多個頁面登入。</v-card-subtitle>
        <v-btn color="primary" text block @click="initWebsocket()">立即重新連線</v-btn>
      </v-alert>
      <v-progress-linear indeterminate color="primary" size="64"></v-progress-linear>
    </v-container>
  </v-overlay>
</template>
<script>
import { WS } from "@/plugins/ws";

export default {
  mixins: [WS],
  name: 'DisconnectOverlay',
  computed: {
    wsConnectState() {
      return this.$store.state.wsStore.connect;
    },
  },
};
</script>