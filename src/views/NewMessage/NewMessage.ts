import Vue from "vue";
import axios from "axios";

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
            axios.post("http://twitterclone-dev.tk/api/messages", this.message, this.$store.state.apiconfig)
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