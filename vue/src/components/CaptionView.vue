<template>
  <v-card outlined height="40vh">
    <v-layout column reverse fill-height>
      <v-container style="padding: 0">
        <v-text-field 
          dense 
          solo 
          hide-details
          label="說些什麼吧"
          v-model="input_message"
          @change="SubmitMesssage"
        ></v-text-field>
      </v-container>

      <v-card-text style="padding-bottom: 0;overflow: auto;">
        <div v-for="item in caption" :key="item" :class="item.class">{{ item.message }}</div>
        
      </v-card-text>

    </v-layout>
  </v-card>
</template>
<script>

export default {
  name: 'CaptionView',
  computed: {
    caption() {
      return this.$store.state.caption;
    }
  },
  methods: {
    SubmitMesssage() {
      if (this.input_message != ''){

        console.log(this.input_message)
        this.input_message = ''
      }
    }
  },
  data: () => {
    return {
      input_message: ''
    }
  },
  mounted: () => {

  }

};
</script>
