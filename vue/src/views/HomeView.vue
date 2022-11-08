<template>
  <v-container>
    <v-alert 
      v-if="toggle.alert"
      :type="local_operation.alert.color" 
      dismissible
      outlined
      
      >{{local_operation.alert.text}}</v-alert>
    <v-snackbar
      v-if="toggle.snackbar"
      v-model="local_operation.snackbar"
      :color="local_operation.snackbar.color"
    >
      {{ local_operation.snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="local_operation.snackbar = false"
        >
          關閉
        </v-btn>
      </template>
    </v-snackbar>
    <v-dialog
      v-if="toggle.dialog"
      v-model="local_operation.dialog"
      max-width="500"
    >
      
      <v-card outlined>
        <v-card-title>{{local_operation.dialog.title}}</v-card-title>
        <v-card-text>{{local_operation.dialog.text}}</v-card-text>
      </v-card>

    </v-dialog>
    <v-dialog
      v-if="toggle.input"
      v-model="local_operation.input"
    >   

      <template v-for="i in local_operation.input" >
        <v-input :key="i">{{i}}</v-input>
      </template>
    </v-dialog>
    <v-row dense>
      <v-col cols="12" sm="6">
        <CaptionView/>
      </v-col>
      <v-col cols="12" sm="6">
        <SurroundingView/>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12" sm="8">
        <EntityView/>
      </v-col>
      <v-col cols="12" sm="4">
        <StatusView/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CaptionView from '@/components/CaptionView';
import SurroundingView from '@/components/SurroundingView';
import EntityView from '@/components/EntityView';
import StatusView from '@/components/StatusView';

export default {
  name: 'HomeView',
  data: ()=>{
    return {
      toggle: {input: false, dialog:true, alert: true},
      local_operation: {
      alert: {
        text: 'asdfas\nfd\ndfasdfasdf',
        color: 'error'
      },
      dialog: {
        title: 'asdfas',
        text: 'asdfaasl\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ndfasdf'
      },
      snackbar: {
        text: 'asdfsadfasdfasdfsadf',
        color: 'success'
      },
      input: [
        {type: 'text', label: 'pls input text', id: 'text1'},
        {type: 'textfield', label: 'pls input text', id: 'textfield1'},
        {type: 'select', label: 'pls input text', id: 'select1', config: {options: [{label: 'label1', id: '1'}, {label: 'label2', id: '2'}]}},
        {type: 'number', label: 'pls input text', id: 'text1'},
        {type: 'text', label: 'pls input text', id: 'text2', config: {max: 100, min: 20}},
        {type: 'textfield', label: 'pls input text', id: 'textfield2', config: {max: 100, min: 20}},
        {type: 'select', label: 'pls input text', id: 'select2',  config: {min: 1, max: 1, options: [{label: 'label1', id: '1'}, {label: 'label2', id: '2'}]}},
        {type: 'number', label: 'pls input text', id: 'text2', config: {max: 100, min: 20}},
      ]

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
          this.toggle[key] = true
          this.local_operation[key] = this.operation[key]
        }
      },
    },
  },
  components: {
    CaptionView,
    SurroundingView,
    EntityView,
    StatusView,
  },
}
</script>
