import Vue from "vue";

export default Vue.extend({
    name: 'NewMessage',
    data: function (): Record<string, any> {
        return {
            message: {
                message: "" as string
            },
            snackMessage: false
        };
    },
    mounted: function () {
        //
    },
    methods: {
        postMessage: function () {
            Vue.axios.post("http://twitterclone-dev.tk/api/messages", this.message)
                .then((response) => {
                    console.log(response);
                    this.snackMessage = true;
                    setTimeout(() => {
                        this.$router.push("Home");
                    }, 1000);
                }).catch(function (error: any) {
                console.log(error);
            });
        },
    }
});