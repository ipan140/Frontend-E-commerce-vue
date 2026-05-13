<script setup lang="ts">
import { ref } from 'vue'
import {
    Menu,
    Filter,
    ChevronRight,
    ChevronLeft,
    ChevronDown,
    Star,
    PlayCircle,
    ShoppingCart
} from 'lucide-vue-next'
import Nav from '../utils/nav.vue'
import Footer from '../utils/footer.vue'

// --- DUMMY DATA UNTUK BRANDS ---
const brands = ref([
    { id: 1, name: 'Torch', logo: 'TORCH' },
    { id: 2, name: 'Bostanten', logo: 'BOSTANTEN' },
    { id: 3, name: 'Tumi', logo: 'TUMI' },
    { id: 4, name: 'Navy Club', logo: 'NAVY CLUB' },
    { id: 5, name: 'American Tourister', logo: 'TOURISTER' },
    { id: 6, name: 'Kaka', logo: 'KAKA' },
    { id: 7, name: 'Eiger', logo: 'EIGER' },
    { id: 8, name: 'Osgood', logo: 'OSGOOD' },
    { id: 9, name: 'Travelogue', logo: 'TRAVELOGUE' },
    { id: 10, name: 'Kalibre', logo: 'KALIBRE' },
    { id: 11, name: 'Bodypack', logo: 'BODYPACK' },
    { id: 12, name: 'Adidas', logo: 'ADIDAS' },
])

const activeCategory = ref('Tas Selempang & Bahu Pria')
const categories = [
    'Tas Selempang & Bahu Pria',
    'Dompet',
    'Ransel Pria',
    'Tas Pinggang Pria',
    'Tas Laptop',
    'Lainnya'
]

const locations = ['Jabodetabek', 'Jawa Timur', 'DI Yogyakarta', 'Sulawesi Selatan', 'Lainnya']
const sellerTypes = ['Dikelola TrendStore', 'Mall', 'Star+', 'Star']
const paymentMethods = ['COD (Bayar di Tempat)', 'Cicilan']

// --- DUMMY DATA UNTUK PRODUK ---
const products = ref(Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    title: i % 2 === 0
        ? 'Dompet Pria POLO - Dompet Kulit Asli Original Premium Termurah'
        : 'Tas Selempang Pria Tas Kanvas Anti Air Slingbag Casual',
    image: `https://picsum.photos/seed/${i + 200}/400/400`,
    price: '12.500',
    originalPrice: '45.000',
    discount: Math.floor(Math.random() * 50) + 30 + '% OFF',
    sold: '10K',
    isStarPlus: i % 3 === 0,
    isMall: i % 4 === 0,
    hasVideo: i % 5 === 0,
    promoLabel: i % 2 === 0 ? 'Grosir' : 'Cashback XTRA'
})))

const activeSort = ref('Populer')
const sorts = ['Populer', 'Terbaru', 'Terlaris']
</script>

<template>
    <div
        class="min-h-screen bg-gray-50 dark:bg-gray-dark font-outfit text-gray-900 dark:text-white transition-colors duration-300">
        <Nav />

        <main class="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-8">

            <!-- TOP BANNER: TRENDSTORE MALL BRANDS -->
            <section
                class="bg-white dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-2xl md:rounded-[32px] overflow-hidden shadow-theme-xl">
                <div class="flex justify-between items-center p-5 md:p-6 border-b border-gray-100 dark:border-gray-800">
                    <h2 class="text-xl md:text-2xl font-black uppercase tracking-tight italic flex items-center gap-2">
                        TrendStore <span class="text-brand-500">Mall</span>
                    </h2>
                    <a href="#"
                        class="text-sm font-bold text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 flex items-center transition-colors">
                        Lihat Semua
                        <ChevronRight :size="18" class="ml-1" />
                    </a>
                </div>
                <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-gray-100 dark:bg-gray-800">
                    <a v-for="brand in brands" :key="brand.id" href="#"
                        class="bg-white dark:bg-gray-900 h-24 md:h-28 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors group">
                        <span
                            class="font-black text-gray-400 dark:text-gray-500 group-hover:text-brand-500 transition-colors text-xs md:text-sm tracking-[0.2em] uppercase">
                            {{ brand.logo }}
                        </span>
                    </a>
                </div>
            </section>

            <div class="flex flex-col lg:flex-row gap-6 md:gap-8">

                <!-- SIDEBAR -->
                <aside class="w-full lg:w-[260px] shrink-0 space-y-6">

                    <!-- Kategori -->
                    <div
                        class="bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-gray-800 rounded-2xl p-5 md:p-6 shadow-theme-sm">
                        <h3
                            class="text-sm font-black uppercase tracking-widest mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                            <Menu :size="18" class="text-brand-500" /> Semua Kategori
                        </h3>
                        <div class="space-y-1">
                            <a v-for="cat in categories" :key="cat" href="#"
                                :class="['block px-3 py-2 rounded-xl text-sm font-medium transition-all relative overflow-hidden',
                                    activeCategory === cat ? 'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400 font-bold' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white']">
                                {{ cat }}
                            </a>
                        </div>
                    </div>

                    <!-- Filter -->
                    <div
                        class="bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-gray-800 rounded-2xl p-5 md:p-6 shadow-theme-sm">
                        <h3
                            class="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-2 text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-4">
                            <Filter :size="18" class="text-brand-500" /> Filter
                        </h3>

                        <!-- Lokasi -->
                        <div class="mb-6">
                            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Lokasi</h4>
                            <div class="space-y-2.5">
                                <label v-for="loc in locations" :key="loc"
                                    class="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox"
                                        class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-brand-500 focus:ring-brand-500/20 dark:bg-gray-800 transition-colors cursor-pointer">
                                    <span
                                        class="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-brand-500 transition-colors">{{
                                        loc }}</span>
                                </label>
                            </div>
                        </div>

                        <!-- Tipe Penjual -->
                        <div class="mb-6">
                            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Tipe Penjual</h4>
                            <div class="space-y-2.5">
                                <label v-for="type in sellerTypes" :key="type"
                                    class="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox"
                                        class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-brand-500 focus:ring-brand-500/20 dark:bg-gray-800 transition-colors cursor-pointer">
                                    <span
                                        class="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-brand-500 transition-colors">{{
                                        type }}</span>
                                </label>
                            </div>
                        </div>

                        <!-- Batas Harga -->
                        <div class="mb-6">
                            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Batas Harga</h4>
                            <div class="flex items-center gap-2 mb-3">
                                <input type="text" placeholder="MIN"
                                    class="w-full h-10 px-3 text-sm font-bold border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800/50 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all dark:text-white placeholder-gray-400">
                                <span class="text-gray-400">-</span>
                                <input type="text" placeholder="MAKS"
                                    class="w-full h-10 px-3 text-sm font-bold border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800/50 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all dark:text-white placeholder-gray-400">
                            </div>
                            <button
                                class="w-full bg-brand-500 text-white text-xs font-black py-3 rounded-xl hover:bg-brand-600 active:scale-95 transition-all uppercase tracking-widest shadow-lg shadow-brand-500/20">
                                Terapkan
                            </button>
                        </div>

                        <!-- Penilaian -->
                        <div class="mb-6">
                            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Penilaian</h4>
                            <div class="space-y-1">
                                <button v-for="stars in 4" :key="stars"
                                    class="flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-white/5 p-2 w-full rounded-xl transition-colors">
                                    <div class="flex gap-0.5">
                                        <Star v-for="i in 5" :key="i" :size="14"
                                            :class="i <= (5 - stars + 1) ? 'text-warning-500 fill-warning-500' : 'text-gray-200 dark:text-gray-700 fill-current'" />
                                    </div>
                                    <span class="text-xs font-bold text-gray-500" v-if="stars > 1">ke atas</span>
                                </button>
                            </div>
                        </div>

                        <button
                            class="w-full bg-transparent border-2 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 text-xs font-black py-2.5 rounded-xl hover:border-brand-500 hover:text-brand-500 transition-all uppercase tracking-widest active:scale-95">
                            Hapus Semua
                        </button>

                    </div>
                </aside>

                <!-- MAIN CONTENT (PRODUCT GRID) -->
                <main class="flex-1 space-y-6">

                    <!-- Sort & Filter Header -->
                    <div
                        class="bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-gray-800 p-2 md:p-3 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-theme-sm">
                        <div class="flex flex-wrap items-center gap-2 w-full md:w-auto">
                            <span
                                class="text-xs font-bold text-gray-400 uppercase tracking-widest mr-2 hidden sm:block">Urutkan:</span>
                            <button v-for="sort in sorts" :key="sort"
                                :class="['px-5 py-2.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all',
                                    activeSort === sort ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20' : 'bg-transparent text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5']"
                                @click="activeSort = sort">
                                {{ sort }}
                            </button>

                            <div class="relative group">
                                <button
                                    class="bg-transparent text-gray-500 px-5 py-2.5 text-xs font-black uppercase tracking-widest rounded-xl flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-all border border-gray-200 dark:border-gray-700">
                                    Harga
                                    <ChevronDown :size="16" />
                                </button>
                            </div>
                        </div>

                        <!-- Pagination Info -->
                        <div class="flex items-center gap-4 pr-2">
                            <div class="text-xs font-bold text-gray-400 tracking-widest">
                                <span class="text-brand-500">1</span> / 9
                            </div>
                            <div class="flex gap-1">
                                <button
                                    class="h-9 w-9 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-300 dark:text-gray-600 flex items-center justify-center cursor-not-allowed">
                                    <ChevronLeft :size="18" />
                                </button>
                                <button
                                    class="h-9 w-9 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:border-brand-500 hover:text-brand-500 transition-all shadow-theme-xs active:scale-95">
                                    <ChevronRight :size="18" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Grid Produk (SLEEK MODERN CARDS) -->
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">

                        <router-link v-for="product in products" :key="product.id" :to="`/product/${product.id}`"
                            class="group relative overflow-hidden rounded-[20px] md:rounded-[24px] bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-gray-800 p-2.5 md:p-3 transition-all duration-300 hover:shadow-theme-xl hover:-translate-y-1 block">

                            <!-- Gambar Produk -->
                            <div
                                class="relative aspect-square w-full bg-gray-100 dark:bg-gray-800 rounded-[14px] md:rounded-[18px] overflow-hidden mb-3 md:mb-4">
                                <img :src="product.image"
                                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    :alt="product.title">

                                <!-- Sleek Badge Diskon Pojok Kanan Atas -->
                                <div
                                    class="absolute top-2 right-2 z-10 bg-brand-500 text-white px-2 py-1 rounded-lg text-[9px] font-black tracking-widest uppercase shadow-lg">
                                    {{ product.discount }}
                                </div>

                                <!-- Overlay Decor (Video Icon) -->
                                <div class="absolute bottom-2 right-2 bg-black/40 backdrop-blur-md rounded-full p-1.5"
                                    v-if="product.hasVideo">
                                    <PlayCircle :size="14" class="text-white" />
                                </div>

                                <!-- Label Bawah Kiri Gambar (Mall / Star) -->
                                <div class="absolute bottom-2 left-2 flex flex-col items-start gap-1">
                                    <div v-if="product.isMall"
                                        class="bg-error-500 text-white text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded shadow-sm">
                                        Mall
                                    </div>
                                    <div v-if="product.isStarPlus"
                                        class="bg-brand-500 text-white text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded shadow-sm">
                                        Star+
                                    </div>
                                </div>

                                <!-- Hover Add to Cart Button -->
                                <button @click.prevent
                                    class="absolute bottom-2 right-2 h-8 w-8 md:h-9 md:w-9 rounded-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-theme-sm text-gray-700 dark:text-gray-200 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 flex items-center justify-center z-10"
                                    v-if="!product.hasVideo">
                                    <ShoppingCart :size="16" />
                                </button>
                            </div>

                            <!-- Info Produk -->
                            <div class="space-y-2">
                                <div class="min-h-[36px]">
                                    <h3
                                        class="text-xs md:text-sm font-bold text-gray-900 dark:text-white line-clamp-2 leading-snug group-hover:text-brand-500 transition-colors">
                                        {{ product.title }}
                                    </h3>
                                </div>

                                <!-- Promo Label (Sleek Style) -->
                                <div
                                    class="inline-block border border-brand-500/20 bg-brand-50 dark:bg-brand-500/10 text-brand-500 text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded">
                                    {{ product.promoLabel }}
                                </div>

                                <div class="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                    <div class="flex flex-col">
                                        <span class="text-sm md:text-base font-black text-brand-500 leading-none">Rp{{
                                            product.price }}</span>
                                        <span
                                            class="text-[9px] md:text-[10px] text-gray-400 line-through font-medium mt-0.5">Rp{{
                                            product.originalPrice }}</span>
                                    </div>
                                    <span
                                        class="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 dark:bg-white/5 px-1.5 py-0.5 rounded-md self-start sm:self-end">
                                        {{ product.sold }} Sold
                                    </span>
                                </div>
                            </div>
                        </router-link>

                    </div>

                    <!-- Load More Button -->
                    <div class="mt-10 flex justify-center pb-8">
                        <button
                            class="px-8 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 font-black text-xs md:text-sm uppercase tracking-widest hover:border-brand-500 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all active:scale-95">
                            Muat Lebih Banyak
                        </button>
                    </div>

                </main>

            </div>
        </main>

        <Footer />
    </div>
</template>

<style scoped>
/* Transisi mulus untuk checkbox */
input[type="checkbox"] {
    accent-color: theme('colors.brand.500', #3b82f6);
}
</style>