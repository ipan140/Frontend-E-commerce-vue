<script setup lang="ts">
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-vue-next'

const footerLinks = [
  {
    title: 'Layanan Pelanggan',
    links: [
      { name: 'Bantuan', href: '#' },
      { name: 'Metode Pembayaran', href: '#' },
      { name: 'TrendStorePay', href: '#' },
      { name: 'Koin TrendStore', href: '#' },
      { name: 'Lacak Pesanan Pembeli', href: '#' },
      { name: 'Lacak Pengiriman Penjual', href: '#' },
      { name: 'Gratis Ongkir', href: '#' },
      { name: 'Pengembalian Barang & Dana', href: '#' },
      { name: 'Garansi TrendStore', href: '#' },
      { name: 'XTRA Aman', href: '#' },
      { name: 'Hubungi Kami', href: '#' }
    ]
  },
  {
    title: 'Jelajahi TrendStore',
    links: [
      { name: 'Tentang Kami', href: '#' },
      { name: 'Karir', href: '#' },
      { name: 'Kebijakan', href: '#' },
      { name: 'Kebijakan Privasi TrendStore', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'TrendStore Mall', href: '#' },
      { name: 'Seller Centre', href: '#' },
      { name: 'Flash Sale', href: '#' },
      { name: 'Kontak Media', href: '#' },
      { name: 'TrendStore Affiliate', href: '#' }
    ]
  }
]

// Kampus TrendStore dihapus
const socials = [
  { icon: Facebook, href: '#', name: 'Facebook' },
  { icon: Instagram, href: '#', name: 'Instagram' },
  { icon: Twitter, href: '#', name: 'Twitter' },
  { icon: Linkedin, href: '#', name: 'LinkedIn' },
]

const payments = [
  { name: 'Alfamart', img: new URL('@/assets/img/Imgpayment/alfamart.jpg', import.meta.url).href },
  { name: 'Alfamidi', img: new URL('@/assets/img/Imgpayment/alfamidi.png', import.meta.url).href },
  { name: 'BCA', img: new URL('@/assets/img/Imgpayment/BCA.jpg', import.meta.url).href },
  { name: 'BNI', img: new URL('@/assets/img/Imgpayment/BNI.jpg', import.meta.url).href },
  { name: 'BRI', img: new URL('@/assets/img/Imgpayment/BRI.jpg', import.meta.url).href },
  { name: 'BSI', img: new URL('@/assets/img/Imgpayment/BSI.jpg', import.meta.url).href },
  { name: 'BTPN', img: new URL('@/assets/img/Imgpayment/BTPN.jpg', import.meta.url).href },
  { name: 'CIMB Niaga', img: new URL('@/assets/img/Imgpayment/cimbniaga.jpg', import.meta.url).href },
  { name: 'Dana', img: new URL('@/assets/img/Imgpayment/Dana.jpg', import.meta.url).href },
  { name: 'GoPay', img: new URL('@/assets/img/Imgpayment/Gopay.jpg', import.meta.url).href },
  { name: 'Indomaret', img: new URL('@/assets/img/Imgpayment/indomaret.jpg', import.meta.url).href },
  { name: 'LinkAja', img: new URL('@/assets/img/Imgpayment/LINKaja.jpg', import.meta.url).href },
  { name: 'Mandiri', img: new URL('@/assets/img/Imgpayment/mandiri.jpg', import.meta.url).href },
  { name: 'Mastercard', img: new URL('@/assets/img/Imgpayment/mastercart.jpg', import.meta.url).href },
  { name: 'MEGA', img: new URL('@/assets/img/Imgpayment/MEGA.jpg', import.meta.url).href },
  { name: 'OVO', img: new URL('@/assets/img/Imgpayment/OVO.jpg', import.meta.url).href },
  { name: 'Permata', img: new URL('@/assets/img/Imgpayment/permata.jpg', import.meta.url).href },
  { name: 'SeaBank', img: new URL('@/assets/img/Imgpayment/seabank.jpg', import.meta.url).href },
  { name: 'VISA', img: new URL('@/assets/img/Imgpayment/visa.jpg', import.meta.url).href },
]

const shippings = [
  { name: 'Bluebird', img: new URL('@/assets/img/Imgsent/bluebird.png', import.meta.url).href },
  { name: 'GoSend', img: new URL('@/assets/img/Imgsent/gosend.jpg', import.meta.url).href },
  { name: 'GrabExpress', img: new URL('@/assets/img/Imgsent/grab.jpg', import.meta.url).href },
  { name: 'ID Express', img: new URL('@/assets/img/Imgsent/ID-Express.png', import.meta.url).href },
  { name: 'Indo Paket', img: new URL('@/assets/img/Imgsent/indo.jpg', import.meta.url).href },
  { name: 'JNE', img: new URL('@/assets/img/Imgsent/jne.png', import.meta.url).href },
  { name: 'J&T Cargo', img: new URL('@/assets/img/Imgsent/jtcargo.png', import.meta.url).href },
  { name: 'Ninja Xpress', img: new URL('@/assets/img/Imgsent/ninja.png', import.meta.url).href },
  { name: 'Pos Aja', img: new URL('@/assets/img/Imgsent/posaja.jpg', import.meta.url).href },
  { name: 'Sentral Cargo', img: new URL('@/assets/img/Imgsent/sentra.png', import.meta.url).href },
  { name: 'SiCepat', img: new URL('@/assets/img/Imgsent/sicepat.png', import.meta.url).href },
  { name: 'SPX', img: new URL('@/assets/img/Imgsent/spx.jpeg', import.meta.url).href },
]

const secureImg = new URL('@/assets/img/Imgglobal/Secure.jpg', import.meta.url).href
const qrCodeImg = new URL('@/assets/img/Imgglobal/qrcode.png', import.meta.url).href
const appStoreImg = new URL('@/assets/img/Imgglobal/Appstore.jpg', import.meta.url).href
const playStoreImg = new URL('@/assets/img/Imgglobal/Playstore.jpg', import.meta.url).href
</script>

<template>
  <footer
    class="bg-white dark:bg-gray-900 pt-10 pb-8 md:pt-12 md:pb-10 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 font-sans">
    <div class="max-w-[1200px] mx-auto px-5 md:px-8">

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 md:gap-8 mb-10">

        <!-- Column 1 & 2: Text Links -->
        <div v-for="column in footerLinks" :key="column.title" class="col-span-1 space-y-4">
          <h4 class="text-sm font-bold text-gray-800 dark:text-gray-100 uppercase tracking-wide">
            {{ column.title }}
          </h4>
          <ul class="space-y-1 md:space-y-2">
            <li v-for="link in column.links" :key="link.name">
              <a :href="link.href"
                class="block py-1.5 md:py-0 text-gray-500 dark:text-gray-400 text-[13px] md:text-sm hover:text-brand-500 dark:hover:text-white transition-colors">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Payment & Logistics -->
        <div class="col-span-2 md:col-span-1 space-y-6">

          <!-- Pembayaran -->
          <div>
            <h4 class="text-sm font-bold text-gray-800 dark:text-gray-100 uppercase tracking-wide mb-4">Pembayaran</h4>
            <div class="flex flex-wrap gap-2">
              <div v-for="pay in payments" :key="pay.name"
                class="h-8 w-14 flex items-center justify-center bg-white border border-gray-200 rounded shadow-sm overflow-hidden p-1">
                <img :src="pay.img" :alt="pay.name" class="max-h-full max-w-full object-contain" />
              </div>
            </div>
          </div>

          <!-- Pengiriman -->
          <div>
            <h4 class="text-sm font-bold text-gray-800 dark:text-gray-100 uppercase tracking-wide mb-4">Pengiriman</h4>
            <div class="flex flex-wrap gap-2">
              <div v-for="ship in shippings" :key="ship.name"
                class="h-8 w-14 flex items-center justify-center bg-white border border-gray-200 rounded shadow-sm overflow-hidden p-1">
                <img :src="ship.img" :alt="ship.name" class="max-h-full max-w-full object-contain" />
              </div>
            </div>
          </div>

        </div>

        <!-- Column 4: Socials & Security -->
        <div class="col-span-2 md:col-span-1 space-y-6">
          <div>
            <h4 class="text-sm font-bold text-gray-800 dark:text-gray-100 uppercase tracking-wide mb-4">Ikuti Kami</h4>
            <ul class="space-y-2 md:space-y-3">
              <li v-for="social in socials" :key="social.name">
                <a :href="social.href"
                  class="flex items-center gap-3 md:gap-2 py-1.5 md:py-0 text-gray-500 dark:text-gray-400 hover:text-brand-500 dark:hover:text-white transition-colors text-[13px] md:text-sm">
                  <div
                    class="h-7 w-7 flex shrink-0 items-center justify-center rounded-full bg-gray-600 text-white dark:bg-white/10 dark:text-gray-300">
                    <component :is="social.icon" :size="14" />
                  </div>
                  {{ social.name }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Keamanan -->
          <div>
            <h4 class="text-sm font-bold text-gray-800 dark:text-gray-100 uppercase tracking-wide mb-4">Keamanan</h4>
            <div
              class="h-12 w-24 bg-white border border-gray-200 rounded shadow-sm overflow-hidden p-1 flex items-center justify-center">
              <img :src="secureImg" alt="Keamanan" class="max-h-full max-w-full object-contain" />
            </div>
          </div>
        </div>

        <!-- Column 5: App Download -->
        <div class="col-span-2 md:col-span-2 lg:col-span-1 space-y-4">
          <h4 class="text-sm font-bold text-gray-800 dark:text-gray-100 uppercase tracking-wide">Download Aplikasi</h4>
          <div class="flex items-start gap-4 md:gap-3">

            <!-- QR Code -->
            <div
              class="w-20 h-20 md:w-[88px] md:h-[88px] shrink-0 bg-white border border-gray-200 p-1 rounded shadow-sm overflow-hidden flex items-center justify-center">
              <img :src="qrCodeImg" alt="QR Code" class="max-h-full max-w-full object-contain" />
            </div>

            <div class="flex flex-col gap-2 flex-1 max-w-[130px]">

              <!-- App Store -->
              <div
                class="h-10 w-full bg-gray-900 border border-gray-700 rounded-lg shadow-sm cursor-pointer hover:bg-gray-800 transition-colors overflow-hidden">
                <img :src="appStoreImg" alt="App Store" class="w-full h-full object-cover" />
              </div>

              <!-- Google Play -->
              <div
                class="h-10 w-full bg-gray-900 border border-gray-700 rounded-lg shadow-sm cursor-pointer hover:bg-gray-800 transition-colors overflow-hidden">
                <img :src="playStoreImg" alt="Google Play" class="w-full h-full object-cover" />
              </div>

            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Divider -->
      <div
        class="pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-6 text-[13px] text-gray-500 text-center lg:text-left">
        <p>© 2026 TrendStore. Hak Cipta Dilindungi.</p>

        <div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span class="mb-2 sm:mb-0">Negara:</span>
          <div class="flex flex-wrap justify-center items-center">
            <a href="#"
              class="px-2.5 sm:px-3 border-r border-gray-300 dark:border-gray-700 hover:underline hover:text-brand-500 mb-1 sm:mb-0">Singapura</a>
            <a href="#"
              class="px-2.5 sm:px-3 border-r border-gray-300 dark:border-gray-700 hover:underline hover:text-brand-500 mb-1 sm:mb-0">Indonesia</a>
            <a href="#"
              class="px-2.5 sm:px-3 border-r border-gray-300 dark:border-gray-700 hover:underline hover:text-brand-500 mb-1 sm:mb-0">Taiwan</a>
            <a href="#" class="px-2.5 sm:px-3 hover:underline hover:text-brand-500 mb-1 sm:mb-0">Thailand</a>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<style scoped>
.text-brand-500 {
  color: #ee4d2d;
}
</style>