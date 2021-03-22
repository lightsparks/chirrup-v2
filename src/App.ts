import Vue from "vue";

export default Vue.extend({
    name: 'App',
    data: function (): Record<string, any> {
        return {
            isLoggedIn: false
        };
    },
    mounted: function () {
        if(localStorage.getItem('token') !== null){
            this.$store.commit('setToken', localStorage.getItem('token'));

            this.$router.push('/Home');
        }

        if (this.$store.state.token) {
            this.isLoggedIn = true;
        }
    },
    methods: {
        toLogout: function () {
            this.$router.push('/Logout');
        },
        toHome: function () {
            this.$router.push('/Home');
        },
        toNewMessage: function () {
            this.$router.push('/NewMessage');
        },
        toFriends: function () {
            this.$router.push('/Friends');
        }
    }
});