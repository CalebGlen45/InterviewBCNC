import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

const app = createApp(App);

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#9e4c23', // #062e70
          secondary: '#439775', // #64b5f6
          surface: '#FFFFFF',
          background: '#efefef',
          danger: '#E53935',
          'dark-blue': '#1A237E',
          'medium-grey': '#9e9e9e',
          'dark-grey': '#757575',
          'light-grey': '#EEEEEE',
        },
      },
    },
  },
});

app.use(router);
app.use(vuetify);

app.mount('#app');
