<script setup>
import axios from "axios";
</script>

<template>
  <div class="mx-auto max-w-md bg-white h-screen">
    <div class="bg-dashboard" style="--bg-dashboard-padding: 1.2rem">
      <div class="flex justify-between items-center">
        <p @click="goBack()" class="text-white font-bold text-2xl pl-2">←</p>
        <p class="text-white font-bold mr-10">Detail Barang</p>
        <div></div>
      </div>
    </div>
    <template v-if="loading">
      <img
        src="../assets/loading.gif"
        alt=""
        class="pt-80 mx-auto my-auto w-10"
      />
    </template>
    <template v-else>
      <div class="p-4">
        <div class="flex justify-start items-start gap-x-4">
          <img :src="'/' + productDetail[0].product_image" alt="" />
          <div class="">
            <p class="font-semibold text-sm">
              {{ productDetail[0].product_name }}
            </p>
            <p class="font-bold mt-1 text-blue-400">
              {{ productDetail[0].product_price }}
            </p>
            <div class="flex gap-x-2 justify-start items-center mt-4">
              <img src="../assets/shop.svg" alt="" />
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
            <p class="text-xs mt-2">◉ Putih Merah</p>
            <p class="text-xs mt-2">◉ Kuning</p>
            <p class="text-xs mt-2">◉ Putih Biru</p>
            <p class="text-xs mt-2">◉ Hijau</p>
          </div>
        </div>
        <div class="mt-6">
          <p class="text-gray-500 text-xs font-semibold">Deskripsi Barang:</p>
          <p class="text-sm mt-2">
            {{ productDetail[0].product_desc }}
          </p>
        </div>
        <div class="mt-6">
          <p class="text-gray-500 text-xs font-semibold">Ulasan Pembeli:</p>
          <template
            v-for="(review, i) in productDetail[0].product_review"
            :key="i"
          >
            <div class="flex justify-start items-start gap-x-4 mt-3">
              <img src="../assets/user.png" alt="" class="w-7" />
              <div class="text-xs">
                <p class="font-semibold">{{ review.name }}</p>
                <p class="text-gray-500 mt-1">{{ review.review }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
      <button
        class="bg-blue-400 z-10 text-white text-center max-w-md mx-auto rounded-md p-4 text-sm font-semibold fixed-bottom"
      >
        Masukkan Keranjang
      </button>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productDetail: [],
      loading: true,
    };
  },
  created() {
    const id = this.$route.params.item_id;
    const type = this.$route.params.product_type;
    const url = `/data/${type}.json`;
    let allData = [];

    axios.get(url).then((response) => {
      allData = response.data.data;
      this.productDetail = allData.filter((data) => data.id == id);
      setTimeout(() => {
        this.loading = false;
      }, 300);
    });
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
