
<template>
   <v-container class="catalog-container" fluid>
      <v-card
        title="Catalo"
        flat
        :width="cardWidth"
      >
        <template v-slot:text>
          <v-row align="center" justify="end">
            <v-col cols="10">
              <v-text-field
                v-model="search"
                label="Search"
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                hide-details
                single-line
              ></v-text-field>
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
                      <v-btn color="light-blue" small @click="editBook(index)" class="edit-book-button">Edit</v-btn>
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
        cardWidth: '300px',
        headers: ['Accession No', 'Title', 'Author', 'Genre', 'BookType', 'Date Acquired'],
        books: [
          {
            accessionNo: '001',
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
  .catalog-container {
 
  
  max-width: 80%; /* Adjust the maximum width as needed */
  height: 80vh; /* Adjust as needed */
}
  
  .custom-table {
    width: 80%;
    margin: 0 auto;
    border-collapse: collapse;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .custom-table th,
  .custom-table td {
    padding: 20px; /* Adjust the padding as needed */
    font-size: 16px; /* Adjust the font size as needed */
  }
  
  .add-book-button {
    font-size: 14px; /* Adjust the font size as needed */
  }
  
  .edit-book-button {
    font-size: 15px; /* Adjust the font size as needed */
  }
  
  .v-card.title {
    background-color: #97A4DA;
  }
  
  
    
    .custom-table th,
    .custom-table td {
      padding: 10px;
      font-size: 14px;
    }
    
    .add-book-button {
      font-size: 12px;
    }
    
    .edit-book-button {
      font-size: 13px;
    }
  
  </style>