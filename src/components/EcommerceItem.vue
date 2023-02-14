<template>
  <div
    class="snap-start flex-shrink-0 flex flex-col items-start justify-center text-md"
  >
    <img :src="imagePath" :alt="title" />
    <p
      class="text-xs text-start mt-2 text-gray-500"
      style="width: 130px; word-wrap: break-word"
    >
      {{ title }}
    </p>
    <p class="text-sm text-start text-gray-500 font-semibold mt-2">
      {{ price }}
    </p>
  </div>
</template>

<script>
export default {
  name: "EcommerceItem",
  props: {
    imagePath: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
};
</script>
