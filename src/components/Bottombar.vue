<template>
    <div class="p-4">
      <div
        class="bg-white max-w-sm mx-auto border border-gray-200 z-10 fixed-bottom left-4 right-4 bottom-4 p-4 rounded-full shadow-lg"
      >
        <div class="flex justify-around items-center">
          <router-link to="/dashboard">
            <template v-if="this.$route.path === '/dashboard'">
              <img src="../assets/house-active.svg" alt="" />
            </template>
            <template v-else>
              <img src="../assets/house.svg" alt="" />
            </template>
          </router-link>

          <router-link to="/ecommerce">
            <template v-if="this.$route.path === '/ecommerce'">
              <img src="../assets/cart-active.svg" alt="" />
            </template>
            <template v-else>
              <img src="../assets/cart.svg" alt="" />
            </template>
          </router-link>

          <router-link to="/community">
            <template v-if="this.$route.path === '/community'">
              <img src="../assets/group-active.svg" alt="" />
            </template>
            <template v-else>
              <img src="../assets/group.svg" alt="" />
            </template>
          </router-link>

          <router-link to="/profile">
            <template v-if="this.$route.path === '/profile'">
              <img src="../assets/user-active.svg" alt="" />
            </template>
            <template v-else>
              <img src="../assets/user.svg" alt="" />
            </template>
          </router-link>
        </div>
      </div>
    </div>
</template>
