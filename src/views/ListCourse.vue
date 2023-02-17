<script setup>
import axios from "axios";
import Search from "../components/Search.vue";
import CourseCard from "../components/CourseCard.vue";
</script>

<template>
  <div class="bg-dashboard md:bg-none">
    <p @click="goBack()" class="text-white font-semibold text-3xl pl-2">
      ← <span class="text-sm">Pelajaran</span>
    </p>
  </div>
  <div class="px-4">
    <Search text="Mau cari kelas? cari disini..." />
    <template v-for="(course, i) in courses" :key="i">
      <router-link :to="`/listcourse/${$route.params.course_category}/${course.id}`">
        <CourseCard
          :course_name="course.course_name"
          :organization="course.organization"
        />
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    course_name: {
      type: String,
      required: true,
    },
  },
  data() {
  return {
      courses: [],
    };
  },
  created() {
    const path = this.$route.params.course_category;
    const url = `/src/data/${path}.json`;

    axios
      .get(url)
      .then((response) => {
        this.courses = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
