<script setup>
import axios from "axios";
import DetailCourseCard from "../components/DetailCourseCard.vue";
</script>
<template>
  <div
    class="bg-header-course"
    :style="{ 'background-image': `url(${course_image})` }"
  >
    <div class="flex justify-between items-center">
      <p @click="goBack()" class="text-white font-bold text-2xl pl-2">←</p>
      <p class="text-white font-bold mr-10 text-lg">Detail Pelajaran</p>
      <div></div>
    </div>
  </div>
  <div class="p-4">
    <h1 class="font-bold text-lg">{{ course_details[0].course_name }} {{}}</h1>
    <div class="flex items-center gap-x-4 mt-2">
      <img src="../assets/user-profile.svg" class="w-8 rounded-lg" />
      <p class="text-sm text-gray-700 font-semibold">
        {{ course_details[0].organization }}
      </p>
    </div>
    <p class="text-xs text-gray-500 mt-4">
      {{ course_details[0].course_description }}
    </p>

    <div class="flex justify-between items-center mt-2 mb-4">
      <p class="font-semibold text-gray-700">
        {{ course_details[0].course_detail.length }} Materi
      </p>
      <div class="flex items-center gap-x-2">
        <img src="../assets/clock.svg" alt="course time" />
        <p class="text-xs text-gray-500">
          {{ course_details[0].course_detail[0].lesson_time }} m
        </p>
      </div>
    </div>

    <template v-for="(detail, i) in course_details[0].course_detail" :key="i">
      <DetailCourseCard
        :lesson_title="detail.lesson_title"
        :lesson_time="detail.lesson_time"
      />
    </template>
    <div class="mb-14"></div>
  </div>

  <button
    class="bg-blue-500 z-10 fixed-bottom bottom-4 right-2 left-2 p-2 rounded-md w-full shadow-lg text-white font-semibold"
  >
    Ambil Kelas
  </button>
</template>

<style>
.bg-header-course {
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  padding: 3rem 0;
}
</style>

<script>
export default {
  data() {
    return {
      course_details: [],
      course_image: "/course_img/fashion-design/",
    };
  },
  created() {
    const path = this.$route.params.course_category;
    const url = `/src/data/${path}.json`;

    axios.get(url).then((response) => {
      let data = response.data.data;
      data.map((course) => {
        if (course.id == this.$route.params.id) {
          this.course_details.push(course);
          this.course_image += course.course_image;
        }
      });
    });
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
