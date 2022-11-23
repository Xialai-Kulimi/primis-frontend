<template>
    <v-card elevation="0" :height="height" style="overflow-x: auto; flex-wrap: wrap;">
        <v-dialog v-model="dialog" v-if="dialog" :key="index" width="500">
            <v-card outlined>
                <v-card-title :class="dialog_button.style" v-text="dialog_button.text"></v-card-title>
                <v-card-subtitle>{{ dialog_button.description }}</v-card-subtitle>
                <v-card-text>
                    <v-list>
                        <v-list-item v-for="(item, index2) in dialog_button.list" :key="index2"
                            @click="SubmitClick(dialog_button.id, item.value)" :disabled="item.disabled">
                            <v-list-item-title>{{ item.text }} </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-card-text>
            <v-layout row v-if="buttons.length != 0">

                <v-btn v-for="(button, index) in buttons" :key="index" outlined :class="button.style + ' ma-2'"
                    :disabled="button.disabled" @click="OpenDialog(button)">
                    {{ button.text }}
                </v-btn>

            </v-layout>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    name: 'BtnsView',
    props: ['type', 'height'],
    computed: {
        buttons() {
            return this.$store.state.userStore.buttons[this.type];
        }
    },
    methods: {
        SubmitClick(id, value) {
            this.$store.commit("pushMessage", JSON.stringify({ type: 'click', payload: { id: id, value: value } }))
            // console.log(id, value)
        },
        OpenDialog(button) {
            this.dialog_button = structuredClone(button)
            this.dialog = true
        }
    },
    data: () => {
        return {
            dialog: false,
            dialog_button: {}
        }
    },
    mounted: () => {

    }
};
</script>
  