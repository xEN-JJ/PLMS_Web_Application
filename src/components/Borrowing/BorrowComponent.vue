<template>
    <v-container>
        <v-row align="start" no-gutters>
            <v-col>
                <h2>BOOK SELECTION</h2>
                <v-chip-group v-model="selectedBooks">
                    <template v-if="selectedBooks.length === 0">
                        <div class="selected-items-label" disable>
                            Selected Items
                        </div>
                    </template>
                    <v-chip v-for="(book, index) in selectedBooks" :key="index" close
                        @input="removeSelectedBook(index)">
                        {{ book }}
                    </v-chip>
                </v-chip-group>
            </v-col>
        </v-row>
    </v-container>

    <v-container>
        <v-row align="center" no-gutters>
            <v-col class="pa-2 ma-2">
                <v-text-field v-model="searchQuery" label="Search" outlined></v-text-field>
            </v-col>

            <v-col class="pa-2 ma-2">
                <v-row align="center" no-gutters>
                    <v-col class="pa-2 ma-2">
                        <v-btn color="primary" @click="submitRequest" :disabled="selectedBooks.length === 0">
                            Submit
                        </v-btn>
                    </v-col>

                    <v-col class="pa-2 ma-2">
                        <v-btn color="primary" @click="showHistory">Show History</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>

    <BorrowTable />

</template>

<script>
export default {
    data() {
        return {
            selectedBooks: [],
            searchQuery: '',
            books: [
                {
                    id: 1,
                    callNo: 'Call No. 1',
                    title: 'Book 1',
                    author: 'Author 1',
                    copyrightDate: '2024',
                    location: 'Location 1',
                    edition: '1st Edition',
                    accessionNumber: 'Accession No. 1',
                    selected: false,
                },
                {
                    id: 2,
                    callNo: 'Call No. 2',
                    title: 'Book 2',
                    author: 'Author 2',
                    copyrightDate: '2023',
                    location: 'Location 2',
                    edition: '2nd Edition',
                    accessionNumber: 'Accession No. 2',
                    selected: false,
                },
                // Add more books as needed
            ],
            headers: [
                { text: 'Call No.', value: 'callNo' },
                { text: 'Title', value: 'title' },
                { text: 'Author', value: 'author' },
                { text: 'Copyright Date', value: 'copyrightDate' },
                { text: 'Location', value: 'location' },
                { text: 'Edition', value: 'edition' },
                { text: 'Accession Number', value: 'accessionNumber' },
            ],
        };
    },
    computed: {
        filteredBooks() {
            if (this.searchQuery) {
                const query = this.searchQuery.toLowerCase();
                return this.books.filter(
                    (book) =>
                        book.callNo.toLowerCase().includes(query) ||
                        book.title.toLowerCase().includes(query) ||
                        book.author.toLowerCase().includes(query) ||
                        book.location.toLowerCase().includes(query) ||
                        book.edition.toLowerCase().includes(query) ||
                        book.accessionNumber.toLowerCase().includes(query)
                );
            }
            return this.books;
        },
    },
    methods: {
        updateSelectedBooks(book) {
            if (book.selected) {
                this.selectedBooks.push(book);
            } else {
                const index = this.selectedBooks.findIndex((selectedBook) => selectedBook.id === book.id);
                if (index > -1) {
                    this.selectedBooks.splice(index, 1);
                }
            }
        },
        submitRequest() {
            // Handle the submission of the selected books
            // You can access the selected books through `this.selectedBooks` array
            // Perform any necessary logic or API calls here
            console.log('Selected Books:', this.selectedBooks);
        },
    },
};
</script>

<style>
/* Add any custom styling here */
</style>
