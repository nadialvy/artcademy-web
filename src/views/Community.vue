<script setup>
import Navbar from "../components/Navbar.vue";
import Bottombar from "../components/Bottombar.vue";
</script>
<template>
  <div class="mx-auto max-w-md bg-white">
  <div class="bg-dashboard" style="--bg-dashboard-padding: 2rem;"></div>
    <div class="p-4">
      <!-- header section -->
      <div class="bg-white rounded-lg shadow-md -mt-12">
        <div class="p-4">
          <div class="flex gap-x-4">
            <img
              src="../assets/user-profile.svg"
              alt="profile picture"
              class="w-10"
            />
            <input
              type="text"
              id="simple-search"
              class="border border-gray-300 text-gray-700 text-sm rounded-lg block w-full pl-2 py-2 dark:bg-white-700"
              placeholder="Apa yang ingin anda ceritakan?"
              required
            />
          </div>
          <div class="flex justify-between items-center mt-6">
            <div class="flex gap-x-2 items-center">
              <img src="../assets/img.svg" alt="gambar" />
              <p class="text-xs text-gray-700">Gambar</p>
            </div>
            <div class="flex gap-x-2 items-center">
              <img src="../assets/video.svg" alt="video" />
              <p class="text-xs text-gray-700">Video</p>
            </div>
            <div class="flex gap-x-2 items-center">
              <img src="../assets/file.svg" alt="file" />
              <p class="text-xs text-gray-700">File</p>
            </div>
          </div>
        </div>
      </div>

      <!-- my group -->
      <h1 class="text-lg font-bold mb-4 mt-6">Group Saya</h1>
      <div
        class="snap-x mx-auto snap-mandatory flex items-start gap-x-2 w-full overflow-scroll"
      >
        <div
          class="snap-start flex-shrink-0 flex flex-col items-start justify-center text-md"
        >
          <img src="../assets/community-1.svg" alt="Lanjutkan Menonton" />
        </div>
        <div
          class="snap-start flex-shrink-0 flex flex-col items-start justify-center text-md"
        >
          <img src="../assets/community-2.svg" alt="Lanjutkan Menonton" />
        </div>
        <div
          class="snap-start flex-shrink-0 flex flex-col items-start justify-center text-md"
        >
          <img src="../assets/community-3.svg" alt="Lanjutkan Menonton" />
        </div>
        <div
          class="snap-start flex-shrink-0 flex flex-col items-start justify-center text-md"
        >
          <img src="../assets/community-4.svg" alt="Lanjutkan Menonton" />
        </div>
      </div>

      <!-- post -->
      <template v-for="(post, i) in posts" :key="i">
        <div class="bg-white rounded-md shadow-md p-4 mb-4">
          <!-- user info -->
          <div class="flex gap-x-4">
            <img
              src="../assets/user-profile.svg"
              alt="user profile"
              class="w-10"
            />
            <div>
              <p class="font-semibold">{{ post.user_name }}</p>
              <p class="text-sm -mt-1 text-gray-400">{{ post.group_name }}</p>
            </div>
          </div>

          <!-- caption -->
          <p class="text-sm mt-4">
            {{ post.user_caption }}
          </p>
          <img
            src="../assets/post-community.svg"
            alt="post community"
            class="mt-4"
          />
        </div>
      </template>
    </div>
    <Bottombar />
  </div>

</template>

<script>
import communityPost from "../data/community-post.json";
export default {
  data() {
    return {
      posts: communityPost.data,
    };
  },
};
</script>
