<template>
    <v-list>
        <UserInfo></UserInfo>
        
        <v-divider></v-divider>

        <v-list-item @click="logout" :ripple="false">
            <v-list-item-icon>
                <v-icon color="primary">mdi-logout-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>登出</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item @click="setting" :ripple="false">
            <v-list-item-icon>
                <v-icon color="primary">mdi-cog-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>設定</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        
    </v-list>
</template>
<script>
import UserInfo from '@/components/UserInfo';

export default {
    name: 'LeftSideBarAppend',
    components: { UserInfo },
    data: () => ({
        
    }),
    methods: {
        logout: function () {},
        setting: function () {}
    }

};
</script>