<template>
  <form class="flex items-center -mt-2">
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        id="simple-search"
        class="bg-white shadow-md text-gray-700 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full pl-10 p-3 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-gray-700 dark:focus:ring-blue-400 dark:focus:border-blue-400"
        :placeholder=text
        required
      />
    </div>
  </form>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>
