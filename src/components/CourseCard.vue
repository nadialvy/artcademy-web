<template>
  <div class="bg-white p-4 rounded-lg shadow-md mt-3">
    <div class="flex justify-between items-center">
      <div class="flex gap-x-4">
         <img :src="'/public/' + course_category + '.svg'" />
        <div>
          <p class="font-bold text-sm">{{ course_name }}</p>
          <p class="font-light text-xs text-gray-500">{{ organization }}</p>
          <p></p>
        </div>
      </div>
      <!-- <p class="font-bold text-gray-700 text-xl">→</p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course_name: {
      type: String,
      required: true,
    },
    course_image: {
      type: String,
      required: true,
    },
    course_rating: {
      type: String,
      required: true,
    },
    organization: {
      type: String,
      required: true,
    },
    course_category: {
      type: String,
      required: true,
    },
  },
};
</script>
