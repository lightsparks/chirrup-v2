<template>
    <v-container cols="12" sm="8" md="8">
        <h1 class="text-center display-2 primary--text mb-6">Find Friends</h1>

        <v-form>
            <v-text-field
                    label="search friends"
                    name="search_string"
                    prepend-icon="fas fa-search"
                    type="text"
                    color="secondary"
                    v-model="this.searchForm"
            />
        </v-form>

        <v-row align="center" justify="center">
            <v-col>

                <v-list>
                    <v-list-item
                            v-for="item in this.friends"
                            :key="item.id"
                            class="d-flex justify-center mb-3"
                    >
                        <v-card class="elevation-12 width-2" fluid>
                            <v-card-title>{{ item.user.first_name }} {{ item.user.last_name }}</v-card-title>
                            <v-card-subtitle>{{ item.id }}</v-card-subtitle>
                            <v-card-actions></v-card-actions>
                        </v-card>
                    </v-list-item>
                </v-list>

            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" src="./FindFriends.ts"></script>