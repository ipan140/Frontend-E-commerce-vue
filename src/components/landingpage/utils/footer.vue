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
  <footer class="bg-white dark:bg-gray-900 pt-12 pb-10 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 font-sans">
    <div class="max-w-[1200px] mx-auto px-4 md:px-8">
      
      <!-- 5-Column Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
        
        <!-- Column 1 & 2: Text Links -->
        <div v-for="column in footerLinks" :key="column.title" class="space-y-4">
          <h4 class="text-sm font-bold text-gray-800 dark:text-gray-100">{{ column.title }}</h4>
          <ul class="space-y-2.5">
            <li v-for="link in column.links" :key="link.name">
              <a 
                :href="link.href" 
                class="text-gray-500 dark:text-gray-400 text-[13px] hover:text-brand-500 dark:hover:text-white transition-colors"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Payment & Logistics -->
        <div class="space-y-6">
          <div>
            <h4 class="text-sm font-bold text-gray-800 dark:text-gray-100 mb-4">Pembayaran</h4>
            <div class="flex flex-wrap gap-2">
              <!-- Placeholder for Payment Logos -->
              <div 
                v-for="pay in payments" 
                :key="pay"
                class="h-7 px-2 flex items-center justify-center bg-white border border-gray-200 rounded text-[10px] text-gray-500 shadow-sm"
              >
                {{ pay }}
              </div>
            </div>
          </div>
          
          <div>
            <h4 class="text-sm font-bold text-gray-800 dark:text-gray-100 mb-4">Pengiriman</h4>
            <div class="flex flex-wrap gap-2">
              <!-- Placeholder for Shipping Logos -->
              <div 
                v-for="ship in shippings" 
                :key="ship"
                class="h-7 px-2 flex items-center justify-center bg-white border border-gray-200 rounded text-[10px] text-gray-500 shadow-sm"
              >
                {{ ship }}
              </div>
            </div>
          </div>
        </div>

        <!-- Column 4: Socials & Security -->
        <div class="space-y-6">
          <div>
            <h4 class="text-sm font-bold text-gray-800 dark:text-gray-100 mb-4">Ikuti Kami</h4>
            <ul class="space-y-3">
              <li v-for="social in socials" :key="social.name">
                <a :href="social.href" class="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-brand-500 dark:hover:text-white transition-colors text-[13px]">
                  <div class="h-6 w-6 flex items-center justify-center rounded-full bg-gray-600 text-white dark:bg-white/10 dark:text-gray-300">
                    <component :is="social.icon" :size="12" fill="currentColor" v-if="social.name !== 'Kampus TrendStore'"/>
                    <component :is="social.icon" :size="12" v-else/>
                  </div>
                  {{ social.name }}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-sm font-bold text-gray-800 dark:text-gray-100 mb-4">Keamanan</h4>
            <!-- Placeholder for TUV Rheinland Logo -->
            <div class="h-12 w-24 bg-gray-100 border border-gray-200 flex items-center justify-center rounded text-[10px] text-gray-500 font-bold p-1 text-center">
              TÜV Rheinland Certified
            </div>
          </div>
        </div>

        <!-- Column 5: App Download -->
        <div class="space-y-4">
          <h4 class="text-sm font-bold text-gray-800 dark:text-gray-100">Download Aplikasi TrendStore</h4>
          <div class="flex items-start gap-3">
            <!-- QR Code Placeholder -->
            <div class="w-[88px] h-[88px] bg-white border border-gray-200 p-1 rounded shadow-sm flex items-center justify-center">
              <div class="w-full h-full bg-gray-200 grid place-items-center text-[10px] text-gray-500 text-center">QR Code</div>
            </div>
            
            <!-- App Store Buttons Placeholders -->
            <div class="flex flex-col gap-2">
              <div class="h-7 px-3 bg-white border border-gray-200 flex items-center justify-center rounded text-[10px] text-gray-600 shadow-sm w-24">
                App Store
              </div>
              <div class="h-7 px-3 bg-white border border-gray-200 flex items-center justify-center rounded text-[10px] text-gray-600 shadow-sm w-24">
                Google Play
              </div>
              <div class="h-7 px-3 bg-white border border-gray-200 flex items-center justify-center rounded text-[10px] text-gray-600 shadow-sm w-24">
                AppGallery
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Divider -->
      <div class="pt-6 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center text-[13px] text-gray-500">
        <p>© 2026 TrendStore. Hak Cipta Dilindungi.</p>
        <div class="flex gap-4">
          <span>Negara:</span>
          <div class="flex gap-2">
            <a href="#" class="hover:underline">Singapura</a>
            <span class="border-l border-gray-300"></span>
            <a href="#" class="hover:underline">Indonesia</a>
            <span class="border-l border-gray-300"></span>
            <a href="#" class="hover:underline">Taiwan</a>
            <span class="border-l border-gray-300"></span>
            <a href="#" class="hover:underline">Thailand</a>
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