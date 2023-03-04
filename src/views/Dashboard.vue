<script setup>
import Navbar from "../components/Navbar.vue";
import Bottombar from "../components/Bottombar.vue";
import ContinueWatch from "../components/ContinueWatch.vue";
import CourseCategory from "../components/CourseCategory.vue";
import CurrentCourse from "../components/CurrentCourse.vue";
import Search from "../components/Search.vue";
</script>
<template>
  <div class="mx-auto max-w-md bg-white">
    <div class="bg-dashboard" style="--bg-dashboard-padding: 1.5rem">
      <div class="flex justify-between items-start">
        <div>
          <p class="text-xs font-bold text-white">Selamat datang,</p>
          <p class="font-bold text-white text-xl -mt-1">Anapati</p>
        </div>

        <div class="flex justify-around items-center">
          <router-link to="/level">
            <img src="../assets/level.svg" alt="" />
          </router-link>
          <img src="../assets/bell.svg" alt="" />
        </div>
      </div>
    </div>

    <div class="px-4">
      <!-- search -->
      <Search text="Mau cari kelas? Cari disini..." />

      <!-- current course -->
      <CurrentCourse />

      <!-- category course -->
      <CourseCategory />

      <!-- continue watch -->
      <ContinueWatch />
    </div>

    <!-- bottom bar section -->
    <Bottombar />
  </div>
</template>
