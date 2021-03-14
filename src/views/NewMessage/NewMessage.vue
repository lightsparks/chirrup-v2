<template>
    <v-container>
        <h1 class="text-center display-2 primary--text ma-6">New Message</h1>

        <v-row align="center" justify="center">
            <v-col cols="12" sm="12" md="12">

                <v-card class="elevation-12 pa-3 ma-4 mt-8">
                    <v-textarea
                            class="mt-6 pa-3"
                            v-model="message.message"
                            label="Type new message here"
                            autofocus
                    ></v-textarea>
                </v-card>

            </v-col>
        </v-row>
        <v-container class="d-flex justify-center">
            <v-btn class="ma-4" rounded color="primary" @click.prevent="postMessage">Post message</v-btn>
        </v-container>
        <v-snackbar
                class="text-center mb-6"
                v-model="snackMessage"
                color="success"
                timeout="1200"
        >
            Message posted!
        </v-snackbar>
    </v-container>
</template>

<script lang="ts" src="./NewMessage.ts"></script>