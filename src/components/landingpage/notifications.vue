<script setup lang="ts">
import { ref } from 'vue'
import {
    User,
    Package,
    Bell,
    Ticket,
    Coins,
    Check,
    Store,
    PackageCheck,
    Truck
} from 'lucide-vue-next'
import Nav from './utils/nav.vue'
import Footer from './utils/footer.vue'

// Dummy Data Notifikasi Lengkap
const notifications = ref([
    {
        id: 1,
        title: 'Pesanan Tiba di Tujuan',
        desc: 'Nilai pesanan dan dapatkan hingga 125 koin.',
        date: '02-04-2026 09:00',
        icon: PackageCheck,
        iconColor: 'text-success-500',
        iconBg: 'bg-success-50 dark:bg-success-500/10',
        image: 'https://images.unsplash.com/photo-1527864550417-7df91fc52c4a?auto=format&fit=crop&q=80&w=100',
        unread: true
    },
    {
        id: 2,
        title: 'Pesananmu akan diantar hari ini',
        desc: 'Siap-siap untuk terima pesanan 260329E5UBMQ1V di alamat tujuan.',
        date: '02-04-2026 06:05',
        icon: Truck,
        iconColor: 'text-blue-500',
        iconBg: 'bg-blue-50 dark:bg-blue-500/10',
        image: 'https://images.unsplash.com/photo-1527864550417-7df91fc52c4a?auto=format&fit=crop&q=80&w=100',
        unread: true
    },
    {
        id: 3,
        title: 'Flash Sale: Quantum Watch Pro!',
        desc: 'Jangan lewatkan! Edisi Titanium diskon 40% OFF. Beli sekarang sebelum kehabisan.',
        date: '01-04-2026 14:00',
        icon: Store,
        iconColor: 'text-brand-500',
        iconBg: 'bg-brand-50 dark:bg-brand-500/10',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=100',
        unread: false
    },
    {
        id: 4,
        title: 'Pesanan 260329E5UBMQ1W telah tiba',
        desc: 'Mohon konfirmasi terima pesanan dalam 2x24 jam sebelum dana ditransfer ke Penjual.',
        date: '01-04-2026 12:00',
        icon: Package,
        iconColor: 'text-gray-500',
        iconBg: 'bg-gray-100 dark:bg-gray-800',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=100',
        unread: false
    },
    {
        id: 5,
        title: 'Voucher Ini Jadi Milikmu!',
        desc: 'Pembelian Aksesoris Sepeda Motor lebih HEMAT pakai Voucher Diskon, Kak! Checkout sekarang.',
        date: '31-03-2026 10:15',
        icon: Ticket,
        iconColor: 'text-warning-500',
        iconBg: 'bg-warning-50 dark:bg-warning-500/10',
        image: null,
        unread: false
    }
])

const markAllAsRead = () => {
    notifications.value.forEach(n => n.unread = false)
}
</script>

<template>
    <div
        class="min-h-screen bg-gray-50 dark:bg-gray-dark font-outfit text-gray-900 dark:text-white transition-colors duration-300">
        <Nav />

        <main class="max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
            <div class="flex flex-col md:flex-row gap-8">

                <aside class="w-full md:w-64 flex-shrink-0 space-y-6">
                    <div class="flex items-center gap-4 px-2">
                        <div
                            class="h-12 w-12 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                            V
                        </div>
                        <div>
                            <h3 class="font-black text-gray-900 dark:text-white">Visitor844</h3>
                            <button
                                class="text-xs text-gray-500 dark:text-gray-400 font-medium hover:text-brand-500 transition-colors flex items-center gap-1 mt-0.5">
                                <User :size="12" /> Ubah Profil
                            </button>
                        </div>
                    </div>

                    <nav class="space-y-1">
                        <a href="#"
                            class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <User :size="18" class="text-blue-500" /> Akun Saya
                        </a>
                        <a href="#"
                            class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <Package :size="18" class="text-indigo-500" /> Pesanan Saya
                        </a>

                        <div class="space-y-1">
                            <div
                                class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-brand-500 bg-brand-50 dark:bg-brand-500/10 transition-colors">
                                <Bell :size="18" class="text-brand-500" /> Notifikasi
                            </div>
                            <div class="pl-10 space-y-2 py-2">
                                <a href="#" class="block text-sm font-bold text-brand-500">Status Pesanan</a>
                                <a href="#"
                                    class="block text-sm font-medium text-gray-500 hover:text-brand-500 transition-colors">Promo
                                    TrendStore</a>
                                <a href="#"
                                    class="block text-sm font-medium text-gray-500 hover:text-brand-500 transition-colors">Info
                                    TrendStore</a>
                            </div>
                        </div>

                        <a href="#"
                            class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <Ticket :size="18" class="text-warning-500" /> Voucher Saya
                        </a>
                        <a href="#"
                            class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <Coins :size="18" class="text-yellow-500" /> Koin TrendStore
                        </a>
                    </nav>
                </aside>

                <div class="flex-1">
                    <div
                        class="bg-white dark:bg-gray-900 rounded-[24px] shadow-theme-md border border-gray-100 dark:border-gray-800 overflow-hidden">

                        <div
                            class="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20">
                            <h2 class="font-black text-lg text-gray-900 dark:text-white">Status Pesanan</h2>
                            <button @click="markAllAsRead"
                                class="text-sm font-bold text-gray-500 hover:text-brand-500 transition-colors flex items-center gap-1">
                                <Check :size="16" /> Tandai semua sudah dibaca
                            </button>
                        </div>

                        <div class="divide-y divide-gray-100 dark:divide-gray-800">
                            <div v-for="notif in notifications" :key="notif.id"
                                :class="['p-6 flex flex-col sm:flex-row gap-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer', notif.unread ? 'bg-brand-50/20 dark:bg-brand-500/5' : '']">
                                <div class="flex-shrink-0 relative">
                                    <div v-if="notif.image"
                                        class="h-16 w-16 md:h-20 md:w-20 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                                        <img :src="notif.image" class="h-full w-full object-cover" alt="notif">
                                    </div>
                                    <div v-else
                                        :class="['h-16 w-16 md:h-20 md:w-20 rounded-xl flex items-center justify-center', notif.iconBg, notif.iconColor]">
                                        <component :is="notif.icon" :size="32" />
                                    </div>
                                    <div v-if="notif.unread"
                                        class="absolute -top-1.5 -right-1.5 h-4 w-4 bg-brand-500 border-2 border-white dark:border-gray-900 rounded-full">
                                    </div>
                                </div>

                                <div class="flex-1 min-w-0 flex flex-col justify-center">
                                    <h4
                                        :class="['text-base md:text-lg mb-1', notif.unread ? 'font-black text-gray-900 dark:text-white' : 'font-bold text-gray-700 dark:text-gray-300']">
                                        {{ notif.title }}
                                    </h4>
                                    <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-2">
                                        {{ notif.desc }}
                                    </p>
                                    <span class="text-xs font-bold text-gray-400">{{ notif.date }}</span>
                                </div>

                                <div class="flex-shrink-0 flex sm:items-center mt-2 sm:mt-0">
                                    <button
                                        class="px-4 py-2 text-xs font-bold text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-brand-500 hover:text-brand-500 transition-colors w-full sm:w-auto">
                                        Tampilkan Rincian
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </main>

        <Footer class="mt-12" />
    </div>
</template>