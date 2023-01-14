<script setup>
defineProps({
      movie: Object
})
</script>
<template>
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
      <div class="flex justify-center pt-3">
        <Router-link :to="{name: 'MoviesDetail', params: {id: movie.id}}">
        <img class="rounded-t-lg" :src="movie.poster" :alt="movie.title" />
      </Router-link>
      </div>
      <div class="p-5">
        <Router-link :to="{name: 'MoviesDetail', params: {id: movie.id}}">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {{ movie.title }}
          </h5>
        </Router-link>
        <span class="mr-4">{{ movie.year }}</span>
        <span>{{ movie.runtime }}</span>
      </div>
    </div>
</template>