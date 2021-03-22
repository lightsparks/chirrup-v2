import Vue from 'vue';

export default Vue.extend({
    name: 'Friends',
    data() {
        return {
            url: "http://twitterclone-dev.tk/",
            success: false,
            loading: true,
            friends: [],
            friendsError: {},
        }
    },

    mounted: function() {
        this.getFriends();
    },

    methods: {
        getFriends: function () {
            Vue.axios.get("http://twitterclone-dev.tk/api/friends", this.$store.state.apiconfig)
                .then((response) => {
                    /*console.log(response);*/
                    this.friends = response.data;
                }).catch(error => {
                this.friendsError = error.response.data ? error.response.data : "";
                console.log(this.friendsError);
            });
        },
        toSearchUser: function () {
            this.$router.push("Find Friends");
        }
    }
});
