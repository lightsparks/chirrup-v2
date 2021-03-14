<template>
    <v-app>
        <!--        <v-content>-->
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="12" md="12">
                    <v-card class="elevation-12">
                        <v-window v-model="step">
                            <v-window-item :value="1">
                                <v-row>
                                    <v-col cols="12" md="8" sm="8">
                                        <v-card-text class="mt-6">
                                            <h1 class="text-center display-2 primary--text">Login to Chirrup</h1>
                                            <v-form>
                                                <v-text-field
                                                        label="Email"
                                                        name="Email"
                                                        prepend-icon="fas fa-portrait"
                                                        type="text"
                                                        color="secondary"
                                                        v-model="loginFormData.email"
                                                        :rules="[formRules.required, formRules.email]"
                                                        validate-on-blur
                                                />
                                                <v-text-field
                                                        id="password"
                                                        label="Password"
                                                        name="Password"
                                                        prepend-icon="fas fa-key"
                                                        type="password"
                                                        color="secondary"
                                                        v-model="loginFormData.password"
                                                        :rules="[formRules.required]"
                                                        validate-on-blur
                                                />
                                            </v-form>
                                            <!--<h4 class="text-center mt-3" >Did you forget your password?</h4>
                                            TODO: when API allows, implement password recovery-->
                                        </v-card-text>
                                        <div class="text-center mt-3 mb-6">
                                            <v-btn rounded color="primary" @click.prevent="loginUser">LOG IN</v-btn>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" md="4" class="primary">
                                        <v-card-text class="white--text mt-6">
                                            <h1 class="text-center display-1">Join us!</h1>
                                            <h5 class="text-center">Create your own account and join the community!</h5>
                                        </v-card-text>
                                        <div align="center" justify="center" class="text-center mb-12">
                                            <v-btn rounded outlined dark @click="step++">SIGN UP &#x276D;&#x276D;
                                            </v-btn>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-window-item>
                            <v-window-item :value="2">
                                <v-row class="fill-height">
                                    <v-col cols="12" md="4" class="primary">
                                        <v-card-text class="white--text mt-4">
                                            <h1 class="text-center display-1">Welcome back!</h1>
                                            <h5 class="text-center">To connect to our community please login</h5>
                                        </v-card-text>
                                        <div class="text-center mt-4 mb-6">
                                            <v-btn rounded outlined dark @click="step--">&#x276C;&#x276C; LOG IN</v-btn>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" md="8">
                                        <v-card-text class="mt-6">
                                            <h1 class="text-center display-2 primary--text text--accent">Create
                                                Account</h1>
                                            <v-form>
                                                <v-row>
                                                    <v-col cols="6">
                                                        <v-text-field
                                                                label="First Name"
                                                                name="firstName"
                                                                prepend-icon="fas fa-user"
                                                                type="text"
                                                                color="secondary"
                                                                v-model="registerFormData.first_name"
                                                                :rules="[formRules.required, formRules.minChars(2), formRules.maxChars(26)]"
                                                                validate-on-blur
                                                        />
                                                    </v-col>
                                                    <v-col cols="6">
                                                        <v-text-field
                                                                label="Last Name"
                                                                name="lastName"
                                                                type="text"
                                                                color="secondary"
                                                                v-model="registerFormData.last_name"
                                                                :rules="[formRules.required, formRules.minChars(2), formRules.maxChars(26)]"
                                                                validate-on-blur
                                                        />
                                                    </v-col>
                                                </v-row>
                                                <v-text-field
                                                        label="Email"
                                                        name="email"
                                                        prepend-icon="fas fa-envelope"
                                                        type="text"
                                                        color="secondary"
                                                        v-model="registerFormData.email"
                                                        :rules="[formRules.required, formRules.email]"
                                                        validate-on-blur
                                                />
                                                <v-row>
                                                    <v-col cols="6">
                                                        <v-text-field
                                                                label="Password"
                                                                name="password"
                                                                prepend-icon="fas fa-lock"
                                                                type="password"
                                                                color="secondary"
                                                                v-model="registerFormData.password"
                                                                :rules="[formRules.required, formRules.minChars(8), formRules.maxChars(16)]"
                                                                validate-on-blur
                                                        />
                                                    </v-col>
                                                    <v-col cols="6">
                                                        <v-text-field
                                                                label="Password Confirmation"
                                                                name="passwordConfirmation"
                                                                type="password"
                                                                color="secondary"
                                                                v-model="registerFormData.password_confirmation"
                                                                :rules="[!!registerFormData.password_confirmation || 'type confirm password', registerFormData.password_confirmation === registerFormData.password || 'The password confirmation does not match.']"
                                                                validate-on-blur
                                                        />
                                                    </v-col>
                                                </v-row>
                                            </v-form>
                                        </v-card-text>
                                        <div class="text-center mb-6">
                                            <v-btn rounded color="primary" @click.prevent="registerNewUser">SIGN UP</v-btn>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-window-item>
                        </v-window>
                    </v-card>
                </v-col>
            </v-row>
            <v-snackbar
                    class="text-center mb-6"
                    v-model="snackLogin"
                    color="success"
                    timeout="1200"
            >
                Login succesful!
            </v-snackbar>
            <v-snackbar
                    class="text-center mb-6"
                    v-model="snackRegistration"
                    color="success"
                    timeout="1200"
            >
                User registration succesful!
            </v-snackbar>
        </v-container>
        <!--        </v-content>-->
    </v-app>
</template>

<script lang="ts" src="./Login.ts"></script>