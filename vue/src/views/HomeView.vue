<template>
  <v-container>
    <v-alert v-if="toggle.alert" v-model="toggle.alert" :type="local_operation.alert.style" dismissible outlined>
      {{ local_operation.alert.text }}
    </v-alert>
    <v-snackbar v-model="toggle.snackbar" :color="local_operation.snackbar.style">
      {{ local_operation.snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="toggle.snackbar = false">
          關閉
        </v-btn>
      </template>
    </v-snackbar>
    <v-dialog :retain-focus="false" :persistent="local_operation.input.persistent" v-model="toggle.input"
      max-width="500">
      <v-card outlined>
        <v-card-title>{{ local_operation.input.title }}</v-card-title>
        <v-card-subtitle>{{ local_operation.input.subtitle }}</v-card-subtitle>
        <v-form>
          <v-container v-for="(i, index) in local_operation.input.inputs" :key="index"
            style="padding-top: 0; padding-bottom: 0">
            <v-text-field outlined v-if="i.type === 'text'" :label="i.label" v-model="form_answer[i.id]"></v-text-field>
            <v-textarea outlined v-if="i.type === 'textfield'" :label="i.label" v-model="form_answer[i.id]">
            </v-textarea>
            <v-select outlined v-if="i.type === 'select'" :label="i.label" v-model="form_answer[i.id]"
              :items="i.config.options"></v-select>
            <v-card-text v-if="i.type === 'slider'">
              <v-slider outlined :label="i.label" v-model="form_answer[i.id]" :min="i.config.min" :max="i.config.max">
              </v-slider>
            </v-card-text>
            <v-card-text v-if="i.type === 'radio'">
              <v-radio-group v-model="form_answer[i.id]">
                <v-radio v-for="(radio, index2) in i.config.options" :key="index2" :label="radio.text"
                  :value="radio.value">
                </v-radio>
              </v-radio-group>
            </v-card-text>
          </v-container>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="InputSubmit"> 送出 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog :retain-focus="false" :persistent="local_operation.list.persistent" v-model="toggle.list" max-width="500">
      <v-card outlined>
        <v-card-title>
          {{ local_operation.list.title }}
        </v-card-title>
        <v-card-subtitle>
          {{ local_operation.list.subtitle }}
        </v-card-subtitle>
        <v-card-text>
          <v-list>
            <v-list-item v-for="(item, index) in local_operation.list.list" :key="index"
              @click="ListSubmit(local_operation.list.id, item.id)">
              <v-list-item-title :class="item.style">{{ item.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog :retain-focus="false" v-model="toggle.dialog" max-width="500">
      <v-card outlined>
        <v-card-title>{{ local_operation.dialog.title }}</v-card-title>
        <v-card-text>{{ local_operation.dialog.text }}</v-card-text>
      </v-card>
    </v-dialog>
    <v-card outlined>
      <v-card-title v-if="local_operation.text">
        {{ local_operation.text.title }}
      </v-card-title>
      <v-card-subtitle v-if="local_operation.text">
        {{ local_operation.text.subtitle }}
      </v-card-subtitle>
      <v-card-text>



        <v-row dense>
          <v-col cols="12" sm="4">
            <v-expansion-panels accordion flat value="true">

              <v-expansion-panel>
                <v-expansion-panel-header>

                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <ListView height="400" type="target" />
                  <v-divider></v-divider>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

          </v-col>

          <v-col cols="12" sm="4">
            <v-expansion-panels accordion flat value="true">

              <v-expansion-panel>
                <v-expansion-panel-header>

                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <ListView height="400" type="player" />
                  <v-divider></v-divider>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>

          <v-col cols="12" sm="4">
            <v-expansion-panels accordion flat value="true">

              <v-expansion-panel>
                <v-expansion-panel-header>

                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <ListView height="400" type="reachable" />
                  <v-divider></v-divider>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>

        </v-row>
        <v-expansion-panels>
        </v-expansion-panels>

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
          <v-col cols="12" sm="4">
            <TextsView height="400" type="status" />
            <v-divider></v-divider>
          </v-col>
          <v-col cols="12" sm="8">
            <BtnsView height="400" type="inventory" />
            <v-divider></v-divider>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <!-- <v-row dense>
      <v-col cols="12">
        <TextsView height="40vh" type="caption" :input="true" />
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
import TextsView from "@/components/TextsView";
import BtnsView from "@/components/BtnsView";
import ListView from "@/components/ListView";

export default {
  name: "HomeView",
  data: () => {
    return {

      form_answer: {},
      toggle: {
        dialog: false,
        alert: false,
        snackbar: false,
        input: false,
        list: false,
      },
      answer: {
        dialog: false,
        input: false,
        list: false,
      },
      local_operation: {
        alert: {
          text: '',
          style: ''
        },
        dialog: {
          title: '',
          text: ''
        },
        snackbar: {
          text: '',
          style: ''
        },
        input: {
          title: "",
          subtitle: '',
          persistent: false,
          inputs: [

          ]
        },
        text: false,
        list: {
          title: "",
          subtitle: "",
          id: "",
          list: [],
        },
        // alert: {
        //   text: 'asdfas\nfd\ndfasdfasdf',
        //   style: 'error'
        // },
        // dialog: {
        //   title: 'asdfas',
        //   text: 'asdfaasl\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ndfasdf'
        // },
        // snackbar: {
        //   text: 'asdfsadfasdfasdfsadf',
        //   style: 'success'
        // },
        // input: {
        //   id: 'input_isdfasdf'
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
        // text: {title: '123123123', subtitle: 'asdfasdf'}
        // list: {
        //   title: "asdfasdf",
        //   subtitle: "asdfasdf",
        //   id: "asdfasdfasdfasdfasd f",
        //   list: [{ text: "123123123", style: "primary--text", id: "123123123" },{ text: "123123123", style: "primary--text", id: "123123123" },{ text: "關閉", style: "error--text", id: "123123123" }],
        // },
      },
    };
  },
  methods: {
    InputSubmit() {
      this.answer.input = true
      this.$store.commit(
        "pushMessage",
        JSON.stringify({ type: "input", id: this.local_operation.input.id, payload: this.form_answer })
      );
      this.toggle.input = false
    },
    ListSubmit(id, value) {
      this.answer.list = true
      this.$store.commit(
        "pushMessage",
        JSON.stringify({ type: "list", id: id, payload: value })
      );
      this.toggle.list = false
    },
  },
  computed: {
    operation() {
      return this.$store.state.userStore.operation;
    },
  },
  watch: {
    operation: {
      handler: function () {
        for (let key in this.operation) {
          this.toggle[key] = true
          if (key === "input") {
            this.form_answer = {}
          }
          this.local_operation[key] = this.operation[key];
          this.answer[key] = false
        }
      },
    },
    'toggle.input': {
      handler: function () {
        if (this.toggle.input == false && this.answer.input == false) {
          this.$store.commit(
            "pushMessage",
            JSON.stringify({ type: "input", id: this.local_operation.input.id, close: true })
          );
        }
      }
    },
    'toggle.list': {
      handler: function () {
        if (this.toggle.list == false && this.answer.list == false) {
          this.$store.commit(
            "pushMessage",
            JSON.stringify({ type: "list", id: this.local_operation.list.id, close: true })
          );
        }
      }
    },
    'toggle.dialog': {
      handler: function () {
        if (this.toggle.dialog == false) {
          this.$store.commit(
            "pushMessage",
            JSON.stringify({ type: "dialog", close: true })
          );
        }
      }
    },
  },
  components: {
    TextsView,
    BtnsView,
    ListView,
  },
};
</script>
