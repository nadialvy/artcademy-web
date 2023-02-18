<template>
    <div class="lg:bg-gray-100 h-full w-screen flex justify-center items-center">
      <div class="bg-white w-screen h-min p-8 rounded-lg">
        <h1 class="text-2xl font-bold text-black mb-3">Masuk</h1>
        <p class="text-base text-gray-600">Masukkan akun yang sudah terdaftar</p>
        <button class="w-full flex items-center justify-center gap-4 mt-10 mb-8 text-black font-medium hover:bg-blue-100 h-12 rounded-xl border border-solid border-slate-300 focus:outline-none focus:shadow-outline" @click="loginWithGoogle">
            <img src="google_icon.svg" class="w-5" alt="">
            Log in dengan Google
        </button>
        
        <div class="divider-line relative">
            <div class="line w-full h-px bg-slate-300"></div>
            <p class="text-slate-500 bg-white px-6 text-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">or</p>
        </div>

        <form class="mt-8">
          <div class="mb-4">
            <input class="appearance-none rounded-xl border border-solid border-slate-300 w-full h-12 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email / Nomor Telepon">
          </div>
          <div class="relative">
            <input class="appearance-none rounded-xl border border-solid border-slate-300 w-full h-12 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pin" type="password" placeholder="PIN">
            <button type="button" class="absolute right-5 top-1/2 -translate-y-1/2">
               <img src="password_eye.svg" alt="">
            </button>
          </div>
            <button type="submit" class="my-7 w-full h-12 rounded-xl bg-blue-400 hover:bg-blue-600 text-white font-bold focus:outline-none focus:shadow-outline" >Masuk</button>
            <a class="w-full text-center inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">Lupa Pin?</a>
        </form>

        <p class="text-sm text-center text-slate-600 mt-10">Belum memiliki akun? <a href="#" class="text-blue-500 font-semibold">Daftar sekarang</a></p>
        <p class="text-sm text-center text-slate-600 mt-40">By logging in or registering, you agree <br/> 
            <a href="#" class="text-blue-500 font-semibold">Terms & Conditions</a>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      loginWithGoogle() {
        // implement login with Google here
      }
    }
  }
  </script>
  