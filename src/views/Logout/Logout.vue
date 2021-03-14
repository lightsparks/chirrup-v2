<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="12" md="12">
                <v-card class="elevation-12">
                    <v-card-title class="mt-6 d-flex justify-center">
                        <h1 class="mt-6 text-center display-1 primary--text">Do you really want to log out?</h1>
                    </v-card-title>
                    <v-card-text class="mt-6 d-flex justify-center">
                        <v-btn rounded color="primary" class="ma-8" @click.prevent="cancelLogOut">Cancel</v-btn>
                        <v-btn rounded color="primary" class="ma-8" @click.prevent="logOut">Yes</v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-snackbar
                v-model="this.snackLogout"
        >
            {{ this.snackLogoutTxt }}
        </v-snackbar>
    </v-container>
</template>

<script lang="ts" src="./Logout.ts"></script>

