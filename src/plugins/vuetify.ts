import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import axios from 'axios';
import VueAxios from 'vue-axios';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.use(Vuetify);
Vue.use(VueAxios, axios);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#90be6d',
                secondary: '#4d908e',
                accent: '#277DA1',
                error: '#f94144',
                info: '#f9c74f',
                success: '#43aa8b',
                warning: '#f9844a',
            },
        },
    },
    icons: {
        iconfont: 'md' || 'fa'
    }
});
