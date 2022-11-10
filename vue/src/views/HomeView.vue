<template>
  <v-container>
    <v-alert v-if="toggle.alert" :type="local_operation.alert.color" dismissible outlined>
      {{ local_operation.alert.text }}
    </v-alert>
    <v-snackbar v-if="toggle.snackbar" v-model="toggle.snackbar" :color="local_operation.snackbar.color">
      {{ local_operation.snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="local_operation.snackbar = false">
          關閉
        </v-btn>
      </template>
    </v-snackbar>
    <v-dialog v-if="toggle.dialog" v-model="toggle.dialog" max-width="500">

      <v-card outlined>
        <v-card-title>{{ local_operation.dialog.title }}</v-card-title>
        <v-card-text>{{ local_operation.dialog.text }}</v-card-text>
      </v-card>

    </v-dialog>
    <v-dialog v-if="toggle.input" :persistent="local_operation.input.persistent" v-model="toggle.input" max-width="500">
      <v-card outlined>
        {{ form_answer }}}
        <v-card-title>{{ local_operation.input.title }}</v-card-title>
        <v-card-subtitle>{{ local_operation.input.subtitle }}</v-card-subtitle>
        <v-form>
          <v-container v-for="i in local_operation.input.inputs" :key="i" style="padding-top: 0; padding-bottom: 0">
            <v-text-field outlined v-if="i.type === 'text'" :label="i.label" v-model="form_answer[i.id]"></v-text-field>
            <v-textarea outlined v-if="i.type === 'textfield'" :label="i.label" v-model="form_answer[i.id]">
            </v-textarea>
            <v-select outlined v-if="i.type === 'select'" :label="i.label" v-model="form_answer[i.id]"
              :items="i.config.options"></v-select>
            <v-slider outlined v-if="i.type === 'slider'" :label="i.label" v-model="form_answer[i.id]"
              :min="i.config.min" :max="i.config.max" thumb-label></v-slider>
            <v-radio-group v-if="i.type === 'radio'" v-model="form_answer[i.id]">
              <v-radio v-for="radio in i.config.options" :key="radio" :label="radio.text" :value="radio.value">
              </v-radio>
            </v-radio-group>
          </v-container>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="formSubmit">
            送出
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-row dense>
      <v-col cols="12">

        <BtnsView type="reachable" />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12" sm="8">
        <BtnsView type="target" />
      </v-col>
      <v-col cols="12" sm="4">
        <TextsView height="20vh" type="status" />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12" sm="6">
        <TextsView height="40vh" type="surrounding" />
      </v-col>
      <v-col cols="12" sm="6">
        <TextsView height="40vh" type="caption" :input="true" />
      </v-col>
    </v-row>
    <!-- <v-row dense>
      <v-col cols="12">
        <TextsView height="40vh" type="caption" :input="true" />
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>

import TextsView from '@/components/TextsView';
import BtnsView from '@/components/BtnsView';

export default {
  name: 'HomeView',
  data: () => {
    return {
      form_answer: {},
      toggle: {
        // input: true
      },
      local_operation: {
        // alert: {
        //   text: 'asdfas\nfd\ndfasdfasdf',
        //   color: 'error'
        // },
        // dialog: {
        //   title: 'asdfas',
        //   text: 'asdfaasl\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ndfasdf'
        // },
        // snackbar: {
        //   text: 'asdfsadfasdfasdfsadf',
        //   color: 'success'
        // },
        // input: {
        //   title: "asdfasdfasdf",
        //   subtitle: 'asdfasdf',
        //   persistent: true,
        //   inputs: [

        //     { type: 'text', label: 'pls input text', id: 'text1' },
        //     { type: 'textfield', label: 'pls input text', id: 'textfield1' },
        //     { type: 'select', label: 'pls input text', id: 'select1', config: { options: [{ text: 'label1', value: '1' }, { text: 'label2', value: '2' }] } },
        //     { type: 'slider', label: 'pls input text', id: 'slider1', config: { min: 0, max: 10 } },
        //     { type: "radio", label: "label", id: "radio_id", config: { options: [{ text: 'label1', value: '1' }, { text: 'label2', value: '2' }] } },
        //   ]
        // }

      }
    }
  },
  methods: {
    formSubmit() {
      console.log(JSON.stringify(this.form_answer))
      this.toggle.input = false
    }
  },
  computed: {
    operation() {
      return this.$store.state.userStore.operation;
    }
  },
  watch: {
    operation: {
      handler: function () {
        for (let key in this.operation) {
          this.toggle[key] = true
          if (key === 'input') {
            this.form_answer = {}
          }
          this.local_operation[key] = this.operation[key]
        }
      },
    },
  },
  components: {
    TextsView,
    BtnsView
  },
}
</script>
