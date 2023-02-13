<script setup>
import Navbar from "../components/Navbar.vue";
import Carousel from "../components/Carousel.vue";
</script>

<template>
  <Navbar />
  <div class="px-6 md:px-32 lg:px-56">
    <div
      class="md:flex flex-col md:flex-row justify-center items-center h-screen gap-y-14 md:gap-y-0"
    >
      <div class="md:w-1/2">
        <carousel />
      </div>
      <div class="md:w-1/2 mt-12 gap-y-10 flex flex-col md:flex-none">
        <div class="text-center px-6 md:px-10">
          <h1 class="font-bold text-xl md:text-3xl">
            Menjadi Master Seni Mulai Sekarang
          </h1>
          <p class="text-sm mt-2 md:text-lg font-light md:px-4">
            Explore dan perdalam kemampuan senimu bersama komunitas yang solid.
          </p>
        </div>
        <div
          class="mt-16 md:mt-0 text-sm flex flex-row md:flex-col md:gap-y-4 justify-between items-center font-semibold px-4 md:px-20"
        >
          <router-link to="/dashboard" class="text-blue-500 py-2 hover:text-white md:border md:border-blue-500 md:w-full md:rounded-lg md:hover:bg-blue-500 text-center">
            <button
              class=""
            >
              Masuk
            </button>
          </router-link>
          <router-link to="/dashboard" class="bg-blue-500 px-6 py-2 text-white rounded-lg hover:bg-blue-600 md:w-full text-center">
            <button
              class=""
            >
              Daftar
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
