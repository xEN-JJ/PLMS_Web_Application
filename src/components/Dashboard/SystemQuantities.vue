<template>
    <v-container>
        <v-row align="start">
            <v-col>
                <v-card max-width="344" append-icon="mdi-book-arrow-down" link>
                    <template v-slot:title>
                        <div class="text-grey">Borrowed Books</div>
                    </template>
                    <v-container>
                        <v-row align="center">
                            <h1 class="borrow-quantity">25</h1>
                            <v-chip color="primary" size="small">
                                +25%
                            </v-chip>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>

            <v-col>
                <v-card max-width="344" append-icon="mdi-book-refresh" link>
                    <template v-slot:title>
                        <div class="text-grey">Returned Books</div>
                    </template>
                    <v-container>
                        <v-row align="center">
                            <h1 class="borrow-quantity">10</h1>
                            <v-chip color="red" size="small">
                                -16%
                            </v-chip>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>

            <v-col>
                <v-card max-width="344" append-icon="mdi-book-clock" link>
                    <template v-slot:title>
                        <div class="text-grey">Overdue Books</div>
                    </template>
                    <v-container>
                        <v-row align="center">
                            <h1 class="borrow-quantity">36</h1>
                            <v-chip color="red" size="small">
                                -10%
                            </v-chip>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>

            <v-col align-self="end">
                <v-card max-width="344" append-icon="mdi-cash-clock" link>
                    <template v-slot:title>
                        <div class="text-grey">Pending Fees</div>
                    </template>
                    <v-container>
                        <v-row align="center">
                            <h1 class="borrow-quantity">$106</h1>
                            <v-chip color="red" size="small">
                                -10%
                            </v-chip>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>

        <v-row align="end">
            <v-col>
                <v-card max-width="344" append-icon="mdi-book-multiple" link>
                    <template v-slot:title>
                        <div class="text-grey">Total Books</div>
                    </template>
                    <v-container>
                        <v-row align="center">
                            <h1 class="borrow-quantity">1891</h1>
                            <v-chip color="primary" size="small">
                                +5%
                            </v-chip>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>

            <v-col>
                <v-card max-width="344" append-icon="mdi-account-group" link>
                    <template v-slot:title>
                        <div class="text-grey">Borrowers</div>
                    </template>
                    <v-container>
                        <v-row align="center">
                            <h1 class="borrow-quantity">945</h1>
                            <v-chip color="primary" size="small">
                                +27%
                            </v-chip>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>

            <v-col>
                <v-card max-width="344" append-icon="mdi-book-off" link>
                    <template v-slot:title>
                        <div class="text-grey">Missing Books</div>
                    </template>
                    <v-container>
                        <v-row align="center">
                            <h1 class="borrow-quantity">14</h1>
                            <v-chip color="red" size="small">
                                -2%
                            </v-chip>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>

            <v-col>
                <v-card max-width="344" append-icon="mdi-cash-multiple" link>
                    <template v-slot:title>
                        <div class="text-grey">Total Payment</div>
                    </template>
                    <v-container>
                        <v-row align="center">
                            <h1 class="borrow-quantity">$215</h1>
                            <v-chip color="primary" size="small">
                                +10%
                            </v-chip>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

}
</script>

<style></style>