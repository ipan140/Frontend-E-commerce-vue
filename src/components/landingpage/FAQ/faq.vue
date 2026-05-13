<script setup lang="ts">
import { ref } from 'vue'
import {
    Search,
    X,
    ShoppingBag,
    Gift,
    CreditCard,
    Truck,
    RefreshCcw,
    Info,
    FileText,
    Utensils,
    Wallet,
    ChevronRight
} from 'lucide-vue-next'

// Asumsi komponen Nav dan Footer tersedia di path ini
import Nav from '../utils/nav.vue'
import Footer from '../utils/footer.vue'

// --- DATA KATEGORI (Disesuaikan dengan warna tema) ---
const categories = ref([
    { id: 1, name: 'Belanja di TrendStore', icon: ShoppingBag, color: 'brand' },
    { id: 2, name: 'Penawaran & Hadiah', icon: Gift, color: 'success' },
    { id: 3, name: 'Pembayaran', icon: CreditCard, color: 'warning' },
    { id: 4, name: 'Pesanan & Kiriman', icon: Truck, color: 'blue-light' },
    { id: 5, name: 'Pengembalian', icon: RefreshCcw, color: 'error' },
    { id: 6, name: 'Informasi Umum', icon: Info, color: 'primary' },
    { id: 7, name: 'Kebijakan', icon: FileText, color: 'secondary' },
    { id: 8, name: 'TrendStore Food', icon: Utensils, color: 'brand' },
    { id: 9, name: 'TrendStore Pay', icon: Wallet, color: 'success' },
])

// --- DATA FAQ (Shopee diubah menjadi TrendStore) ---
const faqs = ref([
    "[Pelacakan Pesanan] Bagaimana cara menghubungi jasa kirim yang didukung TrendStore untuk melacak pesanan?",
    "[Pengembalian Barang/Dana] Mengapa status pengajuan pengembalian barang/dana saya masih Dalam Tinjauan?",
    "[TrendStore Express] Bagaimana cara menghubungi Customer Service TrendStore Express?",
    "[Mitra Pengemudi] Bagaimana cara membatalkan pesanan TrendStore Food melalui aplikasi Mitra Pengemudi?",
    "[Pengembalian Pengiriman] Apakah ongkos kirim untuk pengembalian produk saya ditanggung oleh TrendStore?",
    "[TrendStore Pay] Bagaimana cara saya menghubungi Layanan Pengaduan Konsumen?",
    "[Keamanan Akun] Bagaimana cara menjaga keamanan akun TrendStore saya?",
    "[Pembeli TrendStore Food] Bagaimana cara membatalkan pesanan TrendStore Food?",
    "[Akun Saya] Bagaimana cara mengubah/memperbarui nomor telepon saya?",
    "[Pengembalian Pengiriman] Bagaimana cara mengemas paket untuk dikembalikan ke Penjual?"
])

const isBannerVisible = ref(true)
</script>

<template>
    <div
        class="min-h-screen bg-gray-50 dark:bg-gray-dark font-outfit text-gray-900 dark:text-white transition-colors duration-300">
        <Nav />

        <main class="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-10 md:space-y-16">

            <!-- HEADER & SEARCH SECTION -->
            <section
                class="relative overflow-hidden rounded-2xl md:rounded-[32px] bg-brand-500 text-white shadow-theme-xl p-8 md:p-14 flex flex-col items-center justify-center gap-6 border-b-4 md:border-b-8 border-brand-700 text-center">
                <!-- Glow Effects -->
                <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
                <div class="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl"></div>

                <div class="space-y-3 md:space-y-4 relative z-10 max-w-2xl">
                    <div
                        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 border border-white/20 text-[10px] md:text-xs font-black uppercase tracking-widest backdrop-blur-md">
                        <Info :size="14" class="fill-current text-white" />
                        Pusat Bantuan Terpadu
                    </div>
                    <h1
                        class="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none italic uppercase">
                        Hai, Ada Yang <span class="text-brand-100">Bisa Dibantu?</span>
                    </h1>
                    <p class="text-brand-50 font-medium text-xs md:text-base opacity-90 px-4 lg:px-0">
                        Temukan jawaban, panduan, dan solusi untuk pengalaman belanja yang lebih lancar.
                    </p>
                </div>

                <!-- Search Bar -->
                <div class="relative w-full max-w-2xl z-10 mt-4">
                    <Search class="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" :size="20" />
                    <input type="text" placeholder="Ketik topik bantuan yang kamu cari..."
                        class="w-full h-14 md:h-16 pl-14 pr-6 rounded-xl md:rounded-2xl bg-white text-gray-900 font-bold outline-none shadow-xl focus:ring-4 focus:ring-brand-500/20 transition-all text-sm md:text-base placeholder-gray-400" />
                </div>
            </section>

            <!-- ALERT BANNER -->
            <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 translate-y-4"
                leave-active-class="transition duration-200 ease-in" leave-to-class="opacity-0 scale-95">
                <div v-if="isBannerVisible"
                    class="bg-warning-50 dark:bg-warning-500/10 border border-warning-200 dark:border-warning-500/20 rounded-xl md:rounded-2xl p-4 md:p-5 flex items-start justify-between relative shadow-theme-sm">
                    <div class="flex items-start gap-3 md:gap-4">
                        <div
                            class="h-8 w-8 rounded-full bg-warning-100 dark:bg-warning-500/20 flex items-center justify-center shrink-0">
                            <Info class="text-warning-600 dark:text-warning-400" :size="18" />
                        </div>
                        <p
                            class="text-xs md:text-sm font-medium text-warning-800 dark:text-warning-200 leading-relaxed pr-6 md:mt-1">
                            <strong>Info Keamanan:</strong> Pastikan semua fitur keamanan sudah terverifikasi untuk
                            melindungi akunmu dari penipuan. Segera perbarui nomor handphone, email, & password-mu pada
                            halaman 'Profil'.
                        </p>
                    </div>
                    <button @click="isBannerVisible = false"
                        class="text-warning-500 hover:text-warning-700 dark:hover:text-warning-300 hover:bg-warning-100 dark:hover:bg-warning-500/20 p-1.5 rounded-lg transition-colors shrink-0">
                        <X :size="18" />
                    </button>
                </div>
            </transition>

            <!-- KATEGORI GRID -->
            <section class="space-y-6">
                <h2
                    class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-gray-900 dark:text-white">
                    Jelajahi <span class="text-brand-500">Kategori</span>
                </h2>

                <div class="grid grid-cols-2 min-[400px]:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
                    <a v-for="cat in categories" :key="cat.name" href="#"
                        class="group flex flex-col items-center gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-white/[0.03] hover:border-brand-500/30 hover:bg-white dark:hover:bg-white/5 hover:shadow-theme-md hover:-translate-y-1 transition-all">
                        <div
                            :class="['flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl md:rounded-[20px] transition-all group-hover:scale-110 shadow-theme-xs',
                                cat.color === 'brand' ? 'bg-brand-50 text-brand-500 dark:bg-brand-500/10' :
                                    cat.color === 'blue-light' ? 'bg-blue-light-50 text-blue-light-500 dark:bg-blue-light-500/10' :
                                        cat.color === 'warning' ? 'bg-warning-50 text-warning-500 dark:bg-warning-500/10' :
                                            cat.color === 'success' ? 'bg-success-50 text-success-500 dark:bg-success-500/10' :
                                                cat.color === 'error' ? 'bg-error-50 text-error-500 dark:bg-error-500/10' :
                                                    cat.color === 'primary' ? 'bg-primary-50 text-primary-500 dark:bg-primary-500/10' : 'bg-gray-50 text-gray-500 dark:bg-gray-800 dark:text-gray-400']">
                            <component :is="cat.icon" class="w-6 h-6 md:w-7 md:h-7" />
                        </div>
                        <span
                            class="text-[10px] md:text-xs font-black uppercase tracking-wider text-gray-600 dark:text-gray-300 group-hover:text-brand-500 dark:group-hover:text-brand-400 text-center leading-tight">
                            {{ cat.name }}
                        </span>
                    </a>
                </div>
            </section>

            <!-- FAQ LIST -->
            <section class="space-y-6">
                <h2
                    class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-gray-900 dark:text-white">
                    Topik <span class="text-brand-500">Populer</span>
                </h2>

                <div
                    class="bg-white dark:bg-gray-900/50 rounded-2xl md:rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-theme-xl overflow-hidden divide-y divide-gray-100 dark:divide-gray-800">
                    <a v-for="(faq, index) in faqs" :key="index" href="#"
                        class="flex items-center justify-between p-4 md:p-6 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors group">
                        <span
                            class="text-sm md:text-base font-bold text-gray-700 dark:text-gray-300 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors pr-4">
                            {{ faq }}
                        </span>
                        <div
                            class="h-8 w-8 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-brand-50 group-hover:text-brand-500 dark:group-hover:bg-brand-500/10 transition-all shrink-0 group-hover:translate-x-1">
                            <ChevronRight :size="18" />
                        </div>
                    </a>
                </div>
            </section>

        </main>

        <Footer />
    </div>
</template>