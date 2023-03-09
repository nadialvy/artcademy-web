<template>
  <div class="mx-auto max-w-md bg-white h-screen">
    <div class="bg-dashboard" style="--bg-dashboard-padding: 1.2rem">
      <div class="flex justify-between items-center">
        <p @click="goBack()" class="text-white font-bold text-2xl pl-2">←</p>
        <p class="text-white font-bold mr-10">Ambil Kelas</p>
        <div></div>
      </div>
    </div>

    <div class="p-4">
      <p class="font-semibold text-lg">Paket Kursus</p>

      <div class="bg-white p-4 rounded-md shadow-lg text-sm mt-4">
        <p class="font-semibold">Paket Visual</p>
        <div class="flex justify-start items-center mt-4">
          <img src="../assets/ic_tv.svg" alt="" class="mr-4"/>
          <div>
            <p class="font-semibold mb-2">Akses Video Pembelajaran</p>
            <p class="text-xs text-gray-500">
              Dapatkan akses video pembelajaran yang dapat diakses di mana saja
              dan kapan saja
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white p-4 rounded-md shadow-lg text-sm mt-4">
        <p class="font-semibold">Paket Collaborate</p>
        <div class="flex justify-start items-center mt-4">
          <img src="../assets/ic_tv.svg" alt="" class="mr-4" />
          <div>
            <p class="font-semibold mb-2">Akses Video Pembelajaran</p>
            <p class="text-xs text-gray-500">
              Dapatkan akses video pembelajaran yang dapat diakses di mana saja
              dan kapan saja
            </p>
          </div>
        </div>
        <div class="flex justify-start items-center mt-4">
          <img src="../assets/ic_chalkboard.svg" alt="" class="mr-4" />
          <div>
            <p class="font-semibold mb-2">Belajar Bersama Mentor</p>
            <p class="text-xs text-gray-500">
              Ikuti jadwal belajar bersama mentor dan teman-teman kursus lainnya
              secara online
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white p-4 rounded-md shadow-lg text-sm mt-4">
        <p class="font-semibold">Paket Personal</p>
        <div class="flex justify-start items-center mt-4">
          <img src="../assets/ic_chalkboard.svg" alt="" class="mr-4" />
          <div>
            <p class="font-semibold mb-2">Belajar Private</p>
            <p class="text-xs text-gray-500">
              Jadwalkan belajar secara private bersama mentor secara online
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white p-4 rounded-md shadow-lg text-sm mt-4">
        <p class="font-semibold">Paket Personal</p>
        <div class="flex justify-start items-center mt-4">
          <img src="../assets/ic_person_chalkboard.svg" alt="" class="mr-4" />
          <div>
            <p class="font-semibold mb-2">Belajar Langsung di tempat</p>
            <p class="text-xs text-gray-500">
              Ikuti belajar langsung di tempat bersama mentor
            </p>
          </div>
        </div>
      </div>
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
