<template>
  <div class="bg-white rounded-lg shadow-md my-2">
      <div class="flex items-center p-2">
        <img src="../assets/thumbnail-course.svg">
        <div class="flex flex-col justify-start items-start ml-2">
          <p class="font-semibold text-sm text-gray-500">0{{chapter_number}} - {{chapter_name}}</p>
          <p class="text-xs mt-2 text-gray-500">{{chapter_time}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default{
  props: {
    chapter_number: {
      type: String,
      required: true,
    },
    chapter_name: {
      type: String,
      required: true,
    },
    chapter_time: {
      type: String,
      required: true,
    },
  }
}
</script>