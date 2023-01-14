<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const props= defineProps({
    id:{
        type:String,
        required: true
    }
})

const queryMovie = ref ({})
const isLoading = ref (true)
const route = useRoute();

onMounted(async()=> {
    const result = await fetch(`http://localhost:3000/movies/${parseInt(props.id)}`);
    const response = await result.json();
    queryMovie.value = response;
    isLoading.value = false;
})
</script>
<template>
    <section class="p-4 m-6 bg-white dark:bg-gray-900">
    <div class="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
      <Button @click="$router.back()"
        class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto"
      >
        <span class="mx-2">Back</span>
      </Button>
    </div>
      <div class="container" v-if="isLoading">Is Loading...</div>
      <div v-else class="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
        <div class="flex justify-center xl:w-1/2">
          <img
            class="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-md"
            :src="queryMovie.poster"
            :alt="queryMovie.title"
          />
        </div>

        <div class="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
            {{ queryMovie.title }}
          </h2>
          <span class="p-2 m-2 rounded-md bg-slate-300 text-slate-800">
            {{  queryMovie.year }}
          </span>
          <span class="p-2 m-2 rounded-md bg-slate-300 text-slate-800">
            {{ queryMovie.runtime }}
          </span>

          <div class="mt-6 sm:-mx-2">
            <div class="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
              <a href="#"
                class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto"
              >
                <span class="mx-2">Watch Online</span>
              </a>
            </div>
            <div class="inline-flex w-full mt-2 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
              <a href="#"
                class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 sm:w-auto"
              >
                <span class="mx-2">Download</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>