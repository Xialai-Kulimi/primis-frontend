<template>
  <v-container>
    <v-alert 
      :type="local_operation.alert.color" 
      dismissible outlined>{{local_operation.alert.text}}</v-alert>
    <v-snackbar
      v-model="local_operation.snackbar"
      :color="local_operation.snackbar.color"
    >
      {{ local_operation.snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="primary"
          text
          v-bind="attrs"
          @click="local_operation.snackbar = false"
        >
          關閉
        </v-btn>
      </template>
    </v-snackbar>
    <v-dialog
      v-model="local_operation.dialog"
    >
      <v-card outlined>
        <v-card-title>{{local_operation.dialog.title}}</v-card-title>
        <v-card-text>{{local_operation.dialog.text}}</v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="local_operation.input"
    >   

      <template v-for="i in local_operation.input" >
        <v-input :key="i">{{i}}</v-input>
      </template>
    </v-dialog>
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
    return {
      local_operation: {
      alert: {
        text: '',
        color: ''
      },
      dialog: {
        title: '',
        text: ''
      },
      snackbar: {
        text: '',
        color: ''
      },
      input: []

    }
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
        for (let key in this.operation){
          this.local_operation[key] = this.operation[key]
        }
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
