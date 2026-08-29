<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
    ChevronRight,
    Star,
    Heart,
    Minus,
    Plus,
    ShoppingCart,
    MessageCircle,
    Store,
    ShieldCheck,
    Truck,
    ArrowLeft
} from 'lucide-vue-next'
import { useRouter, useRoute } from 'vue-router'
import Nav from './utils/nav.vue'
import Footer from './utils/footer.vue'
import Badge from '../ui/Badge.vue'
import { productsService, cartService } from '@/services'
import type { ImodelsProduct } from '@/types'

const router = useRouter()
const route = useRoute()

// State
const product = ref<any>({
    id: 1,
    title: 'Loading...',
    rating: 0,
    ratingsCount: 0,
    sold: 0,
    priceMin: 0,
    priceMax: 0,
    originalPrice: 0,
    discount: '',
    images: ['https://via.placeholder.com/800'],
    colors: [],
    variants: [],
    stock: 0,
    category: [],
    brand: '',
    warranty: '',
    shippingFrom: '',
    description: ''
})

const activeImage = ref(0)
const selectedColor = ref('')
const selectedVariant = ref('')
const quantity = ref(1)
const isLoading = ref(true)
const isAddingToCart = ref(false)

// Format currency
const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price)
}

// Handlers
const decreaseQty = () => { if (quantity.value > 1) quantity.value-- }
const increaseQty = () => { if (quantity.value < product.value.stock) quantity.value++ }

const addToCart = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
        alert('Silakan login terlebih dahulu untuk menambah ke keranjang')
        router.push('/signin')
        return
    }

    isAddingToCart.value = true
    try {
        await cartService.postCartAdd({
            product_id: Number(product.value.id),
            quantity: quantity.value
        })
        alert('Berhasil ditambahkan ke keranjang!')
        // Dispatch storage event in case navbar wants to update cart count
        window.dispatchEvent(new Event('cart_updated'))
    } catch (error: any) {
        console.error('Failed to add to cart:', error)
        alert('Gagal menambah ke keranjang: ' + (error.response?.data?.message || error.message))
    } finally {
        isAddingToCart.value = false
    }
}

onMounted(async () => {
    const id = route.params.id
    try {
        const data = await productsService.getProductsId(id as string) as ImodelsProduct;
        product.value = {
            id: data.id,
            title: data.name,
            rating: data.rating || 4.5,
            ratingsCount: data.review_count || 0,
            sold: data.sold_count || 0,
            priceMin: data.price,
            originalPrice: (data.price || 0) * 1.2,
            discount: '20% OFF',
            images: [data.image_url || 'https://via.placeholder.com/800'],
            colors: [], // Should come from variants API if available
            variants: [], // Should come from variants API
            stock: data.stock,
            category: [data.category?.name || 'General'],
            brand: 'TrendStore Brand',
            warranty: 'Standard Warranty',
            shippingFrom: 'Local Warehouse',
            description: data.description || 'No description available'
        }
    } catch (error) {
        console.error('Failed to load product details', error)
    } finally {
        isLoading.value = false
    }
})
</script>

<template>
    <div
        class="min-h-screen bg-gray-50 dark:bg-gray-dark font-outfit text-gray-900 dark:text-white transition-colors duration-300">
        <Nav />

        <main class="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-8">

            <nav class="flex items-center justify-between gap-4 w-full">
                <button @click="router.back()"
                    class="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-500 transition-colors group">
                    <ArrowLeft :size="18" class="group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Grid</span>
                </button>

                <div class="hidden sm:flex items-center gap-2 text-xs md:text-sm font-medium text-gray-400">
                    <template v-for="(cat, index) in product.category" :key="index">
                        <span class="hover:text-brand-500 cursor-pointer transition-colors">{{ cat }}</span>
                        <ChevronRight v-if="index < product.category.length - 1" :size="14" class="opacity-50" />
                    </template>
                </div>
            </nav>

            <div
                class="bg-white dark:bg-gray-900 rounded-[24px] md:rounded-[32px] p-4 md:p-8 lg:p-10 shadow-theme-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden">
                <div
                    class="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl pointer-events-none">
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 relative z-10">

                    <div class="lg:col-span-5 space-y-4">
                        <div
                            class="aspect-square rounded-[24px] overflow-hidden bg-gray-100 dark:bg-gray-800 relative group">
                            <img :src="product.images[activeImage]"
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                alt="Product">
                            <Badge variant="solid" color="success"
                                class="absolute top-4 left-4 !px-3 !py-1 text-[10px] font-black uppercase tracking-widest ring-2 ring-white/10 backdrop-blur-md">
                                {{ product.discount }}
                            </Badge>
                            <button
                                class="absolute top-4 right-4 h-10 w-10 rounded-xl bg-white/20 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-500 hover:border-brand-500 transition-all shadow-xl">
                                <Heart :size="20" class="fill-current" />
                            </button>
                        </div>

                        <div class="grid grid-cols-4 gap-3">
                            <button v-for="(img, idx) in product.images" :key="idx" @click="activeImage = idx"
                                :class="['aspect-square rounded-2xl overflow-hidden border-2 transition-all',
                                    activeImage === idx ? 'border-brand-500 shadow-theme-md opacity-100' : 'border-transparent opacity-60 hover:opacity-100']">
                                <img :src="img" class="w-full h-full object-cover" alt="Thumbnail">
                            </button>
                        </div>
                    </div>

                    <div class="lg:col-span-7 flex flex-col justify-center">

                        <div class="mb-6 space-y-4">
                            <div
                                class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-500/10 text-brand-500 text-[10px] font-black uppercase tracking-widest border border-brand-500/20">
                                Premium Tech
                            </div>
                            <h1
                                class="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white">
                                {{ product.title }}
                            </h1>
                        </div>

                        <div class="flex flex-wrap items-center gap-4 text-sm font-medium mb-8">
                            <div
                                class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-50 dark:bg-orange-500/10 text-orange-500">
                                <Star :size="16" class="fill-current" />
                                <span class="font-bold">{{ product.rating }}</span>
                                <span class="text-orange-500/70 text-xs">({{ product.ratingsCount }} reviews)</span>
                            </div>
                            <div class="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                            <div class="text-gray-500 dark:text-gray-400">
                                <span class="text-gray-900 dark:text-white font-bold">{{ product.sold }}</span> Units
                                Sold
                            </div>
                            <div class="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                            <div class="flex items-center gap-1.5 text-success-500">
                                <ShieldCheck :size="16" /> Verified Authentic
                            </div>
                        </div>

                        <div
                            class="flex flex-wrap items-end gap-4 mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
                            <div class="text-4xl md:text-5xl font-black text-brand-500 tracking-tight">
                                {{ formatPrice(product.priceMin) }}
                            </div>
                            <div class="text-lg md:text-xl font-medium text-gray-400 line-through mb-1">
                                {{ formatPrice(product.originalPrice) }}
                            </div>
                        </div>

                        <div class="space-y-6 flex-1">

                            <div class="space-y-3">
                                <div class="flex justify-between items-center">
                                    <span
                                        class="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Finish
                                        Color</span>
                                    <span class="text-xs font-medium text-gray-500">{{ selectedColor }}</span>
                                </div>
                                <div class="flex flex-wrap gap-3">
                                    <button v-for="color in product.colors" :key="color" @click="selectedColor = color"
                                        :class="['px-5 py-2.5 text-sm font-bold rounded-xl transition-all border-2',
                                            selectedColor === color ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10 text-brand-500 shadow-theme-xs' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 bg-transparent']">
                                        {{ color }}
                                    </button>
                                </div>
                            </div>

                            <div class="space-y-3">
                                <div class="flex justify-between items-center">
                                    <span
                                        class="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Connectivity</span>
                                </div>
                                <div class="flex flex-wrap gap-3">
                                    <button v-for="variant in product.variants" :key="variant"
                                        @click="selectedVariant = variant"
                                        :class="['px-5 py-2.5 text-sm font-bold rounded-xl transition-all border-2',
                                            selectedVariant === variant ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10 text-brand-500 shadow-theme-xs' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 bg-transparent']">
                                        {{ variant }}
                                    </button>
                                </div>
                            </div>

                            <div class="space-y-3 pt-2">
                                <span
                                    class="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Quantity</span>
                                <div class="flex items-center gap-6">
                                    <div
                                        class="flex items-center bg-gray-50 dark:bg-gray-800 rounded-xl p-1 border border-gray-200 dark:border-gray-700">
                                        <button @click="decreaseQty"
                                            class="h-10 w-10 flex items-center justify-center rounded-lg text-gray-500 hover:bg-white dark:hover:bg-gray-700 hover:shadow-sm transition-all">
                                            <Minus :size="18" />
                                        </button>
                                        <input type="text" v-model="quantity"
                                            class="w-12 text-center font-bold bg-transparent focus:outline-none"
                                            readonly>
                                        <button @click="increaseQty"
                                            class="h-10 w-10 flex items-center justify-center rounded-lg text-gray-500 hover:bg-white dark:hover:bg-gray-700 hover:shadow-sm transition-all">
                                            <Plus :size="18" />
                                        </button>
                                    </div>
                                    <div
                                        class="text-sm font-medium text-warning-500 bg-warning-50 dark:bg-warning-500/10 px-3 py-1.5 rounded-lg">
                                        Only {{ product.stock }} left in stock!
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-4 mt-10">
                            <button
                                @click="addToCart"
                                :disabled="isAddingToCart"
                                class="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border-2 border-brand-500/20 text-brand-500 font-black text-sm uppercase tracking-widest hover:bg-brand-50 dark:hover:bg-brand-500/10 hover:border-brand-500 transition-all flex-1 disabled:opacity-50 disabled:cursor-not-allowed">
                                <ShoppingCart :size="20" /> {{ isAddingToCart ? 'Adding...' : 'Add to Cart' }}
                            </button>
                            <button
                                class="flex items-center justify-center px-8 py-4 rounded-2xl bg-brand-500 text-white font-black text-sm uppercase tracking-widest hover:bg-brand-600 shadow-xl shadow-brand-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex-1">
                                Checkout Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div class="lg:col-span-1 space-y-8">
                    <div
                        class="bg-white dark:bg-gray-900 rounded-[24px] p-6 shadow-theme-md border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center gap-4">
                        <div
                            class="w-20 h-20 rounded-[20px] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-0.5 shadow-inner">
                            <img src="https://ui-avatars.com/api/?name=Quantum+Official&background=0D1117&color=fff"
                                class="w-full h-full rounded-[18px] object-cover" alt="Store">
                        </div>
                        <div>
                            <h3
                                class="font-black text-lg text-gray-900 dark:text-white flex items-center justify-center gap-1">
                                Quantum Official
                                <ShieldCheck :size="16" class="text-brand-500" />
                            </h3>
                            <p class="text-sm font-medium text-gray-500 mt-1">100% Authentic Products</p>
                        </div>
                        <div class="flex gap-2 w-full mt-2">
                            <button
                                class="flex-1 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 font-bold text-xs uppercase tracking-wider text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">Visit
                                Store</button>
                            <button
                                class="flex-1 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-xs uppercase tracking-wider hover:bg-gray-800 dark:hover:bg-gray-100 transition-all flex justify-center items-center gap-2">
                                <MessageCircle :size="14" /> Chat
                            </button>
                        </div>
                    </div>

                    <div
                        class="bg-white dark:bg-gray-900 rounded-[24px] p-6 shadow-theme-md border border-gray-100 dark:border-gray-800 space-y-4">
                        <h3
                            class="font-black text-lg text-gray-900 dark:text-white uppercase tracking-widest border-b border-gray-100 dark:border-gray-800 pb-4">
                            Specifications</h3>
                        <ul class="space-y-4 text-sm">
                            <li class="flex justify-between items-center">
                                <span class="font-medium text-gray-500">Brand</span>
                                <span class="font-bold text-gray-900 dark:text-white">{{ product.brand }}</span>
                            </li>
                            <li class="flex justify-between items-center">
                                <span class="font-medium text-gray-500">Warranty</span>
                                <span class="font-bold text-gray-900 dark:text-white text-right">{{ product.warranty
                                    }}</span>
                            </li>
                            <li class="flex justify-between items-center">
                                <span class="font-medium text-gray-500">Shipping</span>
                                <div class="flex items-center gap-1 font-bold text-gray-900 dark:text-white">
                                    <Truck :size="14" /> Free Delivery
                                </div>
                            </li>
                            <li class="flex justify-between items-start">
                                <span class="font-medium text-gray-500">Origin</span>
                                <span class="font-bold text-gray-900 dark:text-white text-right w-1/2">{{
                                    product.shippingFrom
                                    }}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="lg:col-span-2">
                    <div
                        class="bg-white dark:bg-gray-900 rounded-[24px] p-6 md:p-8 shadow-theme-md border border-gray-100 dark:border-gray-800 h-full">
                        <h3
                            class="font-black text-xl text-gray-900 dark:text-white uppercase tracking-widest border-b border-gray-100 dark:border-gray-800 pb-4 mb-6">
                            Product Insight</h3>
                        <div
                            class="prose prose-sm md:prose-base dark:prose-invert max-w-none font-medium text-gray-600 dark:text-gray-300 whitespace-pre-line leading-loose">
                            {{ product.description }}
                        </div>
                    </div>
                </div>

            </div>

        </main>
        <Footer />
    </div>
</template>