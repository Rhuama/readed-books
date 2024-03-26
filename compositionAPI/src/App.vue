<script setup>
import Books from './components/Books.vue'
import { reactive, ref } from 'vue';
import BooksProgress from './components/BooksProgress.vue'
import AddBook from './components/AddBook.vue';

let books = reactive([
  {
    id: 1,
    title: "History of Europe",
    cover:
      "https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2019/05/printpress-product-6-540x861.jpg",
    isRead: true,
    isbn: "0-395-07157-8",
    author: "Daniel Trejo",
  },
  {
    id: 2,
    title: "Penguin Classics",
    cover:
      "https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2019/05/printpress-product-2-540x861.jpg",
    isRead: false,
    isbn: "0-395-07157-8",
    author: "Daniel Trejo, Jon Snow",
  },
  {
    id: 3,
    title: "Becoming",
    cover:
      "https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2019/05/printpress-product-7-540x861.jpg",
    isRead: false,
    isbn: "0-395-07157-8",
    author: "Daniel Trejo",
  },
  {
    id: 4,
    title: "Sonnets",
    cover:
      "https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2019/05/printpress-product-5-540x861.jpg",
    isRead: false,
    isbn: "0-395-07157-8",
    author: "Daniel Trejo",
  },
])

function addBook(newBook) {
  newBook.id = Math.max(...books.map(el => el.id) + 1 );
  books.push(newBook)
  showAddBooks.value = false
}

let showAddBooks = ref(false)

function toggleIsRead(id) {
  books.forEach((books) => {
    if (books.id === id) {
      books.isRead = !books.isRead;
    }
  })
}

</script>

<template>
  <div v-if="!showAddBooks" class="container">
    <h1>📖 Meus Livros</h1>
    <div class="header-btns">
      <button 
        class="btn"
        @click="showAddBooks = true"
      >
        Adicionar Livro +
      </button>
    </div>

    <div class="books-container">
      <Books @toggleIsRead="toggleIsRead" :books="books" />
    </div>
    <BooksProgress :books="books" />
  </div>
  <div v-else class="container">
    <AddBook @closeAddBook="showAddBooks = false" @addBook="addBook"/>
  </div>
</template>

<style scoped></style>
