<template>
  <div class="bg-dashboard md:bg-none" style="--bg-dashboard-padding: 1.2rem">
    <div class="flex justify-between items-center">
      <p @click="goBack()" class="text-white font-bold text-2xl pl-2">←</p>
      <p class="text-white font-bold mr-10">Detail Barang</p>
      <div></div>
    </div>
  </div>

  <div class="p-4">
    <div class="flex justify-start items-start gap-x-4">
      <img src="../../public/most-buyed-1.svg" alt="">
      <div class="">
        <p class="font-semibold text-sm">Teko Keramik Antik Biru Putih</p>
        <p class="font-bold mt-1 text-blue-400">Rp120.000</p>
        <div class="flex gap-x-2 justify-start items-center mt-4">
          <img src="../assets/shop.svg" alt="">
          <p class="text-sm">Sejarah Toko</p>
        </div>
      </div>
    </div>

    <div class="mt-6">
      <p class="text-gray-500 text-xs font-semibold">Stok Barang:</p>
      <p class="text-sm mt-2">3</p>
    </div>
    <div class="mt-6">
      <p class="text-gray-500 text-xs font-semibold">Varian Barang:</p>
      <div class="flex justify-start items-center gap-x-4">
        <p class="text-xs mt-2"> ◉ Putih Merah</p>
        <p class="text-xs mt-2"> ◉ Kuning</p>
        <p class="text-xs mt-2"> ◉ Putih Biru</p>
        <p class="text-xs mt-2"> ◉ Hijau</p>
      </div>
    </div>
    <div class="mt-6">
      <p class="text-gray-500 text-xs font-semibold">Deskripsi Barang:</p>
      <p class="text-sm mt-2">Sebuah teko keramik antik khas jawa tengah berwarna biru putih dengan motif bunga mawar di tengah dan terdapat tambahan 2 gelas kecil</p>
    </div>
  </div>
<button class="bg-blue-400 z-10 text-white text-center w-full rounded-md p-4 text-sm font-semibold fixed-bottom">Masukkan Keranjang</button>

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
