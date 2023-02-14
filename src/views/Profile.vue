<script setup>
import Bottombar from "../components/Bottombar.vue";
</script>
<template>
  <div class="bg-dashboard md:bg-none"></div>

  <!-- ava section -->
  <div class="px-4">
    <div class="bg-white rounded-lg shadow-lg -mt-12">
      <div class="flex items-center justify-center gap-x-4 py-16">
        <img src="../assets/camera.svg" alt="" class="w-4" />
        <p class="text-sm">Tambahkan foto sampul</p>
      </div>
    </div>
    <div class="">
      <img src="../assets/user-profile.svg" alt="" class="mx-auto -mt-12" />
      <p class="text-gray-800 mt-2 text-center">Anapati Putri</p>
    </div>

    <!-- bio data -->
    <div class="bg-white rounded-lg shadow-lg mt-4 p-4">
      <div>
        <p class="font-bold text-lg">Data Diri</p>
        <p class="text-gray-400 text-sm mt-2">Username</p>
        <p class="text-sm font-semibold">@anapatiiiptr</p>
        <p class="text-gray-400 text-sm mt-2">Nomor HP</p>
        <p class="text-sm font-semibold">+62 546-8195-0172</p>
        <p class="text-gray-400 text-sm mt-2">Email</p>
        <p class="text-sm font-semibold">anapatiputri@gmail.com</p>
      </div>
    </div>

    <!-- my course -->
    <div class="bg-white rounded-lg shadow-lg mt-4 p-4">
      <p class="font-bold text-lg">Kursus Saya</p>
      <div class="flex justify-between items-start mt-2">
        <div class="flex gap-x-4">
          <img src="../assets/2d.svg" alt="Kerajinan 2d" class="w-6" />
          <p class="text-gray-500 text-xs">
            Kerajinan Tangan 2 Dimensi • Kelas Membatik (Jogja Art)
          </p>
        </div>
        <img src="../assets/progress.svg" alt="Progress bar" class="w-14 ml-4">
      </div>
    </div>

  <!-- wallet -->
    <div class="bg-white rounded-lg shadow-lg mt-4 p-4 mb-10">
      <div>
        <p class="font-bold text-lg">Dompet</p>
        <p class="text-gray-400 text-sm mt-2">Saldo anda</p>
        <p class="text-sm font-semibold">Rp164.500</p>
        <button class="mt-4 border border-blue-500 w-full text-blue-500 font-semibold rounded-full text-sm py-2 hover:text-white hover:bg-blue-500">+ Hubungkan e-wallet</button>
      </div>
    </div>
  </div>

  <Bottombar />
</template>
