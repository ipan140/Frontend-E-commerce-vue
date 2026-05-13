<script setup lang="ts">
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  GraduationCap
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

const socials = [
  { icon: Facebook, href: '#', name: 'Facebook' },
  { icon: Instagram, href: '#', name: 'Instagram' },
  { icon: Twitter, href: '#', name: 'Twitter' },
  { icon: Linkedin, href: '#', name: 'LinkedIn' },
  { icon: GraduationCap, href: '#', name: 'Kampus TrendStore' }
]

// Placeholder arrays for grids
const payments = [
  'Alfamart', 'Alfamidi', 'Amex', 'BCA', 'BNI', 'BRI',
  'BSI', 'CIMB', 'Dan Dan', 'Indomaret', 'JCB', 'Mandiri',
  'Mastercard', 'Permata', 'SeaBank', 'SPay', 'VISA'
]

const shippings = [
  'Anteraja', 'Bluebird', 'GoSend', 'Grab', 'ID Express', 'Indo Paket',
  'JNE', 'J&T', 'Ninja', 'Pos', 'Sentral', 'SiCepat', 'SPX'
]
</script>

<template>
  <footer
    class="bg-white dark:bg-gray-900 pt-10 pb-8 md:pt-12 md:pb-10 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 font-sans">
    <div class="max-w-[1200px] mx-auto px-5 md:px-8">

      <!-- Responsive Grid Layout: 
           Mobile: 2 Kolom (untuk links), sisanya turun ke bawah
           Tablet: 3 Kolom
           Desktop: 5 Kolom -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 md:gap-8 mb-10">

        <!-- Column 1 & 2: Text Links (Bagi 2 kolom di mobile agar tidak terlalu panjang ke bawah) -->
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
          <div>
            <h4 class="text-sm font-bold text-gray-800 dark:text-gray-100 uppercase tracking-wide mb-4">Pembayaran</h4>
            <div class="flex flex-wrap gap-2">
              <div v-for="pay in payments" :key="pay"
                class="h-7 px-2.5 flex items-center justify-center bg-white border border-gray-200 rounded text-[10px] text-gray-500 shadow-sm">
                {{ pay }}
              </div>
            </div>
          </div>

          <div>
            <h4 class="text-sm font-bold text-gray-800 dark:text-gray-100 uppercase tracking-wide mb-4">Pengiriman</h4>
            <div class="flex flex-wrap gap-2">
              <div v-for="ship in shippings" :key="ship"
                class="h-7 px-2.5 flex items-center justify-center bg-white border border-gray-200 rounded text-[10px] text-gray-500 shadow-sm">
                {{ ship }}
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
                    <component :is="social.icon" :size="14" fill="currentColor"
                      v-if="social.name !== 'Kampus TrendStore'" />
                    <component :is="social.icon" :size="14" v-else />
                  </div>
                  {{ social.name }}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-bold text-gray-800 dark:text-gray-100 uppercase tracking-wide mb-4">Keamanan</h4>
            <div
              class="h-12 w-24 bg-gray-100 border border-gray-200 flex items-center justify-center rounded text-[10px] text-gray-500 font-bold p-1 text-center">
              TÜV Rheinland Certified
            </div>
          </div>
        </div>

        <!-- Column 5: App Download -->
        <div class="col-span-2 md:col-span-2 lg:col-span-1 space-y-4">
          <h4 class="text-sm font-bold text-gray-800 dark:text-gray-100 uppercase tracking-wide">Download Aplikasi</h4>
          <div class="flex items-start gap-4 md:gap-3">
            <div
              class="w-20 h-20 md:w-[88px] md:h-[88px] shrink-0 bg-white border border-gray-200 p-1 rounded shadow-sm flex items-center justify-center">
              <div
                class="w-full h-full bg-gray-200 grid place-items-center text-[10px] text-gray-500 text-center leading-tight">
                QR<br>Code
              </div>
            </div>

            <div class="flex flex-col gap-2 flex-1 max-w-[120px]">
              <div
                class="h-[26px] md:h-7 px-3 bg-white border border-gray-200 flex items-center justify-center rounded text-[10px] md:text-xs text-gray-600 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors w-full">
                App Store
              </div>
              <div
                class="h-[26px] md:h-7 px-3 bg-white border border-gray-200 flex items-center justify-center rounded text-[10px] md:text-xs text-gray-600 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors w-full">
                Google Play
              </div>
              <div
                class="h-[26px] md:h-7 px-3 bg-white border border-gray-200 flex items-center justify-center rounded text-[10px] md:text-xs text-gray-600 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors w-full">
                AppGallery
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
          <!-- Menggunakan padding dan border-r agar rapi saat turun baris di mobile -->
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