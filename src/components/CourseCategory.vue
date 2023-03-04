<template>
  <div class="bg-white p-4 shadow-md rounded-lg mt-4">
    <h1 class="font-bold text-lg">Bidang Kursus</h1>
    <div class="flex flex-wrap justify-start items-start mt-4 gap-y-3">
      <template v-for="(category, i) in categories" :key="i">
        <div class="w-1/3">
          <router-link :to="{ name: 'ListCourse', params: {course_category: category.path} }">
            <div class="flex flex-col items-center justify-center gap-y-1">
              <img :src="category.img" :alt="category.title" class="w-10" />
              <p class="text-xs px-2 text-center">{{ category.title }}</p>
            </div>
          </router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import categoryData from "../../public/data/category.json";
export default {
  data() {
    return {
      categories: categoryData.data,
    };
  },
};
</script>
