<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import {
  Trash2,
  Minus,
  Plus,
  Store,
  Ticket,
  ChevronRight,
  ShoppingCart
} from 'lucide-vue-next'
import Nav from './utils/nav.vue'
import Footer from './utils/footer.vue'
import Badge from '../ui/Badge.vue'
import { cartService } from '@/services'

const cartStores = ref<any[]>([])
const isLoading = ref(true)

const fetchCart = async () => {
  isLoading.value = true
  try {
    const res = await cartService.getCart()
    // Map backend data to frontend structure
    cartStores.value = (res.stores || []).map((store: any) => ({
      storeId: store.store_id,
      storeName: store.store_name,
      selected: false,
      items: (store.items || []).map((item: any) => ({
        id: item.product_id,
        name: item.product_name,
        variant: '-', // Fallback
        price: item.price,
        originalPrice: item.price, // Fallback
        qty: item.quantity,
        stock: 99, // Fallback
        image: 'https://via.placeholder.com/400', // Fallback
        selected: false
      }))
    }))
  } catch (error) {
    console.error('Failed to load cart:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchCart()
})

// --- LOGIKA CHECKBOX ---
const isAllSelected = computed({
  get() {
    return cartStores.value.length > 0 && cartStores.value.every(store => store.items.every(item => item.selected))
  },
  set(value) {
    cartStores.value.forEach(store => {
      store.selected = value
      store.items.forEach(item => item.selected = value)
    })
  }
})

const toggleStoreSelect = (store: any) => {
  const newValue = !store.selected
  store.selected = newValue
  store.items.forEach((item: any) => item.selected = newValue)
}

const checkStoreSelection = (store: any) => {
  store.selected = store.items.every((item: any) => item.selected)
}

// --- LOGIKA KUANTITAS & HARGA ---
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price)
}

const updateQty = async (item: any, amount: number) => {
  const newQty = item.qty + amount
  if (newQty >= 1 && newQty <= item.stock) {
    item.qty = newQty
    try {
        await cartService.postCartAdd({ product_id: item.id, quantity: amount })
    } catch (e) {
        console.error(e)
    }
  }
}

const removeItem = async (storeId: string, itemId: string) => {
  try {
    await cartService.deleteCartId(itemId)
    fetchCart() // Refresh cart after delete
  } catch (e) {
    console.error(e)
  }
}



const summary = computed(() => {
  let totalItems = 0
  let totalPrice = 0
  cartStores.value.forEach(store => {
    store.items.forEach(item => {
      if (item.selected) {
        totalItems += item.qty
        totalPrice += item.price * item.qty
      }
    })
  })
  return { totalItems, totalPrice }
})
</script>

<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-dark font-outfit text-gray-900 dark:text-white transition-colors duration-300 pb-20">
    <Nav />

    <main class="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      <h1 class="text-2xl md:text-3xl font-black mb-8 text-gray-900 dark:text-white flex items-center gap-3">
        <ShoppingCart class="text-brand-500" :size="32" />
        Shopping Cart
      </h1>

      <div class="flex flex-col lg:flex-row gap-8">

        <div class="lg:w-8/12 xl:w-9/12 space-y-6">

          <div
            class="hidden md:flex items-center bg-white dark:bg-gray-900 rounded-[20px] p-4 shadow-theme-sm border border-gray-100 dark:border-gray-800 font-bold text-sm text-gray-500 dark:text-gray-400">
            <div class="flex items-center gap-4 w-5/12 pl-2">
              <input type="checkbox" v-model="isAllSelected"
                class="w-5 h-5 rounded border-gray-300 bg-gray-100 text-brand-500 focus:ring-brand-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 cursor-pointer transition-all">
              <span>Product</span>
            </div>
            <div class="w-2/12 text-center">Unit Price</div>
            <div class="w-2/12 text-center">Quantity</div>
            <div class="w-2/12 text-center">Total Price</div>
            <div class="w-1/12 text-center">Actions</div>
          </div>

          <div v-for="store in cartStores" :key="store.storeId"
            class="bg-white dark:bg-gray-900 rounded-[24px] shadow-theme-md border border-gray-100 dark:border-gray-800 overflow-hidden">

            <div
              class="flex items-center gap-3 p-4 md:px-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20">
              <input type="checkbox" :checked="store.selected" @change="toggleStoreSelect(store)"
                class="w-5 h-5 rounded border-gray-300 bg-gray-100 text-brand-500 focus:ring-brand-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 cursor-pointer transition-all">
              <Store :size="18" class="text-gray-500" />
              <span class="font-bold text-gray-900 dark:text-white">{{ store.storeName }}</span>
              <Badge variant="light" color="error" class="!text-[10px] !py-0.5 ml-2">Official</Badge>
            </div>

            <div class="divide-y divide-gray-100 dark:divide-gray-800">
              <div v-for="item in store.items" :key="item.id"
                class="flex flex-col md:flex-row items-start md:items-center p-4 md:p-6 gap-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">

                <div class="flex items-start md:items-center gap-4 w-full md:w-5/12">
                  <input type="checkbox" v-model="item.selected" @change="checkStoreSelection(store)"
                    class="w-5 h-5 mt-4 md:mt-0 rounded border-gray-300 bg-gray-100 text-brand-500 focus:ring-brand-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 cursor-pointer transition-all">
                  <div
                    class="h-20 w-20 md:h-24 md:w-24 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 flex-shrink-0">
                    <img :src="item.image" class="w-full h-full object-cover" alt="product">
                  </div>
                  <div class="flex flex-col gap-1">
                    <h3 class="font-bold text-sm md:text-base text-gray-900 dark:text-white line-clamp-2">{{ item.name
                      }}</h3>
                    <span
                      class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded inline-block w-max mt-1">
                      Variant: {{ item.variant }}
                    </span>
                  </div>
                </div>

                <div class="hidden md:flex items-center w-7/12">
                  <div class="w-3/12 text-center flex flex-col">
                    <span class="text-xs text-gray-400 line-through">{{ formatPrice(item.originalPrice) }}</span>
                    <span class="font-bold text-gray-900 dark:text-white">{{ formatPrice(item.price) }}</span>
                  </div>

                  <div class="w-3/12 flex justify-center">
                    <div
                      class="flex items-center bg-gray-50 dark:bg-gray-800 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
                      <button @click="updateQty(item, -1)"
                        class="h-8 w-8 flex items-center justify-center rounded text-gray-500 hover:bg-white dark:hover:bg-gray-700 shadow-sm">
                        <Minus :size="14" />
                      </button>
                      <input type="text" :value="item.qty"
                        class="w-8 text-center text-sm font-bold bg-transparent focus:outline-none" readonly>
                      <button @click="updateQty(item, 1)"
                        class="h-8 w-8 flex items-center justify-center rounded text-gray-500 hover:bg-white dark:hover:bg-gray-700 shadow-sm">
                        <Plus :size="14" />
                      </button>
                    </div>
                  </div>

                  <div class="w-3/12 text-center font-black text-brand-500">
                    {{ formatPrice(item.price * item.qty) }}
                  </div>

                  <div class="w-3/12 flex justify-center">
                    <button @click="removeItem(store.storeId, item.id)"
                      class="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10">
                      <Trash2 :size="20" />
                    </button>
                  </div>
                </div>

                <div class="flex md:hidden w-full items-center justify-between pl-9 mt-2">
                  <div class="font-black text-brand-500 text-lg">{{ formatPrice(item.price * item.qty) }}</div>
                  <div class="flex items-center gap-4">
                    <div
                      class="flex items-center bg-gray-50 dark:bg-gray-800 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
                      <button @click="updateQty(item, -1)"
                        class="h-8 w-8 flex items-center justify-center rounded text-gray-500 hover:bg-white dark:hover:bg-gray-700">
                        <Minus :size="14" />
                      </button>
                      <span class="w-8 text-center text-sm font-bold">{{ item.qty }}</span>
                      <button @click="updateQty(item, 1)"
                        class="h-8 w-8 flex items-center justify-center rounded text-gray-500 hover:bg-white dark:hover:bg-gray-700">
                        <Plus :size="14" />
                      </button>
                    </div>
                    <button @click="removeItem(store.storeId, item.id)" class="text-gray-400 hover:text-red-500">
                      <Trash2 :size="18" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            <div
              class="p-4 bg-blue-50/50 dark:bg-brand-500/5 border-t border-gray-100 dark:border-gray-800 text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
              <Ticket :size="16" class="text-brand-500" />
              Free shipping available for orders over $50 from this store.
            </div>
          </div>

          <div v-if="cartStores.length === 0"
            class="bg-white dark:bg-gray-900 rounded-[24px] p-12 text-center shadow-theme-md">
            <ShoppingCart :size="64" class="mx-auto text-gray-300 mb-4" />
            <h2 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Your cart is empty</h2>
            <p class="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <router-link to="/"
              class="px-6 py-3 bg-brand-500 text-white rounded-xl font-bold hover:bg-brand-600 transition-colors inline-block">Start
              Shopping</router-link>
          </div>

        </div>

        <div class="lg:w-4/12 xl:w-3/12">
          <div
            class="sticky top-24 bg-white dark:bg-gray-900 rounded-[24px] shadow-theme-xl border border-gray-100 dark:border-gray-800 p-6 space-y-6">

            <h2
              class="text-lg font-black text-gray-900 dark:text-white uppercase tracking-widest border-b border-gray-100 dark:border-gray-800 pb-4">
              Order Summary</h2>

            <div
              class="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer hover:border-brand-500 transition-colors group">
              <div class="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Ticket :size="20" class="text-brand-500" />
                <span class="font-medium text-sm">Use Platform Voucher</span>
              </div>
              <ChevronRight :size="16" class="text-gray-400 group-hover:text-brand-500 transition-colors" />
            </div>

            <div class="space-y-3 text-sm">
              <div class="flex justify-between text-gray-500">
                <span>Subtotal ({{ summary.totalItems }} items)</span>
                <span class="font-bold text-gray-900 dark:text-white">{{ formatPrice(summary.totalPrice) }}</span>
              </div>
              <div class="flex justify-between text-gray-500">
                <span>Shipping Discount</span>
                <span class="font-bold text-success-500">-$15.00</span>
              </div>
            </div>

            <div class="border-t border-gray-100 dark:border-gray-800 pt-4 flex justify-between items-end">
              <span class="text-gray-500 font-medium">Total Amount</span>
              <div class="text-right">
                <div class="text-3xl font-black text-brand-500">{{ formatPrice(summary.totalPrice > 0 ?
                  summary.totalPrice - 15 : 0) }}</div>
                <div class="text-xs text-gray-400 mt-1">VAT included, where applicable</div>
              </div>
            </div>

            <button :disabled="summary.totalItems === 0"
              class="w-full py-4 rounded-xl bg-brand-500 text-white font-black text-sm uppercase tracking-widest hover:bg-brand-600 active:scale-[0.98] transition-all shadow-xl shadow-brand-500/20 disabled:opacity-50 disabled:cursor-not-allowed">
              Checkout ({{ summary.totalItems }})
            </button>
          </div>
        </div>

      </div>

      <div class="mt-16 space-y-6">
        <h2
          class="text-xl md:text-2xl font-black uppercase tracking-widest text-gray-900 dark:text-white flex items-center gap-2">
          You Might Also Like
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          <router-link v-for="i in 6" :key="i" :to="`/product/${i + 50}`"
            class="group relative space-y-3 md:space-y-4 block">
            <div
              class="aspect-square rounded-xl md:rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 relative group-hover:shadow-theme-md transition-all">
              <img :src="`https://picsum.photos/seed/${i + 50}/400/400`"
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="product">
              <button @click.prevent
                class="absolute bottom-2 right-2 md:bottom-3 md:right-3 h-8 w-8 md:h-10 md:w-10 rounded-lg md:rounded-xl bg-white/90 backdrop-blur-md shadow-theme-sm text-gray-700 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all hover:bg-brand-500 hover:text-white flex items-center justify-center z-10">
                <ShoppingCart class="w-4 h-4 md:w-[18px] md:h-[18px]" />
              </button>
              <Badge variant="solid" color="warning"
                class="absolute top-2 left-2 md:top-3 md:left-3 !text-[8px] md:!text-[9px] font-black uppercase tracking-widest">
                -30% OFF
              </Badge>
            </div>
            <div class="space-y-1">
              <h4 class="text-xs md:text-sm font-bold text-gray-900 dark:text-white truncate">Pro Component Module {{ i
                }}</h4>
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span class="text-xs md:text-sm font-black text-brand-500">$120.00</span>
                <span class="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">300
                  sold</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>

    </main>

    <div
      class="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex justify-between items-center z-50">
      <div class="flex items-center gap-3">
        <input type="checkbox" v-model="isAllSelected"
          class="w-5 h-5 rounded border-gray-300 bg-gray-100 text-brand-500 focus:ring-brand-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 cursor-pointer transition-all">
        <div class="flex flex-col">
          <span class="text-xs text-gray-500">Total:</span>
          <span class="font-black text-brand-500 text-lg leading-none">{{ formatPrice(summary.totalPrice) }}</span>
        </div>
      </div>
      <button :disabled="summary.totalItems === 0"
        class="px-8 py-3 rounded-xl bg-brand-500 text-white font-black text-sm uppercase tracking-widest hover:bg-brand-600 disabled:opacity-50">
        Checkout ({{ summary.totalItems }})
      </button>
    </div>

    <Footer class="hidden lg:block mt-12" />
  </div>
</template>