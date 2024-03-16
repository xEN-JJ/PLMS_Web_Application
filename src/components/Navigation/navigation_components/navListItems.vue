import navBottomFeatures from './navBottomFeatures.vue';

<template>
    <v-card>
        <v-layout>

            <v-navigation-drawer expand-on-hover rail>

                <navAppName />

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard-variants"
                        to="/dashboard"></v-list-item>
                    <v-list-item prepend-icon="mdi-bookshelf" title="Cataloging" value="organization-of-books"
                        to="/cataloging"></v-list-item>
                    <v-list-item prepend-icon="mdi-book-account" title="Borrow" value="borrow-variant"
                        to="/borrow"></v-list-item>
                    <v-list-item prepend-icon="mdi-account-cash" title="Payments" value="fine-payments"
                        to="/"></v-list-item>
                    <v-list-item prepend-icon="mdi-file" title="Report" value="book-issue-report" to="/"></v-list-item>
                </v-list>

                <template v-slot:append>
                    <v-divider></v-divider>
                    <div class="pb-2">
                        <v-list-item prepend-icon="mdi-cog-outline" title="Settings" value="setting"
                            to="/setting"></v-list-item>
                        <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout" to="/logout"></v-list-item>
                    </div>
                </template>

            </v-navigation-drawer>

            <v-main style="height: 100vh;"></v-main>
        </v-layout>
    </v-card>
</template>