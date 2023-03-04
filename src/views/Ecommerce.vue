<script setup>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import Bottombar from "../components/Bottombar.vue";
import Search from "../components/Search.vue";
import EcommerceItem from "../components/EcommerceItem.vue";
</script>
<template>
  <div class="mx-auto max-w-md bg-white h-screen">
    <template v-if="loading">
      <img
        src="../assets/loading.gif"
        alt=""
        class="pt-80 mx-auto my-auto w-10"
      />
    </template>
    <template v-else>
      <div class="bg-dashboard" style="--bg-dashboard-padding: 2rem">
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
            <template v-for="(item, i) in mostBuyedItems" :key="i">
              <!-- passing id then get the id -->
              <router-link
                :to="{
                  path: `/ecommerce/detail/most-buyed-item/${item.product_name}/${item.id}`,
                }"
              >
                <EcommerceItem
                  :title="item.product_name"
                  :price="item.product_price"
                  :imagePath="item.product_image"
                />
              </router-link>
            </template>
          </div>
        </div>

        <!-- fav section -->
        <div class="bg-white p-4 shadow-md rounded-lg mt-4 mb-16">
          <h1 class="text-lg font-bold mb-2">Barang Tervaforit</h1>
          <div
            class="snap-x mx-auto snap-mandatory flex items-start gap-x-5 w-full overflow-scroll"
          >
            <template v-for="(item, i) in favItems" :key="i">
              <router-link
                :to="{
                  path: `/ecommerce/detail/fav-item/${item.product_name}/${item.id}`,
                }"
              >
                <EcommerceItem
                  :title="item.product_name"
                  :price="item.product_price"
                  :imagePath="item.product_image"
                />
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </template>

    <!-- bottom bar section -->
    <Bottombar />
  </div>
</template>

<script>
export default {
  data() {
    return {
      favItems: [],
      mostBuyedItems: [],
      loading: true,
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
          setTimeout(() => {
            this.loading = false;
          }, 300);
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
          setTimeout(() => {
            this.loading = false;
          }, 300);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
