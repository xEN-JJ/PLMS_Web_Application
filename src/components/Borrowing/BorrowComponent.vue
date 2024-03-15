<template>
    <v-container>
        <v-row align="center" no-gutters>
            <v-col>
                <v-chip-group v-model="selectedBooks">
                    <v-chip v-for="(book, index) in selectedBooks" :key="index" close
                        @input="removeSelectedBook(index)">
                        {{ book }}
                    </v-chip>
                </v-chip-group>
            </v-col>
        </v-row>

        <v-row align="center" no-gutters>
            <v-col cols="6">
                <v-text-field v-model="searchQuery" label="Search" outlined></v-text-field>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-col cols="12">
                <v-data-table :headers="headers" :items="filteredBooks" :search="searchQuery" :single-select="false"
                    item-key="id" show-select class="elevation-1">
                    <template v-slot:item="{ item }">
                        <tr>
                            <td>
                                <v-checkbox v-model="item.selected" @change="updateSelectedBooks(item)"></v-checkbox>
                            </td>
                            <td>{{ item.title }}</td>
                            <td>{{ item.author }}</td>
                            <td>{{ item.genre }}</td>
                        </tr>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>

        <v-row align="center" no-gutters>
            <v-col cols="12" class="text-center">
                <v-btn color="primary" @click="submitRequest" :disabled="selectedBooks.length === 0">
                    Submit Request
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            selectedBooks: [],
            searchQuery: '',
            books: [
                { id: 1, title: 'Book 1', author: 'Author 1', genre: 'Genre 1', selected: false },
                { id: 2, title: 'Book 2', author: 'Author 2', genre: 'Genre 2', selected: false },
                { id: 3, title: 'Book 3', author: 'Author 3', genre: 'Genre 3', selected: false },
                // Add more books as needed
            ],
            headers: [
                { text: 'Select', value: 'selected' },
                { text: 'Title', value: 'title' },
                { text: 'Author', value: 'author' },
                { text: 'Genre', value: 'genre' },
            ],
        };
    },
    computed: {
        filteredBooks() {
            if (this.searchQuery) {
                const query = this.searchQuery.toLowerCase();
                return this.books.filter(
                    (book) =>
                        book.title.toLowerCase().includes(query) ||
                        book.author.toLowerCase().includes(query) ||
                        book.genre.toLowerCase().includes(query)
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