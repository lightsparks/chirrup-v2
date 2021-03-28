<template>
    <v-container cols="12" sm="8" md="8" align="center" justify="center">
        <h1 class="text-center display-2 primary--text mb-6">Update User Info</h1>

        <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12" md="8">
                <v-card-text class="mt-6">
                    <v-form>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field
                                        label="First Name"
                                        name="firstName"
                                        prepend-icon="fas fa-user"
                                        type="text"
                                        color="secondary"
                                        v-model="userPatch.first_name"
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
                                        v-model="userPatch.last_name"
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
                                :placeholder="userPatch.email"
                                v-model="userPatch.email"
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
                                        :placeholder="userPatch.password"
                                        v-model="userPatch.password"
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
                                        v-model="userPatch.password_confirmation"
                                        :rules="[formRules.required, userPatch.password_confirmation === userPatch.password || 'The password confirmation does not match.']"
                                        validate-on-blur
                                />
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
                <v-container class="text-center ma-0 mb-6">
                    <v-btn rounded color="secondary" class="ma-3" @click.prevent="patchUser">Update User</v-btn>
                    <v-btn rounded color="grey" class="ma-3" @click.prevent="toMe">Cancel</v-btn>
                </v-container>
            </v-col>
        </v-row>
        <v-snackbar
                class="text-center mb-6"
                v-model="snackUpdate"
                color="succes"
                timeout="1200"
        >
            User info updated!
        </v-snackbar>
    </v-container>
</template>

<script lang="ts" src="./UpdateUser.ts"></script>