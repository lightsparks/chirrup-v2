<template>
    <v-container cols="12" sm="8" md="8">
        <h1 class="text-center display-2 primary--text mb-6">Messages</h1>

        <v-row align="center" justify="center">
            <v-col>

                <v-list>
                    <v-list-item
                            v-for="item in this.messages"
                            :key="item.id"
                            class="d-flex justify-center mb-3"
                    >
                        <v-card class="elevation-12" min-width="320">
                            <v-card-title>{{ item.user.first_name }} {{ item.user.last_name }}</v-card-title>
                            <v-card-subtitle>
                                <timeago :datetime="item.created_at" locale="nl"></timeago>
                            </v-card-subtitle>
                            <v-card-text>{{ item.message }}</v-card-text>
                            <v-card-actions></v-card-actions>
                        </v-card>
                    </v-list-item>
                </v-list>

            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" src="./Home.ts"></script>