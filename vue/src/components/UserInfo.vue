<template>

    <v-list-item @click="edit_user_config" :ripple="false">

        <v-list-item-icon class="text-h4">
            <v-container class="CloisterBlack pa-0 text-center primary--text">K</v-container>
        </v-list-item-icon>

        <v-list-item-content>
            <v-list-item-title>Kulimi</v-list-item-title>
            
        </v-list-item-content>
        <!-- <v-list-item-action>
                <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
            </v-list-item-action> -->
    </v-list-item>

</template>
<script>


export default {

    name: 'UserInfo',
    methods: {
        edit_user_config: function () {}
    }

};
</script>