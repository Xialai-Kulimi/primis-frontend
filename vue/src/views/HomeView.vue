<template>
  <v-container>
    <v-alert type="error" outlined>{{user.id}}</v-alert>
    <v-row dense>
      <v-col cols="12" sm="6">
        <Caption></Caption>
      </v-col>
      <v-col cols="12" sm="6">
        <Surrounding></Surrounding>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12" sm="8">
        <Entity></Entity>
      </v-col>
      <v-col cols="12" sm="4">
        <Status></Status>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Caption from '@/components/Caption';
import Surrounding from '@/components/Surrounding';
import Entity from '@/components/Entity';
import Status from '@/components/Status';

export default {
  name: 'Home',
  data: ()=>{
    local_operation: {

    }
  },
  computed: {
    operation() {
      return this.$store.state.operation;
    }
  },
  watch: {
    operation: {
      handler: function () {
        
      },
    },
  },
  components: {
    Caption,
    Surrounding,
    Entity,
    Status,
  },
}
</script>
