<template>
    <v-container>
        <v-card flat>
            <v-card-title class="d-flex align-center pe-2">
                <v-icon icon="mdi-book"></v-icon> &nbsp; Available Books

                <v-spacer></v-spacer>

                <v-text-field v-model="search" density="compact" label="Search" prepend-inner-icon="mdi-magnify"
                    variant="solo-filled" flat hide-details single-line></v-text-field>
            </v-card-title>
        </v-card>

        <v-data-table v-model="selected" :items="filteredItems" item-value="accessionNumber" show-select></v-data-table>

        <div class="selected-chips">
            <v-chip v-for="item in selected" :key="item.accessionNumber" label outlined>
                {{ item.title }}
                <v-icon small @click="removeSelected(item)">mdi-book-check</v-icon>
            </v-chip>
        </div>

        <div class="submit-button">
            <v-btn color="primary" @click="submit">Submit</v-btn>
        </div>

        <v-dialog v-model="dialogVisible" max-width="500">
            <template v-slot:activator="{ on }">
                <v-btn color="primary" text v-on="on" class="recent-submitted-btn">
                    Recent Submitted Books
                </v-btn>
            </template>
            <v-card>
                <v-card-title>Recent Submitted Books</v-card-title>
                <v-card-text>
                    <ul>
                        <li v-for="book in recentSubmittedBooks" :key="book.accessionNumber">
                            {{ book.title }} - {{ book.author }}
                        </li>
                    </ul>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            selected: [],
            search: '',
            items: [
                {
                    accessionNumber: '001',
                    title: 'Book 1',
                    author: 'Author 1',
                    location: 'Library A',
                    edition: '1st',
                    callNo: 'A001',
                },
                {
                    accessionNumber: '002',
                    title: 'Book 2',
                    author: 'Author 2',
                    location: 'Library B',
                    edition: '2nd',
                    callNo: 'B002',
                },
                {
                    accessionNumber: '003',
                    title: 'Book 3',
                    author: 'Author 3',
                    location: 'Library C',
                    edition: '3rd',
                    callNo: 'C003',
                },
                {
                    accessionNumber: '004',
                    title: 'Book 4',
                    author: 'Author 4',
                    location: 'Library D',
                    edition: '4th',
                    callNo: 'D004',
                },
                {
                    accessionNumber: '005',
                    title: 'Book 5',
                    author: 'Author 5',
                    location: 'Library E',
                    edition: '5th',
                    callNo: 'E005',
                },
                {
                    accessionNumber: '006',
                    title: 'Book 6',
                    author: 'Author 6',
                    location: 'Library F',
                    edition: '6th',
                    callNo: 'F006',
                },
                {
                    accessionNumber: '007',
                    title: 'Book 7',
                    author: 'Author 7',
                    location: 'Library G',
                    edition: '7th',
                    callNo: 'G007',
                },
                {
                    accessionNumber: '008',
                    title: 'Book 8',
                    author: 'Author 8',
                    location: 'Library H',
                    edition: '8th',
                    callNo: 'H008',
                },
                {
                    accessionNumber: '009',
                    title: 'Book 9',
                    author: 'Author 9',
                    location: 'Library I',
                    edition: '9th',
                    callNo: 'I009',
                },
                {
                    accessionNumber: '010',
                    title: 'Book 10',
                    author: 'Author 10',
                    location: 'Library J',
                    edition: '10th',
                    callNo: 'J010',
                },
            ],
            dialogVisible: false,
            recentSubmittedBooks: [
                {
                    accessionNumber: '009',
                    title: 'Book 9',
                    author: 'Author 9',
                    location: 'Library I',
                    edition: '9th',
                    callNo: 'I009',
                },
                {
                    accessionNumber: '010',
                    title: 'Book 10',
                    author: 'Author 10',
                    location: 'Library II',
                    edition: '10th',
                    callNo: 'II010',
                },
                {
                    accessionNumber: '011',
                    title: 'Book 11',
                    author: 'Author 11',
                    location: 'Library III',
                    edition: '11th',
                    callNo: 'III011',
                },
            ],
        };
    },
    computed: {
        filteredItems() {
            if (this.search) {
                const searchQuery = this.search.toLowerCase();
                return this.items.filter((item) => {
                    return (
                        item.title.toLowerCase().includes(searchQuery) ||
                        item.author.toLowerCase().includes(searchQuery) ||
                        item.location.toLowerCase().includes(searchQuery) ||
                        item.edition.toLowerCase().includes(searchQuery) ||
                        item.callNo.toLowerCase().includes(searchQuery)
                    );
                });
            } else {
                return this.items;
            }
        },
    },
    methods: {
        removeSelected(item) {
            const index = this.selected.findIndex((selectedItem) => selectedItem.accessionNumber === item.accessionNumber);
            if (index !== -1) {
                this.selected.splice(index, 1);
            }
        },
        submit() {
            // Handle the submit action here
        },
    },
};
</script>

<style scoped>
.selected-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
}

.submit-button {
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
}

.recent-submitted-btn {
    margin-top: -8px;
}

.v-dialog {
    z-index: 9999;
    /* Ensure the dialog is on top of other elements */
}
</style>