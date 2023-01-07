<template>
    <v-lazy>
        <v-list-item>

            <v-list-item-avatar>
                <img src="https://randomuser.me/api/portraits/women/81.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>Jane Smith</v-list-item-title>
                <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item-content>
            <!-- <v-list-item-action>
                <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
            </v-list-item-action> -->
        </v-list-item>
    </v-lazy>
</template>
<script>


export default {

    name: 'UserInfo',

};
</script>