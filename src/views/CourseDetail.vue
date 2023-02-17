<script setup>
import axios from "axios";
import CourseDetailCard from "../components/CourseDetailCard.vue";
</script>
<template>
  <div class="p-4">
    <h1 class="font-bold text-lg">{{course_details[0].course_name}}</h1>
    <div class="flex items-center gap-x-4 mt-2">
      <img src="../assets/user-profile.svg" class="w-8 rounded-lg"/>
      <p class="text-sm text-gray-700 font-semibold">{{course_details[0].organization}}</p>
    </div>
    <p class="text-xs text-gray-500 mt-4">{{course_details[0].course_description}}</p>

    <div class="flex justify-between items-center mt-2 mb-4">
      <p class="font-semibold text-gray-700">{{course_details[0].course_detail[0].lesson_chapter.length}} Materi</p>
      <div class="flex items-center gap-x-2">
        <img src="../assets/clock.svg" alt="course time">
        <p class="text-xs text-gray-500">{{course_details[0].course_detail[0].lesson_time}} m</p>
      </div>
    </div>

    <!-- list course -->
    <template v-for="(chapter, i) in course_details[0].course_detail[0].lesson_chapter[0]" :key="i">
      <CourseDetailCard chapter_number=course.chapter_number />
    </template>
    <div class="bg-white rounded-lg shadow-md my-2">
      <div class="flex items-center p-2">
        <img src="../assets/thumbnail-course.svg">
        <div class="flex flex-col justify-start items-start ml-2">
          <p class="font-semibold text-sm text-gray-500">0{{course_details[0].course_detail[0].lesson_chapter[0].chapter_number}} - {{course_details[0].course_detail[0].lesson_chapter[0].chapter_name}}</p>
          <p class="text-xs mt-2 text-gray-500">{{course_details[0].course_detail[0].lesson_chapter[0].chapter_time}}</p>
        </div>
      </div>
    </div>
  </div>

  <p>{{this.course_details[0]}}</p>
</template>

<script>
export default {
  data() {
    return {
      course_details: [],
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
        }
      });
    });
  },
};
</script>
