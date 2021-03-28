import Vue from 'vue';
import FormRules from "@/partials/FormRules.ts";
import {AxiosRequestConfig} from "axios";

export default Vue.extend({
    name: 'FindFriends',
    data() {
        return {
            formRules: FormRules,
            url: "http://twitterclone-dev.tk/",
            success: false,
            loading: true,
            searchForm: {
                search_string: ""
            },
            userList: () => [],
            userListError: {},
            snackConnect: false,

        }
    },

    mounted: function () {
        //
    },

    methods: {
        searchUsers: function (url: string, config?: AxiosRequestConfig) {
            Vue.axios.get("http://twitterclone-dev.tk/api/users/find?search_string=" + this.searchForm.search_string, this.$store.state.apiconfig)
                .then((response) => {
                    console.log(response);
                    this.userList = response.data;
                }).catch(error => {
                this.userListError = error.response.data ? error.response.data : "";
                console.log(this.userListError);
            });
        },
        makeConnection: function (itemID: number) {
            Vue.axios.post("http://twitterclone-dev.tk/api/friends", {user_id: itemID}, this.$store.state.apiconfig)
                .then((response) => {
                    console.log(response);
                    this.snackConnect = true;
                    setTimeout(() => {
                        this.$router.push("Friends");
                    }, 1000);

                }).catch(error => {
                this.userListError = error.response.data ? error.response.data : "";
                console.log(this.userListError);
            });
        }
    }
});
