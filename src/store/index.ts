import Vue from 'vue';
import Vuex from 'vuex';
import ApiConfig from "@/interfaces/ApiConfig";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: null as string | null,
        apiconfig: {} as ApiConfig
    },
    mutations: {
        setToken(state, token: string) {
            state.apiconfig = {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
            state.token = token;
        }
    }
})

export default store;
