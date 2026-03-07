<script setup lang="ts">
import { ref } from 'vue'
import { 
  Menu,
  X,
  ChevronDown,
  ShoppingBag,
  Search,
  Bell,
  ShoppingCart,
  User,
  Store
} from 'lucide-vue-next'
import ThemeToggler from '../../common/ThemeToggler.vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '#' },
  { name: 'Insights', href: '#' },
  { name: 'Support', href: '#' }
]
</script>

<template>
  <header class="sticky top-0 z-99999 w-full bg-white border-b border-gray-200 dark:border-gray-800 dark:bg-gray-900 transition-colors duration-300">
    <div class="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        
        <!-- Left: Logo & Nav Links (Desktop) -->
        <div class="flex items-center gap-10">
          <div class="flex items-center">
            <router-link to="/" class="flex items-center gap-3 active:scale-95 transition-transform">
              <div class="h-10 w-10 flex items-center justify-center rounded-xl bg-brand-500 text-white shadow-lg shadow-brand-500/20">
                <Store :size="20" />
              </div>
              <span class="text-xl font-black tracking-tight text-gray-900 dark:text-white uppercase italic hidden sm:block">TrendStore</span>
            </router-link>
          </div>

          <nav class="hidden lg:flex items-center gap-8">
            <router-link 
              v-for="link in navLinks" 
              :key="link.name"
              :to="link.href"
              class="text-sm font-bold text-gray-600 hover:text-brand-500 dark:text-gray-400 dark:hover:text-white transition-colors"
              active-class="text-brand-500 dark:text-white"
            >
              {{ link.name }}
            </router-link>
          </nav>
        </div>

        <!-- Right: Actions -->
        <div class="flex items-center gap-2 md:gap-4">
          <!-- Search (Desktop) -->
          <div class="hidden md:flex relative group mr-2">
            <Search :size="18" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search..." 
              class="w-40 lg:w-64 rounded-xl border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-xs font-bold transition-all focus:border-brand-500/50 focus:bg-white focus:ring-4 focus:ring-brand-500/5 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-200"
            />
          </div>

          <ThemeToggler />

          <!-- Notification -->
          <button class="relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 bg-white shadow-theme-xs text-gray-500 transition-all hover:bg-gray-50 hover:text-brand-500 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400 dark:hover:text-white">
            <Bell :size="18" />
            <span class="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-error-500 text-[9px] font-bold text-white ring-2 ring-white dark:ring-gray-900">2</span>
          </button>

          <!-- Cart Icon -->
          <button class="relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 bg-white shadow-theme-xs text-gray-500 transition-all hover:bg-gray-50 hover:text-brand-500 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400 dark:hover:text-white">
            <ShoppingCart :size="18" />
            <span class="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 text-[9px] font-bold text-white ring-2 ring-white dark:ring-gray-900">3</span>
          </button>

          <!-- User Part (with Cart Icon instead of image) -->
          <router-link 
            to="/signin"
            class="flex items-center gap-3 pl-2 pr-1 py-1 rounded-xl transition-all hover:bg-gray-50 dark:hover:bg-white/[0.03] active:scale-95 group border border-transparent hover:border-gray-100 dark:hover:border-gray-800"
          >
            <div class="hidden sm:flex flex-col items-end leading-none">
              <span class="text-xs font-black uppercase text-gray-900 dark:text-white group-hover:text-brand-500 transition-colors">Sign In</span>
              <span class="text-[10px] font-bold text-gray-400 mt-0.5">Guest</span>
            </div>
            <div class="h-10 w-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-gray-800 text-gray-400 group-hover:text-brand-500 transition-all overflow-hidden">
               <User :size="18" />
            </div>
          </router-link>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu"
            class="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 bg-white shadow-theme-xs text-gray-500 hover:bg-gray-50 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400"
          >
            <Menu v-if="!isMobileMenuOpen" :size="20" />
            <X v-else :size="20" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isMobileMenuOpen"
        class="lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-2xl z-9999"
      >
        <div class="px-6 py-8 space-y-6">
          <nav class="flex flex-col gap-4">
            <router-link 
              v-for="link in navLinks" 
              :key="link.name"
              :to="link.href"
              class="flex items-center justify-between p-4 rounded-xl font-black text-gray-800 dark:text-gray-200 hover:bg-brand-50 hover:text-brand-500 dark:hover:bg-brand-500/5 transition-all text-sm uppercase tracking-wider"
              @click="isMobileMenuOpen = false"
            >
              {{ link.name }}
              <ChevronDown :size="16" class="-rotate-90 opacity-40" />
            </router-link>
          </nav>
          
          <div class="pt-6 border-t border-gray-100 dark:border-gray-800">
            <router-link 
              to="/signin"
              class="flex items-center justify-center w-full py-4 rounded-xl bg-brand-500 text-white font-black uppercase tracking-widest text-sm shadow-xl shadow-brand-500/20"
              @click="isMobileMenuOpen = false"
            >
              Sign In Now
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>
