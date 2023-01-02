<template>
  <v-card-text>
    <v-row dense>
      <v-col cols="12" sm="4">
        <ListView height="400" type="target" />
        <v-divider></v-divider>
      </v-col>

      <v-col cols="12" sm="4">
        <ListView height="400" type="player" />
        <v-divider></v-divider>
      </v-col>

      <v-col cols="12" sm="4">
        <ListView height="400" type="reachable" />
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <!-- <v-row dense>
      <v-col cols="12">
        <BtnsView height="20vh" type="reachable" />
      </v-col>
    </v-row> -->
    <v-row dense>
      <v-col cols="12" sm="6">
        <TextsView height="400" type="surrounding" />
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12" sm="6">
        <TextsView height="400" type="caption" :input="true" />
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <BtnsView height="400" type="inventory" />
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
import TextsView from "@/components/TextsView";
import BtnsView from "@/components/BtnsView";
import ListView from "@/components/ListView";
export default {
  name: "ClassicHome",
  components: { TextsView, BtnsView, ListView },
}
</script>

<style scoped>

</style>