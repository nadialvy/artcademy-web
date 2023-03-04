<template>
  <div class="mx-auto max-w-md bg-white h-screen">
    <div class="bg-dashboard" style="--bg-dashboard-padding: 1.2rem">
      <div class="flex justify-between items-center">
        <p @click="goBack()" class="text-white font-bold text-2xl pl-2">←</p>
        <p class="text-white font-bold mr-10 text-lg">Level</p>
        <div></div>
      </div>
    </div>

    <div class="p-4 mt-2">
      <div class="p-4 bg-white rounded-lg shadow-sm">
        <p class="text-center text-sm font-semibold">
          Halo Anapati, Kejar terus levelmu!!!
        </p>
        <div class="flex justify-around items-center text-xs mt-4">
          <div class="flex flex-col items-center justify-center">
            <p class="font-bold">7</p>
            <p>Misi</p>
          </div>
          <div class="flex flex-col items-center justify-center">
            <p class="font-bold">2</p>
            <p>Level</p>
          </div>
          <div class="flex flex-col items-center justify-center">
            <p class="font-bold">367</p>
            <p>Exp</p>
          </div>
          <div class="flex flex-col items-center justify-center">
            <p class="font-bold">2</p>
            <p>Lencana</p>
          </div>
        </div>
      </div>
      <img src="../assets/level_gamification.svg" alt="" class="w-60 mx-auto" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
