import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            url: "http://twitterclone-dev.tk/",
            success: false,
            loading: true,
            snackLogout: false,
            snackLogoutTxt: "User logged out!",
        }
    },

    mounted: function() {
        /*this.getMessages();*/
    },

    methods: {
        logOut: function () {
            localStorage.removeItem('token');
            this.snackLogout = true;
            setTimeout(() => {
                this.$router.push('/');
            }, 1000);
        }
    },
});
