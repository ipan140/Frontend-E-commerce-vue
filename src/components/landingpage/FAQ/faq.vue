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
    Wallet
} from 'lucide-vue-next'

// --- DATA KATEGORI ---
const categories = ref([
    { id: 1, name: 'Belanja di Shopee', icon: ShoppingBag, color: 'text-red-500' },
    { id: 2, name: 'Penawaran & Hadiah', icon: Gift, color: 'text-red-500' },
    { id: 3, name: 'Pembayaran', icon: CreditCard, color: 'text-yellow-500' },
    { id: 4, name: 'Pesanan & Pengiriman', icon: Truck, color: 'text-teal-500' },
    { id: 5, name: 'Pengembalian Barang & Dana', icon: RefreshCcw, color: 'text-red-500' },
    { id: 6, name: 'Informasi Umum', icon: Info, color: 'text-blue-500' },
    { id: 7, name: 'Kebijakan', icon: FileText, color: 'text-red-400' },
    { id: 8, name: 'ShopeeFood', icon: Utensils, color: 'text-red-500' },
    { id: 9, name: 'ShopeePay', icon: Wallet, color: 'text-red-500' },
])

// --- DATA FAQ ---
const faqs = ref([
    "[Pelacakan Pesanan] Bagaimana cara menghubungi jasa kirim yang didukung Shopee untuk melacak pesanan?",
    "[Pengembalian Barang/Dana] Mengapa status pengajuan pengembalian barang/dana saya masih Dalam Tinjauan Shopee?",
    "[SPX Express] Bagaimana cara menghubungi Customer Service SPX Express?",
    "[Mitra Pengemudi] Bagaimana cara membatalkan pesanan ShopeeFood melalui aplikasi Mitra Pengemudi?",
    "[Pengembalian Pengiriman] Apakah ongkos kirim untuk pengembalian produk saya ditanggung oleh Shopee?",
    "[ShopeePay] Bagaimana cara saya menghubungi Layanan Pengaduan Konsumen?",
    "[Keamanan Akun] Bagaimana cara menjaga keamanan akun Shopee saya?",
    "[Pembeli ShopeeFood] Bagaimana cara membatalkan pesanan ShopeeFood?",
    "[Akun Saya] Bagaimana cara mengubah/memperbarui nomor telepon saya?",
    "[Pengembalian Pengiriman] Bagaimana cara mengemas paket untuk dikembalikan ke Penjual?"
])

const isBannerVisible = ref(true)
</script>

<template>
    <div class="min-h-screen bg-white font-sans text-gray-800 pb-20">

        <header class="bg-white border-b border-gray-200">
            <div class="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <div class="flex items-center text-[#ee4d2d]">
                        <ShoppingBag :size="28" stroke-width="2.5" />
                        <span class="ml-2 text-2xl font-bold tracking-tight">Shopee</span>
                    </div>
                    <span class="text-gray-300 mx-2 text-2xl">|</span>
                    <span class="text-[17px] text-gray-800 font-medium">Pusat Bantuan</span>
                </div>
                <div class="text-sm hover:text-[#ee4d2d] cursor-pointer">
                    Kebijakan
                </div>
            </div>
        </header>

        <section class="bg-[#ee4d2d] py-10 px-4">
            <div class="max-w-[800px] mx-auto text-center">
                <h1 class="text-white text-3xl md:text-[32px] font-medium mb-6">
                    Hai, ada yang bisa kami bantu?
                </h1>
                <div class="flex items-center bg-white rounded shadow-sm overflow-hidden h-12 max-w-[700px] mx-auto">
                    <input type="text" placeholder="Mencari..."
                        class="flex-1 px-4 h-full outline-none text-sm text-gray-700">
                    <button
                        class="bg-[#ee4d2d] hover:bg-[#d74326] transition-colors border-l border-white/20 h-full px-6 flex items-center justify-center text-white">
                        <Search :size="20" />
                    </button>
                </div>
            </div>
        </section>

        <main class="max-w-[1000px] mx-auto px-4 mt-6">

            <div v-if="isBannerVisible"
                class="bg-[#fffcf5] border border-[#f5e0b0] rounded-sm p-3 mb-8 flex items-start justify-between relative">
                <p class="text-[13px] text-gray-700 leading-relaxed pr-6">
                    Pastikan semua fitur keamanan sudah terverifikasi untuk melindungi akunmu dari penipuan. Segera
                    perbarui nomor handphone, email, & password-mu pada halaman 'Profil' ya.
                </p>
                <button @click="isBannerVisible = false" class="text-gray-400 hover:text-gray-600 flex-shrink-0">
                    <X :size="16" />
                </button>
            </div>

            <section class="mb-12">
                <h2 class="text-xl font-medium mb-5 text-gray-800">Kategori</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div v-for="category in categories" :key="category.id"
                        class="border border-gray-200 rounded-sm p-4 flex items-center gap-4 hover:shadow-md hover:-translate-y-[1px] transition-all cursor-pointer bg-white">
                        <div
                            class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 shrink-0">
                            <component :is="category.icon" :size="20" :class="category.color" />
                        </div>
                        <span class="text-sm text-gray-700 font-medium leading-snug">{{ category.name }}</span>
                    </div>
                </div>
            </section>

            <section>
                <h2 class="text-xl font-medium mb-2 text-gray-800">FAQ</h2>
                <div class="flex flex-col">
                    <a v-for="(faq, index) in faqs" :key="index" href="#"
                        class="py-4 text-[14px] text-gray-700 hover:text-[#ee4d2d] border-b border-dashed border-gray-300 transition-colors">
                        {{ faq }}
                    </a>
                </div>
            </section>

        </main>
    </div>
</template>

<style scoped>

input::placeholder {
    color: #9ca3af;
}
</style>