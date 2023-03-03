<script setup>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import Bottombar from "../components/Bottombar.vue";
import Search from "../components/Search.vue";
import EcommerceItem from "../components/EcommerceItem.vue";
</script>
<template>
  <Navbar />
  <div class="bg-dashboard md:bg-none" style="--bg-dashboard-padding: 2rem">
    <div class="flex justify-between items-center">
      <div>
        <p class="text-xs font-bold text-white">Saldo anda</p>
        <p class="font-bold text-white text-xl -mt-1">Rp164.500</p>
      </div>
      <div class="flex justify-around items-center gap-x-2">
        <button
          class="text-white text-xs border border-white py-1 px-4 rounded-lg"
        >
          + Isi Saldo
        </button>
        <img src="../assets/cart-ic.svg" alt="Cart" />
        <img src="../assets/history-order-ic.svg" alt="Order" />
      </div>
    </div>
  </div>

  <div class="px-4">
    <!-- search -->
    <Search text="Mau cari barang? Cari disini..." />

    <!-- most buy -->
    <div class="bg-white p-4 shadow-md rounded-lg mt-4 mb-5">
      <h1 class="text-lg font-bold mb-2">Barang Terlaris</h1>
      <div
        class="snap-x mx-auto snap-mandatory flex items-start gap-x-5 w-full overflow-scroll"
      >
        <!-- <router-link to="/ecommerce/detail/teko-keramik-antik"> -->
        <template v-for="(item, i) in mostBuyedItems" :key="i">
          <EcommerceItem
            :title="item.product_name"
            :price="item.product_price"
            :imagePath="item.product_image"
          />
        </template>
        <!-- </router-link> -->
      </div>
    </div>

    <!-- fav section -->
    <div class="bg-white p-4 shadow-md rounded-lg mt-4 mb-16">
      <h1 class="text-lg font-bold mb-2">Barang Tervaforit</h1>
      <div
        class="snap-x mx-auto snap-mandatory flex items-start gap-x-5 w-full overflow-scroll"
      >
        <!-- <router-link to="/ecommerce/detail/teko-keramik-antik"> -->
        <template v-for="(item, i) in favItems" :key="i">
          <EcommerceItem
            :title="item.product_name"
            :price="item.product_price"
            :imagePath="item.product_image"
          />
        </template>
        <!-- </router-link> -->
      </div>
    </div>
  </div>

  <!-- bottom bar section -->
  <Bottombar />
</template>

<script>
export default {
  data() {
    return {
      favItems: [],
      mostBuyedItems: [],
    };
  },
  created() {
    this.getFavItems();
    this.getMostBuyedItems();
  },
  methods: {
    getFavItems() {
      axios
        .get(`/src/data/fav-item.json`)
        .then((response) => {
          this.favItems = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMostBuyedItems() {
      axios
        .get(`/src/data/most-buyed-item.json`)
        .then((response) => {
          this.mostBuyedItems = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
