<script setup lang="ts">
import { ref } from 'vue'
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Bell,
  ShoppingCart,
  User,
  Store,
  Ticket,
  PackageCheck,
  HelpCircle,
  Home,
  ShoppingBag,
  Headphones
} from 'lucide-vue-next'
import ThemeToggler from '../../common/ThemeToggler.vue'

// Mobile Menu State
const isMobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Notification State
const isNotifOpen = ref(false)

const toggleNotif = () => {
  isNotifOpen.value = !isNotifOpen.value
}

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Products', href: '#', icon: ShoppingBag },
  { name: 'Support', href: '#', icon: Headphones }
]

// Dummy Notifications Data
const notifications = [
  {
    id: 1,
    title: 'Flash Sale: Quantum Watch Pro!',
    desc: 'Don\'t miss out! The Titanium Edition is now 40% OFF. Grab yours before the stock runs out today.',
    icon: Store,
    iconColor: 'text-brand-500',
    iconBg: 'bg-brand-50 dark:bg-brand-500/10',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=100',
    time: '2 hours ago',
    unread: true
  },
  {
    id: 2,
    title: 'Voucher Just For You!',
    desc: 'You received a $15 discount voucher for your next ecosystem purchase. Use it at checkout.',
    icon: Ticket,
    iconColor: 'text-warning-500',
    iconBg: 'bg-warning-50 dark:bg-warning-500/10',
    image: null,
    time: '5 hours ago',
    unread: true
  },
  {
    id: 3,
    title: 'Order Arrived',
    desc: 'Your order 260329E5UBMQ1V has safely arrived at the destination. Enjoy your new gear!',
    icon: PackageCheck,
    iconColor: 'text-success-500',
    iconBg: 'bg-success-50 dark:bg-success-500/10',
    image: 'https://images.unsplash.com/photo-1527864550417-7df91fc52c4a?auto=format&fit=crop&q=80&w=100',
    time: '1 day ago',
    unread: false
  }
]
</script>

<template>
  <!-- Menambahkan z-index pada header utama dan relative -->
  <header
    class="sticky top-0 z-[100] w-full bg-white border-b border-gray-200 dark:border-gray-800 dark:bg-gray-900 transition-colors duration-300">

    <!-- Wrapper Top Bar dengan bg-white dan z-[20] agar dropdown mobile terselip di bawahnya saat animasi -->
    <div class="relative z-20 bg-white dark:bg-gray-900 max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Logo & Desktop Nav -->
        <div class="flex items-center gap-6 lg:gap-10">
          <router-link to="/" class="flex items-center gap-2.5 active:scale-95 transition-transform group shrink-0">
            <div
              class="h-9 w-9 md:h-10 md:w-10 flex items-center justify-center rounded-xl bg-brand-500 text-white shadow-lg shadow-brand-500/20 group-hover:bg-brand-600 transition-colors">
              <Store :size="18" class="md:w-5 md:h-5" />
            </div>
            <!-- Menyembunyikan text logo sebagian jika layar terlalu sempit (bisa diatur) -->
            <span
              class="text-base sm:text-lg md:text-xl font-black tracking-tight text-gray-900 dark:text-white uppercase italic block truncate">
              TrendStore
            </span>
          </router-link>

          <!-- DESKTOP NAV -->
          <nav class="hidden lg:flex items-center gap-8">
            <router-link v-for="link in navLinks" :key="link.name" :to="link.href"
              class="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-brand-500 dark:text-gray-400 dark:hover:text-white transition-colors group"
              active-class="text-brand-500 dark:text-white">
              <component :is="link.icon" :size="16" class="transition-transform group-hover:scale-110" />
              <span>{{ link.name }}</span>
            </router-link>
          </nav>
        </div>

        <!-- Right Action Menu -->
        <div class="flex items-center gap-1.5 sm:gap-3 md:gap-4">

          <!-- Desktop Search -->
          <div class="hidden lg:flex relative group mr-2">
            <Search :size="16"
              class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-500 transition-colors" />
            <input type="text" placeholder="Search..."
              class="w-64 rounded-xl border border-gray-200 bg-gray-50 py-2 pl-9 pr-4 text-xs font-bold transition-all focus:border-brand-500/50 focus:bg-white focus:ring-4 focus:ring-brand-500/5 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-200 focus:outline-none" />
          </div>

          <ThemeToggler class="shrink-0" />

          <!-- Desktop Help -->
          <router-link to="/faq"
            class="hidden md:flex items-center gap-1.5 px-2 text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-white transition-colors active:scale-95 group">
            <HelpCircle :size="18" class="transition-transform group-hover:scale-110" />
          </router-link>

          <!-- Desktop Notifications -->
          <div class="relative hidden sm:block shrink-0" @mouseenter="isNotifOpen = true"
            @mouseleave="isNotifOpen = false">
            <button
              :class="['relative flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-xl border transition-all active:scale-95',
                isNotifOpen ? 'bg-gray-50 text-brand-500 border-gray-200 dark:bg-white/[0.05] dark:border-gray-700' : 'bg-white border-gray-100 text-gray-500 hover:bg-gray-50 hover:text-brand-500 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400 dark:hover:text-white shadow-theme-xs']">
              <Bell :size="18" />
              <span v-if="notifications.some(n => n.unread)"
                class="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-error-500 text-[9px] font-bold text-white ring-2 ring-white dark:ring-gray-900">
                {{notifications.filter(n => n.unread).length}}
              </span>
            </button>

            <!-- Dropdown Menu Desktop -->
            <div v-if="isNotifOpen" class="absolute right-0 pt-3 z-[1000]">
              <transition appear enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1 scale-95"
                enter-to-class="opacity-100 translate-y-0 scale-100">
                <div
                  class="w-80 md:w-96 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-theme-xl overflow-hidden origin-top-right">
                  <div
                    class="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20">
                    <h3 class="font-bold text-gray-900 dark:text-white text-sm">Recently Received</h3>
                    <button class="text-xs font-bold text-brand-500 hover:text-brand-600 transition-colors">Mark all as
                      read</button>
                  </div>
                  <div class="max-h-[60vh] overflow-y-auto divide-y divide-gray-50 dark:divide-gray-800/50">
                    <div v-for="notif in notifications" :key="notif.id"
                      :class="['p-4 flex gap-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors', notif.unread ? 'bg-brand-50/30 dark:bg-brand-500/5' : '']">
                      <div class="flex-shrink-0 relative">
                        <div v-if="notif.image"
                          class="h-10 w-10 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-700">
                          <img :src="notif.image" class="h-full w-full object-cover" alt="notif">
                        </div>
                        <div v-else
                          :class="['h-10 w-10 rounded-lg flex items-center justify-center', notif.iconBg, notif.iconColor]">
                          <component :is="notif.icon" :size="18" />
                        </div>
                        <div v-if="notif.unread"
                          class="absolute -top-1 -right-1 h-3 w-3 bg-brand-500 border-2 border-white dark:border-gray-900 rounded-full">
                        </div>
                      </div>
                      <div class="flex-1 min-w-0">
                        <h4
                          :class="['text-sm truncate mb-0.5', notif.unread ? 'font-bold text-gray-900 dark:text-white' : 'font-medium text-gray-700 dark:text-gray-300']">
                          {{ notif.title }}
                        </h4>
                        <p class="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed mb-1.5">{{
                          notif.desc }}</p>
                        <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{{ notif.time
                          }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="p-3 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
                    <router-link to="/notifications"
                      class="block text-center w-full py-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-bold uppercase tracking-widest transition-colors">
                      View All Activity
                    </router-link>
                  </div>
                </div>
              </transition>
            </div>
          </div>

          <!-- Cart Icon -->
          <router-link to="/cart"
            class="relative flex shrink-0 h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-xl border border-gray-100 bg-white shadow-theme-xs text-gray-500 transition-all hover:bg-gray-50 hover:text-brand-500 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400 dark:hover:text-white active:scale-95">
            <ShoppingCart :size="18" />
            <span
              class="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 text-[9px] font-bold text-white ring-2 ring-white dark:ring-gray-900">3</span>
          </router-link>

          <!-- User Profil (Sembunyikan text & icon di mobile sangat kecil untuk hindari overflow, mobile login ada di menu bawah) -->
          <router-link to="/signin"
            class="hidden sm:flex items-center gap-2 md:gap-3 pl-1 sm:pl-2 pr-1 py-1 rounded-xl transition-all hover:bg-gray-50 dark:hover:bg-white/[0.03] active:scale-95 group border border-transparent hover:border-gray-100 dark:hover:border-gray-800 shrink-0">
            <div class="hidden md:flex flex-col items-end leading-none">
              <span
                class="text-xs font-black uppercase text-gray-900 dark:text-white group-hover:text-brand-500 transition-colors">Sign
                In</span>
              <span class="text-[10px] font-bold text-gray-400 mt-0.5">Guest</span>
            </div>
            <div
              class="h-9 w-9 md:h-10 md:w-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-gray-800 text-gray-400 group-hover:text-brand-500 transition-all overflow-hidden">
              <User :size="18" />
            </div>
          </router-link>

          <!-- Hamburger Button -->
          <button @click="toggleMobileMenu"
            class="lg:hidden shrink-0 flex h-9 w-9 items-center justify-center rounded-xl border border-gray-100 bg-white shadow-theme-xs text-gray-500 hover:bg-gray-50 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400 active:scale-95 transition-all">
            <Menu v-if="!isMobileMenuOpen" :size="20" />
            <X v-else :size="20" />
          </button>
        </div>
      </div>
    </div>

    <!-- MOBILE MENU DROPDOWN -->
    <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 -translate-y-8"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-8">

      <!-- Ubah top-16 ke top-[100%] dan tambahkan -z-10 agar animasi slide turun dari balik layer menu -->
      <div v-if="isMobileMenuOpen"
        class="lg:hidden absolute top-[100%] left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-2xl -z-10 overflow-hidden">

        <div class="px-4 py-5 sm:px-6 space-y-6 max-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-5rem)] overflow-y-auto">
          <!-- Mobile Search -->
          <div class="relative group lg:hidden">
            <Search :size="18"
              class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-500 transition-colors" />
            <input type="text" placeholder="Search products..."
              class="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm font-bold transition-all focus:border-brand-500/50 focus:bg-white focus:ring-4 focus:ring-brand-500/5 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-200 focus:outline-none" />
          </div>

          <nav class="flex flex-col gap-1">
            <!-- 1. Main Links -->
            <router-link v-for="link in navLinks" :key="link.name" :to="link.href"
              class="flex items-center justify-between p-4 rounded-xl font-black text-gray-800 dark:text-gray-200 hover:bg-brand-50 hover:text-brand-500 dark:hover:bg-brand-500/5 transition-all text-sm uppercase tracking-widest"
              @click="isMobileMenuOpen = false">
              <div class="flex items-center gap-3">
                <component :is="link.icon" :size="18" />
                <span>{{ link.name }}</span>
              </div>
              <ChevronDown :size="16" class="-rotate-90 opacity-40" />
            </router-link>

            <!-- 2. Tombol FAQ / Bantuan (Mobile) -->
            <router-link to="/faq"
              class="md:hidden flex items-center justify-between p-4 rounded-xl font-black text-gray-800 dark:text-gray-200 hover:bg-brand-50 hover:text-brand-500 dark:hover:bg-brand-500/5 transition-all text-sm uppercase tracking-widest"
              @click="isMobileMenuOpen = false">
              <div class="flex items-center gap-3">
                <HelpCircle :size="18" />
                <span>Bantuan (FAQ)</span>
              </div>
              <ChevronDown :size="16" class="-rotate-90 opacity-40" />
            </router-link>

            <!-- 3. Tombol Notifications (Mobile) -->
            <button @click="toggleNotif"
              class="sm:hidden flex items-center justify-between p-4 rounded-xl font-black text-gray-800 dark:text-gray-200 hover:bg-brand-50 hover:text-brand-500 dark:hover:bg-brand-500/5 transition-all text-sm uppercase tracking-widest w-full text-left">
              <div class="flex items-center gap-3">
                <Bell :size="18" />
                <span>Notifications</span>
                <!-- Lencana Notifikasi Merah -->
                <span v-if="notifications.some(n => n.unread)"
                  class="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-error-500 text-[11px] font-bold text-white shadow-sm">
                  {{notifications.filter(n => n.unread).length}}
                </span>
              </div>
              <ChevronDown :size="16"
                :class="['-rotate-90 opacity-40 transition-transform', isNotifOpen ? 'rotate-0' : '']" />
            </button>

            <!-- 4. Dropdown Notifications List (Mobile) -->
            <div v-if="isNotifOpen"
              class="sm:hidden bg-gray-50 dark:bg-gray-800/30 rounded-xl overflow-hidden mt-1 mb-2">
              <div v-for="notif in notifications" :key="'mob-' + notif.id"
                class="p-3 border-b border-gray-100 dark:border-gray-800 last:border-0 flex gap-3">
                <div class="flex-shrink-0">
                  <div v-if="notif.image" class="h-8 w-8 rounded-md overflow-hidden">
                    <img :src="notif.image" class="h-full w-full object-cover">
                  </div>
                  <div v-else
                    :class="['h-8 w-8 rounded-md flex items-center justify-center', notif.iconBg, notif.iconColor]">
                    <component :is="notif.icon" :size="14" />
                  </div>
                </div>
                <div class="flex-1">
                  <h4 class="text-xs font-bold text-gray-900 dark:text-white truncate">{{ notif.title }}</h4>
                  <p class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-1 mt-0.5">{{ notif.desc }}</p>
                </div>
              </div>
              <router-link to="/notifications" @click="isMobileMenuOpen = false"
                class="block text-center w-full py-3 text-[10px] font-black uppercase tracking-widest text-brand-500 bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                View All
              </router-link>
            </div>
          </nav>

          <!-- Login CTA (Mobile) -->
          <div class="pt-6 pb-2 border-t border-gray-100 dark:border-gray-800">
            <router-link to="/signin"
              class="flex items-center justify-center w-full py-4 rounded-xl bg-brand-500 text-white font-black uppercase tracking-widest text-sm shadow-xl shadow-brand-500/20 active:scale-95 transition-transform"
              @click="isMobileMenuOpen = false">
              Sign In Now
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>