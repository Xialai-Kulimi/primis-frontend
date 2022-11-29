<template>
  <v-card-text>
    <v-row dense>
      <v-col cols="12" sm="6">
        <v-tabs v-model="tab">
          <v-tab v-for="(icon, index) in ['mdi-walk', 'mdi-account-multiple-outline', 'mdi-map-marker-alert-outline']" :key="index">
            <v-icon>{{ icon }}</v-icon>
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item :transition="false" key="0">
            <ListView :height="left_view_height" type="target" />
          </v-tab-item>
          <v-tab-item :transition="false" key="1">
            <ListView :height="left_view_height" type="player" />
          </v-tab-item>
          <v-tab-item :transition="false" key="2">
            <ListView :height="left_view_height" type="reachable" />
          </v-tab-item>
        </v-tabs-items>
      </v-col>
      <v-col cols="12" sm="6">
        <v-tabs v-model="sub_tab">
          <v-tab v-for="(icon, index) in ['mdi-chat-processing-outline', 'mdi-panorama-outline']" :key="index">
            <v-icon>{{ icon }}</v-icon>
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="sub_tab">
          <v-tab-item :transition="false" key="0">
            <TextsView :height="right_text_height" type="caption" :input="true" />
          </v-tab-item>
          <v-tab-item :transition="false" key="1">
            <TextsView :height="right_text_height" type="surrounding" />
          </v-tab-item>
        </v-tabs-items>
        <BtnsView :height="right_btn_height" type="inventory" />
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
import TextsView from "@/components/TextsView";
import BtnsView from "@/components/BtnsView";
import ListView from "@/components/ListView";
export default {
  name: "InventoryHome",
  components:{TextsView,BtnsView,ListView},
  data:()=>{
    return{
      tab:null,
      sub_tab:null
    }
  },
  props:{
    right_btn_height:Number,
    left_view_height:Number,
    right_text_height:Number
  }
}
</script>

<style scoped>

</style>