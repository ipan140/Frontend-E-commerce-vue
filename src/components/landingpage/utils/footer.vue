<script setup lang="ts">
import { 
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  ShoppingBag,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Store
} from 'lucide-vue-next'

const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'Latest Arrivals', href: '#' },
      { name: 'Best Sellers', href: '#' },
      { name: 'Flash Sales', href: '#' },
      { name: 'Gift Cards', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press & Media', href: '#' },
      { name: 'Sustainability', href: '#' }
    ]
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', href: '#' },
      { name: 'Track Order', href: '#' },
      { name: 'Returns & Refunds', href: '#' },
      { name: 'Contact Us', href: '#' }
    ]
  }
]

const socials = [
  { icon: Facebook, href: '#', name: 'Facebook' },
  { icon: Instagram, href: '#', name: 'Instagram' },
  { icon: Twitter, href: '#', name: 'Twitter' },
  { icon: Linkedin, href: '#', name: 'Linkedin' },
  { icon: Youtube, href: '#', name: 'Youtube' }
]
</script>

<template>
  <footer class="bg-white dark:bg-gray-900 pt-20 pb-10 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
    <div class="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        
        <!-- Column 1: Brand & About -->
        <div class="space-y-8">
          <div class="flex items-center gap-3 active:scale-95 transition-transform cursor-pointer">
            <div class="h-10 w-10 flex items-center justify-center rounded-xl bg-brand-500 text-white shadow-lg shadow-brand-500/20">
              <Store :size="20" />
            </div>
            <span class="text-2xl font-black tracking-tight text-gray-900 dark:text-white uppercase italic">TrendStore</span>
          </div>
          <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
            Elevate your shopping experience with curated premium collections and seamless marketplace solutions. Join the future of digital retail today.
          </p>
          <div class="flex items-center gap-3">
            <a 
              v-for="social in socials" 
              :key="social.name" 
              :href="social.href"
              class="h-10 w-10 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-gray-800 text-gray-400 hover:text-brand-500 dark:hover:text-white transition-all hover:scale-110 shadow-theme-xs"
            >
              <component :is="social.icon" :size="18" />
            </a>
          </div>
        </div>

        <!-- Columns 2-4: Links -->
        <div v-for="column in footerLinks" :key="column.title" class="space-y-8">
          <h4 class="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white">{{ column.title }}</h4>
          <ul class="space-y-4">
            <li v-for="link in column.links" :key="link.name">
              <a 
                :href="link.href" 
                class="text-gray-500 dark:text-gray-400 text-sm font-bold hover:text-brand-500 dark:hover:text-white transition-colors flex items-center group"
              >
                {{ link.name }}
                <ArrowRight :size="14" class="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar: Newsletter & Copyright -->
      <div class="pt-10 border-t border-gray-100 dark:border-gray-800">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
          <!-- Contact Info -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4">
            <div class="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400">
              <Mail :size="14" class="text-brand-500" />
              hello@trendstore.com
            </div>
            <div class="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400">
              <Phone :size="14" class="text-brand-500" />
              +62 21 555 1234
            </div>
            <div class="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400">
              <MapPin :size="14" class="text-brand-500" />
              Jakarta, Indonesia
            </div>
          </div>

          <!-- Copyright & Secondary Links -->
          <div class="flex flex-col items-center lg:items-end gap-3">
            <div class="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-2">
              <a v-for="item in ['Privacy Policy', 'Terms of Service', 'Cookie Policy']" :key="item" href="#" class="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                {{ item }}
              </a>
            </div>
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              © 2024 TrendStore Marketplace. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  font-family: var(--font-outfit), sans-serif;
}

/* Custom color overrides since we avoid @apply for brand colors */
.text-brand-500 {
  color: var(--color-brand-500);
}
</style>

<style scoped>
footer {
  line-height: normal;
}
</style>
