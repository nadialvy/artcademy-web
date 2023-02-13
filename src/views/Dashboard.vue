<script setup>
import Navbar from "../components/Navbar.vue";
import Bottombar from "../components/Bottombar.vue";
import ContinueWatch from "../components/ContinueWatch.vue";
import CourseCategory from "../components/CourseCategory.vue";
import CurrentCourse from "../components/CurrentCourse.vue";
import Search from "../components/Search.vue"
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
    <Search />

    <!-- current course -->
   <CurrentCourse />

    <!-- category course -->
   <CourseCategory />

    <!-- continue watch -->
    <ContinueWatch />
  </div>

  <!-- bottom bar section -->
  <Bottombar />
</template>
