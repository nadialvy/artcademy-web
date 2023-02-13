<template>
  <div class="p-4">
    <div
      class="bg-white border border-gray-200 z-10 fixed-bottom left-4 right-4 bottom-4 p-4 rounded-full shadow-lg"
    >
      <div class="flex justify-around items-center">
        <template v-if="this.$route.path === '/dashboard'">
          <img src="../assets/house-active.svg" alt="" />
        </template>
        <template v-else>
          <img src="../assets/house.svg" alt="" />
        </template>
        <template v-if="this.$route.path === '/cart'">
          <img src="../assets/cart-active.svg" alt="" />
        </template>
        <template v-else>
          <img src="../assets/cart.svg" alt="" />
        </template>
        <template v-if="this.$route.path === '/community'">
          <img src="../assets/group-active.svg" alt="" />
        </template>
        <template v-else>
          <img src="../assets/group.svg" alt="" />
        </template>
        <template v-if="this.$route.path === '/user'">
          <img src="../assets/user-active.svg" alt="" />
        </template>
        <template v-else>
          <img src="../assets/user.svg" alt="" />
        </template>
      </div>
    </div>
  </div>
</template>
