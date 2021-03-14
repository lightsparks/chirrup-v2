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
            const localstorage = JSON.parse(localStorage.getItem('token') || '') as {token: string};
            this.$store.commit('setToken', localstorage.token);

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
        }
    }
});