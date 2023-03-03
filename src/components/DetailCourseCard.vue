<template>
  <div class="bg-white rounded-lg shadow-md mb-4">
    <div class="flex items-center p-2">
      <img src="../assets/thumbnail-course.svg" alt="" class="w-1/4" />
      <div class="flex flex-col justify-start items-start ml-2 text-sm">
        <p class="font-semibold">
          {{ lesson_title }}
        </p>
        <p class="text-xs mb-4">{{ lesson_time }} menit</p>
        <img src="../assets/course_progress_bar.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lesson_title: {
      type: String,
      required: true,
    },
    lesson_time: {
      type: String,
      required: true,
    },
  },
};
</script>
