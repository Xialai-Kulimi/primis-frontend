<template>
    <v-card elevation="0" :height="height">
        <v-layout column reverse fill-height>
            <v-form style="padding: 0" v-if="input" @submit.prevent="SubmitMesssage">
                <v-text-field flat dense solo hide-details label="說些什麼吧" v-model="input_message">
                </v-text-field>
            </v-form>
            <v-card-text style="padding-bottom: 0;overflow: auto;" ref="view">
                <div v-for="(item, i) in messages" :key="i" :class="item.style">{{ item.message }}</div>
            </v-card-text>
        </v-layout>
    </v-card>
</template>
<script>

export default {
    name: 'TextsView',
    props: ['type', 'input', 'height'],
    computed: {
        messages() {
            return this.$store.state.userStore.texts[this.type];
        }
    },
    watch: {
        messages: {
            handler: function () {
                this.$nextTick(function () {
                    let dom = this.$refs.view
                    dom.scrollTop = dom.scrollHeight
                })
            }
        }
    },
    methods: {
        SubmitMesssage() {
            if (this.input_message != '') {
                this.$store.commit("pushMessage", JSON.stringify({ type: 'chat', content: this.input_message }))
                this.input_message = ''
            }
        }
    },
    data: () => {
        return {
            isTyping: false,
            input_message: ''
        }
    },
    mounted: () => {

    }

};
</script>
  