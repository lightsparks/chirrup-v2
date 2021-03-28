import Vue from 'vue';
import User from "@/interfaces/User";

export default Vue.extend({
    name: 'Me',
    data() {
        return {
            url: "http://twitterclone-dev.tk/",
            success: false,
            loading: true,
            meData: {} as User,
            meDataError: {}
        }
    },

    beforeMount: function() {
        this.getMe();
    },

    methods: {
        getMe: function () {
            Vue.axios.get("http://twitterclone-dev.tk/api/me", this.$store.state.apiconfig)
                .then((response) => {
                    /*console.log(response);*/
                    this.meData = response.data;
                }).catch(error => {
                this.meDataError = error.response.data ? error.response.data : "";
                console.log(this.meDataError);
            });
        },
        toUpdateInfo: function () {
            this.$router.push('/UpdateUser');
        }
    }
});
