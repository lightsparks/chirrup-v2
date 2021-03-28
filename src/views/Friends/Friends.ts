import Vue from 'vue';
import User from "@/interfaces/User";

export default Vue.extend({
    name: 'Friends',
    data() {
        return {
            url: "http://twitterclone-dev.tk/",
            success: false as boolean,
            loading: true as boolean,
            friends: [] as Array<User>,
            friendsError: {},
            snackDestroy: false
        }
    },

    mounted: function() {
        this.getFriends();
    },

    methods: {
        getFriends: function () {
            Vue.axios.get("http://twitterclone-dev.tk/api/friends", this.$store.state.apiconfig)
                .then((response) => {
                    this.friends = response.data;
                }).catch(error => {
                this.friendsError = error.response.data ? error.response.data : "";
                console.log(this.friendsError);
            });
        },
        toSearchUser: function () {
            this.$router.push("FindFriends");
        },
        destroyConnection: function (itemID: number) {
            Vue.axios.delete("http://twitterclone-dev.tk/api/friends", {...this.$store.state.apiconfig, data: {user_id: itemID}})
                .then((response) => {
                    console.log(response);
                    this.snackDestroy = true;
                    this.getFriends();

                }).catch(error => {
                    const userListError = error.response.data ? error.response.data : "";
                console.log(userListError);
            });
        }
    }
});
