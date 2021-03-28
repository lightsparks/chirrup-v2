<template>
    <v-app>

        <v-app-bar app dark dense color="primary" class="pa-1 ma-auto">
            <v-container class="d-flex justify-space-between">
                <v-icon class="pr-2" @click.stop="toHome">fas fa-kiwi-bird</v-icon>
                <!--<v-app-bar-title shrink-on-scroll><h1 class="display-1">Chirrup 2.0</h1></v-app-bar-title>-->
                <v-container class="d-flex flex-row-reverse pr-0" v-if="$store.state.token !== null">
                    <v-icon class="pr-2 ml-2 mr-0" @click.stop="toLogout">fas fa-sign-out-alt</v-icon>
                    <v-icon class="pr-2 ml-2" @click.stop="toNewMessage">fas fa-send</v-icon>
                    <v-icon class="pr-2 ml-2" @click.stop="toFriends">fas fa-users</v-icon>
                    <v-icon class="pr-2 ml-2" @click.stop="toMe">fas fa-user-circle</v-icon>
                </v-container>
            </v-container>
        </v-app-bar>

       <!-- <v-navigation-drawer>
            <v-sheet
                    height="400"
                    class="overflow-hidden"
                    style="position: relative;"
            >

                <v-navigation-drawer
                        v-model="drawer"
                        absolute
                        temporary
                >
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>John Leider</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list dense>
                        <v-list-item
                                v-for="route in $router.getRoutes()"
                                :key="route.name"
                                link
                        >

                            <v-list-item-content>
                                <router-link :to="route">{{ route.name }}</router-link>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>
            </v-sheet>
        </v-navigation-drawer>-->

        <!-- Sizes your content based upon application components -->
        <v-main id="main">

            <!-- Provides the application the proper gutter -->
            <v-container fluid>

                <!-- If using vue-router -->
                <router-view></router-view>

            </v-container>
        </v-main>

        <v-footer app>
            <!-- -->
            <h6 class="display-6 ma-auto">&copy; Chirrup v2.0 || Mario Smit / Rinu Yatim</h6>
        </v-footer>
    </v-app>
</template>

<script lang="ts" src="./App.ts"></script>
