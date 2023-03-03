<template>
  <div class="bg-overlay bg-white rounded-lg shadow-md mb-4">
    <div class="flex items-start p-2">
      <img src="../assets/thumbnail-course.svg" alt="" class="w-1/4" />
      <div class="flex flex-col justify-start items-start ml-2 text-sm">
        <p class="font-semibold">
          {{ lesson_title }}
        </p>
        <!-- <img src="../assets/lock.svg" alt="" class="w-5" /> -->
        <p class="text-xs mb-4">{{ lesson_time }} menit</p>
        <img src="../assets/course_progress_bar.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style>
.bg-overlay {
  position: relative;
}

.bg-overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 0.5rem;
}
</style>

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
