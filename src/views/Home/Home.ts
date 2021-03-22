import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            url: "http://twitterclone-dev.tk/",
            success: false,
            loading: true,
            messages: [],
            messagesError: {}
        }
    },

    mounted: function() {
        this.getMessages();

    },

    methods: {
        moveToLogout: function () {
            this.$router.push('/Logout');
        },
        getMessages: function () {
            Vue.axios.get("http://twitterclone-dev.tk/api/messages", this.$store.state.apiconfig)
                .then((response) => {
                    /*console.log(response);*/
                    this.messages = response.data;
                }).catch(error => {
                    this.messagesError = error.response.data ? error.response.data : "";
                    console.log(this.messagesError);
                });
        }
    }
});
