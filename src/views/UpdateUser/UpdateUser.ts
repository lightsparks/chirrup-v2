import Vue from "vue";
import User from "@/interfaces/User";
import FormRules from "@/partials/FormRules";
import {AxiosRequestConfig} from "axios";

export default Vue.extend({
    name: 'UpdateUser',
    data: function (): Record<string, any> {
        return {
            formRules: FormRules,
            currentInfo: {} as User,
            currentInfoError: {},
            userPatch: {} as User,
            userPatchError: {},
            snackUpdate: false
        };
    },
    beforeMount: function () {
        this.getCurrent;
    },
    methods: {
        getCurrent: function (url: string, config?: AxiosRequestConfig) {
            Vue.axios.get("http://twitterclone-dev.tk/api/me", this.$store.state.apiconfig)
                .then((response) => {
                    console.log(response);
                    this.userPatch = response.data;
                }).catch(error => {
                this.currentInfoError = error.response.data ? error.response.data : "";
                console.log(this.currentInfoError);
            });
        },

        patchUser: function () {
            Vue.axios.patch("http://twitterclone-dev.tk/api/me", this.userPatch, this.$store.state.apiconfig)
                .then((response) => {
                    console.log(response);
                    this.snackUpdate = true;
                    setTimeout(() => {
                        this.$router.push("Me");
                    }, 1000);
                }).catch(error => {
                this.userPatchError = error.response.data ? error.response.data : "";
                console.log(this.userPatchError);
            });
        },

        toMe: function () {
            this.$router.push("Me");
        }
    }
});