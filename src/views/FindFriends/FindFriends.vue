<template>
    <v-container cols="12" sm="8" md="8">
        <h1 class="text-center display-2 primary--text mb-6">Find Friends</h1>

        <v-form>
            <v-text-field
                    id="search_user"
                    label="Search for name or email"
                    name="Search for name or email"
                    prepend-icon="fas fa-search"
                    type="text"
                    color="secondary"
                    v-model="this.searchForm.search_string"
            />
        </v-form>
        <v-container class="d-flex justify-center">
            <v-btn rounded color="primary" @click.prevent="searchUsers">Search</v-btn>
        </v-container>

        <v-row align="center" justify="center">
            <v-col>

                <v-list>
                    <v-list-item
                            v-for="user in this.userList"
                            :key="user.id"
                            class="d-flex justify-center mb-3"
                    >
                        <v-card class="elevation-12 width-2" fluid>
                            <v-card-title>{{ user.user.first_name }} {{ user.user.last_name }}</v-card-title>
                            <v-card-subtitle>{{ user.id }}</v-card-subtitle>
                            <v-card-actions></v-card-actions>
                        </v-card>
                    </v-list-item>
                </v-list>

            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" src="./FindFriends.ts"></script>