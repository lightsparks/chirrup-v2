<template>
    <v-container cols="12" sm="8" md="8">
        <h1 class="text-center display-2 primary--text mb-6">Friends ({{ friends.length }})</h1>
        <v-container class="d-flex justify-center">
            <v-btn rounded color="primary" @click.prevent="toSearchUser">Search User</v-btn>
        </v-container>

        <v-row align="center" justify="center">
            <v-col>
                <v-list>
                    <v-list-item
                            v-for="friend in friends"
                            :key="friend.id"
                            class="d-flex justify-center mb-3"
                    >
                        <v-card class="elevation-12" min-width="320">
                            <v-card-title class="pb-0">{{ friend.first_name }} {{ friend.last_name }}</v-card-title>
                            <v-card-actions class="d-flex justify-center">
                                <v-btn rounded color="grey" class="white--text subtitle-2 pl-4 pr-4" @click.prevent="destroyConnection(friend.id)">Disconnect</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-list-item>
                </v-list>

            </v-col>
        </v-row>
        <v-snackbar
                class="text-center mb-6"
                v-model="snackDestroy"
                color="#f94144"
                timeout="1200"
        >
            You disconnected from your friend!
        </v-snackbar>
    </v-container>
</template>

<script lang="ts" src="./Friends.ts"></script>