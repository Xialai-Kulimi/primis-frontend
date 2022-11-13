<template>
    <v-card elevation="0" :height="height" style="overflow-x: auto; flex-wrap: wrap;">
        <v-card-text>
            <v-layout row>
                <v-form v-for="(button, index) in buttons" :key="index" style="padding: 2px">
                    <v-btn outlined :color="button.style" @click="SubmitClick(button.id, 'default')">{{ button.text }}
                    </v-btn>
                    <v-menu>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn :color="button.style" v-bind="attrs" v-on="on" icon>
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, index) in button.list" :key="index">
                                <v-list-item-title @click="SubmitClick(button.id, item.value)">{{ item.text }}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-form>
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
        }
    },
    data: () => {
        return {

        }
    },
    mounted: () => {

    }
};
</script>
  