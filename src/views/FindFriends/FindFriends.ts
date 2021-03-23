import Vue from 'vue';

declare interface SearchData {
    search_string: string;
}

export default Vue.extend({
    name: 'FindFriends',
    data() {
        return {
            url: "http://twitterclone-dev.tk/",
            success: false,
            loading: true,
            searchForm: {} as SearchData,
            userList: () => [],
            userListError: {}
        }
    },

    mounted: function () {
        //
    },

    methods: {
        searchUsers: function () {
            Vue.axios.get("http://twitterclone-dev.tk/api/users/find", this.searchForm)
                .then((response) => {
                    console.log(response);
                    this.userList = response.data;
                }).catch(error => {
                this.userListError = error.response.data ? error.response.data : "";
                console.log(this.userListError);
            });
        }
    }
});
