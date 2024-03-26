<script setup>
import {computed} from 'vue';
const props = defineProps(['books'])

const MyProgressCount = computed(() => {
  return props.books.filter(book => book.isRead).length;
})

const MyProgressMessage = computed(() => {
  return MyProgressCount.value >= props.books.length ?
  'Parabens você leu todos os livros' :
  `${MyProgressCount.value} de ${props.books.length} livros lidos`
})

</script>

<template>
  <div class="books-read">
    <label for="progress">Seu progresso</label><br>
    <progress :value="MyProgressCount" :max="books.length"></progress>
    <p>{{ MyProgressMessage }}</p>
  </div>
</template>