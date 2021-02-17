<template>
  <v-app>

    <v-app-bar app dark dense color="primary" class="pa-1">
      <v-icon class="pr-2">fas fa-kiwi-bird</v-icon>
      <v-app-bar-title shrink-on-scroll><h1 class="display-1">Chirrup 2.0</h1></v-app-bar-title>
    </v-app-bar>

<!--TODO: navigation drawer-->

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
      <div class="display-6" >
        &copy; Chirrup  ||  Mario Smit / Rinu Yatim
      </div>
    </v-footer>
  </v-app>
</template>