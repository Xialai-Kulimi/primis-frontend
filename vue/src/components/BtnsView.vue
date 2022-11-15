<template>
    <v-card elevation="0" :height="height" style="overflow-x: auto; flex-wrap: wrap;">
        <v-card-text>
            <v-layout row>
                <v-dialog v-for="(button, index) in buttons" :key="index" width="500">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" outlined :class="button.style+' ma-2'" :disabled="button.disabled" >
                            {{ button.text }}
                        </v-btn>
                    </template>
                    <v-card outlined>
                        <v-card-title :class="button.style">
                            {{ button.text }}
                        </v-card-title>
                        <v-card-subtitle>{{ button.description }}</v-card-subtitle>
                        <v-card-text>
                            <v-list>
                                <v-list-item v-for="(item, index2) in button.list" :key="index2"
                                    @click="SubmitClick(button.id, item.value)" :disabled="item.disabled">
                                    <v-list-item-title>{{ item.text }} </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                </v-dialog>
                <!-- <v-btn outlined :color="button.style" :disabled="button.disabled" @click="SubmitClick(button.id, 'default')">{{ button.text }}
                    </v-btn>
                    <v-menu>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn :color="button.style" v-bind="attrs" v-on="on" icon>
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, index2) in button.list" :key="index2" :disabled="item.disabled">
                                <v-list-item-title @click="SubmitClick(button.id, item.value)">{{ item.text }}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu> -->

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
  