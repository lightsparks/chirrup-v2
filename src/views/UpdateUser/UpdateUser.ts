import Vue from "vue";
import User from "@/interfaces/User";
import FormRules from "@/partials/FormRules";
import axios from "axios";

export default Vue.extend({
    name: 'UpdateUser',
    data: function (): Record<string, any> {
        return {
            formRules: FormRules,
            userPatch: {} as User
        };
    },
    mounted: function () {
        //
    },
    methods: {
        patchUser: function () {
            axios.patch("http://twitterclone-dev.tk/api/me", this.userPatch, this.$store.state.apiconfig)
                .then((response) => {
                    console.log(response);
                    this.snackMessage = true;
                    setTimeout(() => {
                        this.$router.push("Home");
                    }, 1000);
                }).catch(function (error: any) {
                console.log(error);
            });
        },
    }
});