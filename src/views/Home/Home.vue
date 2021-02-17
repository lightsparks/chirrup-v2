<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="12" md="12">
                <v-card class="elevation-12">
                    <v-card-text class="mt-6">
                        <h1 class="text-center display-2 primary--text">Feed</h1>
                        <v-btn rounded color="primary" @click.prevent="logOut">LOG OUT</v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-snackbar
                v-model="this.snackLogout"
                color="primary"
                timeout="1200"
        >
            {{ this.snackLogoutTxt }}
        </v-snackbar>
    </v-container>
</template>

<script lang="ts" src="./Home.ts"></script>