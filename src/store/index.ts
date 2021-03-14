import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: null as string | null
    },
    mutations: {
        setToken(state, payload: string) {
            state.token = payload;
        }
    }
})

export default store;
