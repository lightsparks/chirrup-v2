import Vue from 'vue'

export default Vue.extend({
    name: 'Logout',
    data() {
        return {
            snackLogout: false,
            snackLogoutTxt: "User logged out!",
        };
    },

    methods: {
        cancelLogOut: function() {
            this.$router.push('Home');
        },
        logOut: function () {
            localStorage.removeItem('token');

            this.snackLogout = true;
            setTimeout(() => {
                this.$router.push('/');
            }, 1000);

            this.$store.commit('setToken', null);
        },
    }
});

