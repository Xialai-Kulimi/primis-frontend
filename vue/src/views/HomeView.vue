<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <Caption></Caption>
      </v-col>
      <v-col cols="12" sm="6">
        <Surrounding></Surrounding>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Entity></Entity>
      </v-col>
      <v-col>
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

  components: {
    Caption,
    Surrounding,
    Entity,
    Status,
  },
}
</script>
