import Vue from "vue";
import FormRules from "@/partials/FormRules.ts";

declare interface FormData {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export default Vue.extend({
    name: 'Login',
    data: function (): Record<string, any> {
        return {
            formRules: FormRules,
            step: 1 as number,
            loginFormData: {
                email: "" as string,
                password: "" as string
            },
            registerFormData: {} as FormData,
            snackLogin: false,
            snackLoginTxt: "Login succesful!",
            snackRegistration: false,
            snackRegistrationTxt: "User registration succesful!"
        };
    },
    mounted: function () {
        //
    },
    computed: {
        currentTitle: function () {
            switch (this.step) {
                case 1:
                    return 'Sign-in'
                case 2:
                    return 'Create a password'
                default:
                    return 'Account created'
            }
        },
    },
    methods: {
        registerNewUser: function () {
            Vue.axios.post("http://twitterclone-dev.tk/api/auth/register", this.registerFormData)
                .then((response) => {
                    console.log(response);
                    this.snackRegistration = true;
                    setTimeout(() => {
                        this.step = 1;
                    }, 1000);
                }).catch(function (error: any) {
                console.log(error);
                /*TODO: password_confirmation moet ook echt valideren*/
            });
        },
        loginUser: function () {
            Vue.axios.post("http://twitterclone-dev.tk/api/auth/login", this.loginFormData)
                .then((response) => {
                    console.log(response);
                    localStorage.setItem("token", JSON.stringify(response.data));
                    this.snackLogin = true;
                    setTimeout(() => {
                        this.$router.push("Home");
                    }, 1000);
                }).catch(function (error: any) {
                console.log(error);
            });
        },
    }
});