import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            url: "http://twitterclone-dev.tk/",
            success: false,
            loading: true,
            messageData: [],
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
            Vue.axios.get("http://twitterclone-dev.tk/api/messages")
                .then((response) => {
                    console.log(response);
                    this.messageData = response.data;
                    this.messageData.reverse();
                }).catch(error => {
                    this.messagesError = error.response.data ? error.response.data : "";
                    console.log(this.messagesError);
                });
        }
    }
});
