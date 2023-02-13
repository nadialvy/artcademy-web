<script setup>
import Navbar from "../components/Navbar.vue";
</script>
<template>
  <Navbar />
  <div class="bg-dashboard md:bg-none">
    <div class="flex justify-between items-start px-4">
      <div>
        <p class="text-xs font-bold text-white">Selamat datang,</p>
        <p class="font-bold text-white text-xl -mt-1">Anapati</p>
      </div>
      <div class="flex justify-around items-center">
        <img src="../assets/level.svg" alt="" />
        <img src="../assets/bell.svg" alt="" />
      </div>
    </div>
  </div>

  <div class="px-4">
    <!-- search -->
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
          class="bg-white shadow-md text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Mau cari kelas? Cari disini..."
          required
        />
      </div>
    </form>

    <!-- current course -->
    <div class="bg-white p-4 shadow-md rounded-lg mt-4">
      <div class="flex justify-between gap-x-4 items-center">
        <div>
          <h1 class="font-bold text-lg">Kursus Anda</h1>
          <div class="flex items-start justify-start mt-2 gap-x-2">
            <img src="../assets/2d.svg" alt="" class="w-5" />
            <p class="text-xs text-gray-400">
              Kerajinan Tangan 2 Dimensi • Kelas Membatik (Jogja Art)
            </p>
          </div>
          <button
            class="bg-blue-500 hover:bg-blue-600 text-xs text-white px-4 py-1 mt-2 rounded-xl"
          >
            Lanjutkan Kursus
          </button>
        </div>
        <div>
          <img src="../assets/current-course.svg" alt="" class="w-full" />
        </div>
      </div>
    </div>

    <!-- category course -->
    <div class="bg-white p-4 shadow-md rounded-lg mt-4">
      <h1 class="font-bold text-lg">Bidang Kursus</h1>
      <div class="flex flex-wrap justify-start items-start mt-4 gap-y-4">
        <div class="w-1/3">
          <div class="flex flex-col items-center justify-center gap-y-1">
            <img src="../assets/2d.svg" alt="Kerajinan 2d" class="w-10" />
            <p class="font-light text-xxs px-2 text-center">Kerajinan Tangan 2 Dimensi</p>
          </div>
        </div>
        <div class="w-1/3">
          <div class="flex flex-col items-center justify-center gap-y-1">
            <img src="../assets/photography.svg" alt="Kerajinan 2d" class="w-10" />
            <p class="font-light text-xxs px-2 text-center">Fotografi</p>
          </div>
        </div>
        <div class="w-1/3">
          <div class="flex flex-col items-center justify-center gap-y-1">
            <img src="../assets/fashion-design.svg" alt="Design Busana" class="w-10" />
            <p class="font-light text-xxs px-2 text-center">Desain Busana</p>
          </div>
        </div>
        <div class="w-1/3">
          <div class="flex flex-col items-center justify-center gap-y-1">
            <img src="../assets/design-graphic.svg" alt="Desain Grafis" class="w-10" />
            <p class="font-light text-xxs px-2 text-center">Desain Grafis</p>
          </div>
        </div>
        <div class="w-1/3">
          <div class="flex flex-col items-center justify-center gap-y-1">
            <img src="../assets/printmaking.svg" alt="Printmaking" class="w-10" />
            <p class="font-light text-xxs px-2 text-center">Printmaking</p>
          </div>
        </div>
        <div class="w-1/3">
          <div class="flex flex-col items-center justify-center gap-y-1">
            <img src="../assets/3d.svg" alt="Kerajinan Tangan 3 Dimensi" class="w-10" />
            <p class="font-light text-xxs px-2 text-center">Kerajinan Tangan 3 Dimensi</p>
          </div>
        </div>
        <div class="w-1/3">
          <div class="flex flex-col items-center justify-center gap-y-1">
            <img src="../assets/music-dance.svg" alt="Musik & Tari" class="w-10" />
            <p class="font-light text-xxs px-2 text-center">Musik & Tari</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
