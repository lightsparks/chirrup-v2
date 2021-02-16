<template>
    <v-app>
        <v-container>
            <v-btn rounded color="primary" @click.prevent="cancelLogOut">Cancel</v-btn>
            <v-btn rounded color="primary" @click.prevent="logOut">Yes</v-btn>
            <v-snackbar
                    v-model="this.snackLogout"
            >
                {{ this.snackLogoutTxt }}
            </v-snackbar>
        </v-container>
    </v-app>
</template>

<script lang="ts" src="./Logout.ts"></script>