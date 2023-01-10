import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#ff5252',
        secondary: '#770000',
        accent: '#8c9eff',
        error: '#aa2222',
      },
    },
  },
});
