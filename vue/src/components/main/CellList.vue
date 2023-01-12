<template>
  <v-card-text>
    <div v-for="i in 50" :key="i">{{ i }} test {{ list_name }} text</div>
  </v-card-text>
</template>
<script>
export default {
  name: "CellList",
  props: ["list_name"],
  // computed: {
  //     messages() {
  //         return this.$store.state.userStore.texts[this.type];
  //     }
  // },
  // watch: {
  //     messages: {
  //         handler: function () {
  //             this.$nextTick(function () {
  //                 let dom = this.$refs.view
  //                 dom.scrollTop = dom.scrollHeight
  //             })
  //         }
  //     }
  // },
  // methods: {
  //     SubmitMesssage() {
  //         if (this.input_message != '') {
  //             this.$store.commit("pushMessage", JSON.stringify({ type: 'chat', content: this.input_message }))
  //             this.input_message = ''
  //         }
  //     }
  // },
  data: () => {
    return {
      // isTyping: false,
      // input_message: ''
    };
  },
  mounted: () => {},
};
</script>
