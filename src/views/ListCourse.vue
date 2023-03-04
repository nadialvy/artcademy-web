<script setup>
import axios from "axios";
import Search from "../components/Search.vue";
import CourseCard from "../components/CourseCard.vue";
</script>

<template>
  <div class="mx-auto max-w-md bg-white h-screen">
    <div class="bg-dashboard">
      <div class="flex justify-between items-center">
        <p @click="goBack()" class="text-white font-bold text-2xl pl-2">←</p>
        <p class="text-white font-bold mr-10">Pelajaran</p>
        <div></div>
      </div>
    </div>
    <template v-if="loading">
      <img
        src="../assets/loading.gif"
        alt=""
        class="pt-80 mx-auto my-auto w-10"
      />
    </template>
    <template v-else>
      <div class="px-4">
        <Search text="Mau cari kelas? cari disini..." />
        <template v-for="(course, i) in courses" :key="i">
          <router-link
            :to="`/listcourse/${$route.params.course_category}/${course.id}`"
          >
            <CourseCard
              :course_name="course.course_name"
              :organization="course.organization"
              :course_category="$route.params.course_category"
            />
          </router-link>
        </template>
      </div>
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
      loading: true,
    };
  },
  created() {
    const path = this.$route.params.course_category;
    const url = `/${path}.json`;

    axios
      .get(url)
      .then((response) => {
        this.courses = response.data.data;
        setTimeout(() => {
          this.loading = false;
        }, 300);
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
