<script setup>

const props = defineProps(['books'])

</script>

<template>

  <div class="books-list">
    <div v-for="books in books" :key="books.isbn" class="book">
      <div class="readIt" v-if="books.isRead">
        <i class="fa-solid fa-eye"></i>
      </div>
      <div class="book-cover">
        <img :src="books.cover" />
        <button @click="$emit('toggleIsRead', books.id)" :class="{ isRead: books.isRead }">
          <i class="fa-solid fa-eye"></i>
          <span>{{ books.isRead ? 'Já li' : 'Ainda não li' }}</span>
        </button>
      </div>
      <div class="book-details">
        <p class="book-author">{{ books.author }}</p>
        <h3 class="book-title">{{ books.title }}</h3>
        <p><i class="fa-solid fa-hashtag icon"></i>{{ books.isbn }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
