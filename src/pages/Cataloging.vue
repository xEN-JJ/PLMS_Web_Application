<template>
    <v-container class="catalog-container">
        <v-card title="Cataloging" flat :width="cardWidth">
            <template v-slot:text>
                <v-row align="center" justify="end">
                    <v-col cols="10">
                        <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify"
                            variant="outlined" hide-details single-line></v-text-field>
                    </v-col>
                    <v-col cols="2">
                        <v-btn size="large" color="#97A4DA" @click="showAddBookDialog" class="add-book-button">
                            Add Book
                        </v-btn>
                    </v-col>
                </v-row>
            </template>
        </v-card>

        <v-container>
            <v-row justify="center">
                <v-col cols="12">
                    <v-simple-table class="custom-table">
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(book, index) in filteredBooks" :key="book.accessionNo">
                                    <td v-for="(value, key) in book" :key="key">{{ value || '-' }}</td>
                                    <td>
                                        <v-btn color="light-blue" small @click="editBook(index)"
                                            class="edit-book-button">Edit</v-btn>
                                        <v-btn color="error" small @click="deleteBook(book.accessionNo)">Delete</v-btn>
                                    </td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-col>
            </v-row>
        </v-container>

        <!-- Dialog for adding a new book -->
        <v-dialog v-model="addBookDialog" max-width="500px">
            <v-card>
                <v-card-title>Add New Book</v-card-title>
                <v-card-text>
                    <v-text-field v-model="newBook.title" label="Title"></v-text-field>
                    <v-text-field v-model="newBook.author" label="Author"></v-text-field>
                    <v-text-field v-model="newBook.genre" label="Genre"></v-text-field>
                    <v-text-field v-model="newBook.bookType" label="Book Type"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" @click="addBook" class="add-book-button">Add</v-btn>
                    <v-btn color="error" @click="addBookDialog = false">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- Dialog for editing a book -->
        <v-dialog v-model="editBookDialog" max-width="500px">
            <v-card>
                <v-card-title>Edit Book</v-card-title>
                <v-card-text>
                    <v-text-field v-model="editedBook.title" label="Title"></v-text-field>
                    <v-text-field v-model="editedBook.author" label="Author"></v-text-field>
                    <v-text-field v-model="editedBook.genre" label="Genre"></v-text-field>
                    <v-text-field v-model="editedBook.bookType" label="Book Type"></v-text-field>
                    <v-text-field v-model="editedBook['Date Acquired']" label="Date Acquired" disabled></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="light-blue" @click="updateBook" class="edit-book-button">Update</v-btn>
                    <v-btn color="error" @click="editBookDialog = false">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            search: '',
            cardWidth: '700px',
            headers: ['Accession No', 'Title', 'Author', 'Genre', 'BookType', 'Date Acquired'],
            books: [
                {
                    accessionNo: '000',
                    title: 'To Kill a Mockingbird',
                    author: 'Harper Lee',
                    genre: 'Fiction',
                    bookType: 'Paperback',
                    'Date Acquired': '2024-03-17'
                }
            ],
            addBookDialog: false,
            editBookDialog: false,
            newBook: {
                title: '',
                author: '',
                genre: '',
                bookType: '',
            },
            editedBook: {
                title: '',
                author: '',
                genre: '',
                bookType: '',
                'Date Acquired': ''
            },
            editedBookIndex: -1,
            accessionCounter: 1 // Initial accession counter
        };
    },
    computed: {
        filteredBooks() {
            return this.books.filter(book => {
                return Object.values(book).some(value => {
                    return value.toString().toLowerCase().includes(this.search.toLowerCase());
                });
            });
        }
    },
    created() {
        const storedBooks = localStorage.getItem('books');
        if (storedBooks) {
            try {
                this.books = JSON.parse(storedBooks);
            } catch (error) {
                console.error('Error parsing stored books:', error);
            }
        }
    },
    methods: {
        showAddBookDialog() {
            this.addBookDialog = true;
        },
        addBook() {
            const currentDate = new Date().toISOString().split('T')[0];

            try {
                const newBook = {
                    accessionNo: this.accessionCounter.toString().padStart(3, '0'),
                    title: this.newBook.title,
                    author: this.newBook.author,
                    genre: this.newBook.genre,
                    bookType: this.newBook.bookType,
                    'Date Acquired': currentDate,
                };

                this.books.push(newBook);
                localStorage.setItem('books', JSON.stringify(this.books));
                this.accessionCounter++; // Increment accession counter
            } catch (error) {
                console.error('Error adding book:', error);
            }

            this.addBookDialog = false;
            this.newBook = {
                title: '',
                author: '',
                genre: '',
                bookType: '',
            };
        },
        deleteBook(accessionNo) {
            try {
                this.books = this.books.filter(book => book.accessionNo !== accessionNo);
                localStorage.setItem('books', JSON.stringify(this.books));
            } catch (error) {
                console.error('Error deleting book:', error);
            }
        },
        editBook(index) {
            this.editedBook = { ...this.books[index] };
            this.editedBookIndex = index;
            this.editBookDialog = true;
        },
        updateBook() {
            if (this.editedBookIndex !== -1) {
                this.books[this.editedBookIndex] = { ...this.editedBook };
                localStorage.setItem('books', JSON.stringify(this.books));
            }
            this.editBookDialog = false;
            this.editedBookIndex = -1;
        },
    },
});
</script>

<style scoped>
.search-container,
.library-books-container,
.table-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.search-container {
    margin-top: 20px;
}

.add-book-col .v-btn {
    width: 150px;
    /* Adjust button width */
    height: 50px;
    /* Adjust button height */
    background-color: #97A4DA;
    /* Match the color of the table header */
    font-size: 28px;
    /* Increased font size */
}

.custom-table {
    width: 80%;
    margin: 0 auto;
    /* Center the table */
    border-collapse: collapse;
    border-radius: 10px;
    /* Add border radius to the entire table */
    overflow: hidden;
    /* Hide overflowing content */
}

.custom-table th,
.custom-table td {
    border: 1px solid #ddd;
    padding: 40px;
    /* Doubled the padding */
    text-align: left;
    font-size: 24px;
    /* Doubled the font size */
}

.custom-table th:first-child,
.custom-table td:first-child {
    border-left: none;
    /* Remove left border from first column */
}

.custom-table th:last-child,
.custom-table td:last-child {
    border-right: none;
    /* Remove right border from last column */
}

.custom-table th:first-child {
    border-top-left-radius: 10px;
    /* Add border radius to top left corner of the first th */
}

.custom-table th:last-child {
    border-top-right-radius: 10px;
    /* Add border radius to top right corner of the last th */
}

.custom-table th {
    background-color: #97A4DA;
    /* Change header color */
    color: #fff;
    /* Change text color */
}

.catalog-container {
    margin-left: 250px;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* Adjust as needed */
}

.add-book-button {
    font-size: 16px;
    /* Increased font size */
}

.edit-book-button {
    background-color: #b3e5fc;
    /* Light blue background color */
    color: #000;
    /* Black text color */
    font-size: 17px;
    /* Increased font size */
    margin-right: 5px;
    /* Added margin */
}

.v-card.title {
    background-color: #97A4DA;
}
</style>
