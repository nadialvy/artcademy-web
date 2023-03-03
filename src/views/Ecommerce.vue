<script setup>
import Navbar from "../components/Navbar.vue";
import Bottombar from "../components/Bottombar.vue";
import Search from "../components/Search.vue";
import EcommerceItem from "../components/EcommerceItem.vue";
</script>
<template>
  <Navbar />
  <div class="bg-dashboard md:bg-none" style="--bg-dashboard-padding: 2rem;">
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
        <EcommerceItem
          title="Teko Keramik Antik Biru Putih"
          price="Rp120.000"
          imagePath="most-buyed-1.svg"
        />
        <EcommerceItem
          title="KANA Astratta - Painting / Lukisan"
          price="Rp650.000"
          imagePath="most-buyed-2.svg"
        />
        <EcommerceItem
          title="Kain Batik Panjnag H Santoso 3m"
          price="Rp230.000"
          imagePath="most-buyed-3.svg"
        />
      </div>
    </div>

    <!-- fav section -->
    <div class="bg-white p-4 shadow-md rounded-lg mt-4 mb-16">
      <h1 class="text-lg font-bold mb-2">Barang Tervaforit</h1>
      <div
        class="snap-x mx-auto snap-mandatory flex items-start gap-x-5 w-full overflow-scroll"
      >
        <EcommerceItem
          title="Patung Fu Dog Emas Sepasang"
          price="Rp1.320.000"
          imagePath="fav-1.svg"
        />
        <EcommerceItem
          title="Batik Keris Tas Nylon Rajut"
          price="Rp830.000"
          imagePath="fav-2.svg"
        />
        <EcommerceItem
          title="Pot Terakota / Gerabah"
          price="Rp120.000"
          imagePath="fav-3.svg"
        />
      </div>
    </div>
  </div>

  <!-- bottom bar section -->
  <Bottombar />
</template>
