<template>
    <v-container cols="12" sm="8" md="8">
        <h1 class="text-center display-2 primary--text mb-6">Me</h1>

        <v-row align="center" justify="center">
            <v-col>

                <v-card class="elevation-12 pb-2" min-width="320">
                    <v-card-title>{{ meData.first_name }} {{ meData.last_name }}</v-card-title>
                    <v-card-subtitle>{{ meData.email }}</v-card-subtitle>
                    <!--                    <v-card-text>{{ item.message }}</v-card-text>-->
                    <v-card-actions class="d-flex justify-center">
                        <v-btn
                                rounded color="grey"
                                class="white--text subtitle-2 pl-4 pr-5"
                                @click.prevent="toUpdateInfo"
                        >
                            <v-icon class="pr-2" size="100%">fas fa-edit</v-icon>
                            Update Info
                        </v-btn>
                    </v-card-actions>
                </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" src="./Me.ts"></script>