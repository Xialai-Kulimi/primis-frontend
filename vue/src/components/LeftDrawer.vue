<template>
  <v-container>
    <v-fade-transition>
      <v-btn
        v-if="!left_drawer"
        @click="left_drawer = !left_drawer"
        elevation="2"
        fab
        fixed
        left
        bottom
        color="#121212"
      >
        <v-icon color="grey">mdi-menu</v-icon>
      </v-btn>
    </v-fade-transition>
    <v-navigation-drawer app v-model="left_drawer" color="#121212">
      <template v-slot:prepend>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-card-title>
                <pre class="primary--text">PRIMIS</pre>
              </v-card-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click="left_drawer = !left_drawer">
                <v-icon color="grey">
                  mdi-close
                </v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          
        </v-list>
        <!-- <v-list dense>
          <v-list-item :ripple="false" @click="$router.push('/')">
            <v-list-item-content>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :ripple="false" to="/about">
            <v-list-item-content>
              <v-card-title> 關於 </v-card-title>
            </v-list-item-content>
          </v-list-item>
        </v-list> -->
      </template>

      <template v-slot:append>
        <LeftSideBarAppend></LeftSideBarAppend>
      </template>
    </v-navigation-drawer>
  </v-container>
</template>
<script>
import LeftSideBarAppend from "@/components/LeftSideBarAppend";

export default {
  name: "LeftDrawer",

  data: () => ({
    left_drawer: null,
  }),
  components: { LeftSideBarAppend },
};
</script>
