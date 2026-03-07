<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { 
  Zap, 
  ChevronRight,
  Monitor,
  Smartphone,
  Shirt,
  ShoppingBag,
  Briefcase,
  Watch,
  Heart,
  Gamepad,
  LayoutGrid,
  ShoppingCart,
  TrendingUp
} from 'lucide-vue-next'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import ComponentCard from '../common/ComponentCard.vue'
import Badge from '../ui/Badge.vue'
import Nav from './utils/nav.vue'
import Footer from './utils/footer.vue'

// Swiper logic
const modules = [Navigation, Pagination, Autoplay]

const banners = ref([
  { id: 1, title: 'Elevate Your Digital Workflow', desc: 'Premium productivity tools and high-end electronics curated for professionals.', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200' },
  { id: 2, title: 'Modern Studio Collection', desc: 'Minimalist aesthetic meets maximum performance. Explore the new era of work.', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200' },
  { id: 3, title: 'Strategic Lifestyle Gear', desc: 'Discover the latest trends with a focus on quality and sustainable luxury.', image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=1200' }
])

const categories = ref([
  { name: 'Hardware', icon: Monitor, color: 'brand' },
  { name: 'Devices', icon: Smartphone, color: 'blue-light' },
  { name: 'Apparel', icon: Shirt, color: 'warning' },
  { name: 'Inventory', icon: ShoppingBag, color: 'success' },
  { name: 'Professional', icon: Briefcase, color: 'info' },
  { name: 'Accessories', icon: Watch, color: 'primary' },
  { name: 'Lifestyle', icon: Heart, color: 'error' },
  { name: 'Entertainment', icon: Gamepad, color: 'secondary' },
  { name: 'Essentials', icon: ShoppingCart, color: 'success' },
])

const flashSaleProducts = ref([
  { id: 1, name: 'Precision Audio X1', price: '2,499', originalPrice: '3,999', discount: '40% OFF', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400', progress: 65, color: 'primary' },
  { id: 2, name: 'Quantum Watch Pro', price: '1,200', originalPrice: '2,000', discount: '40% OFF', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400', progress: 80, color: 'success' },
  { id: 3, name: 'Studio Ergonomic Desk', price: '3,500', originalPrice: '5,000', discount: '30% OFF', image: 'https://images.unsplash.com/photo-1518455027359-f3f816b1a20a?auto=format&fit=crop&q=80&w=400', progress: 45, color: 'warning' },
  { id: 4, name: 'Tactile Keyboard Lite', price: '850', originalPrice: '1,200', discount: '29% OFF', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=400', progress: 90, color: 'error' },
  { id: 5, name: 'Pro Monitor 4K', price: '1,100', originalPrice: '1,500', discount: '25% OFF', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=400', progress: 75, color: 'primary' },
  { id: 6, name: 'Smart Home Hub', price: '299', originalPrice: '450', discount: '33% OFF', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=400', progress: 30, color: 'success' },
  { id: 7, name: 'Noise Cancel Buds', price: '199', originalPrice: '299', discount: '33% OFF', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400', progress: 55, color: 'warning' },
  { id: 8, name: 'Ultra Thin Tablet', price: '899', originalPrice: '1,299', discount: '30% OFF', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=400', progress: 85, color: 'error' },
  { id: 9, name: 'Gaming Mouse RGB', price: '79', originalPrice: '120', discount: '34% OFF', image: 'https://images.unsplash.com/photo-1527864550417-7df91fc52c4a?auto=format&fit=crop&q=80&w=400', progress: 40, color: 'primary' },
  { id: 10, name: 'Webcam 4K Ultra', price: '149', originalPrice: '220', discount: '32% OFF', image: 'https://images.unsplash.com/photo-1583394132231-2625bd2944ad?auto=format&fit=crop&q=80&w=400', progress: 95, color: 'success' },
  { id: 11, name: 'Portable SSD 2TB', price: '249', originalPrice: '350', discount: '28% OFF', image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=400', progress: 20, color: 'warning' },
  { id: 12, name: 'Smart Desk Lamp', price: '89', originalPrice: '130', discount: '31% OFF', image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=400', progress: 60, color: 'error' },
])

const countdown = ref({ h: '02', m: '45', s: '30' })

onMounted(() => {
  setInterval(() => {
    let s = parseInt(countdown.value.s)
    let m = parseInt(countdown.value.m)
    let h = parseInt(countdown.value.h)

    if (s > 0) s--
    else {
      s = 59
      if (m > 0) m--
      else {
        m = 59
        if (h > 0) h--
      }
    }
    countdown.value.s = s.toString().padStart(2, '0')
    countdown.value.m = m.toString().padStart(2, '0')
    countdown.value.h = h.toString().padStart(2, '0')
  }, 1000)
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-dark font-outfit text-gray-900 dark:text-white transition-colors duration-300">
    <Nav />

    <main class="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <!-- Hero Section (TailAdmin Style) -->
      <section class="relative overflow-hidden rounded-[32px] bg-gray-900 text-white shadow-theme-xl">
        <div class="absolute inset-0 z-0 bg-gradient-to-br from-brand-600/40 via-transparent to-transparent"></div>
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 5000 }"
          class="h-[450px] md:h-[550px] lg:h-[650px] w-full"
        >
          <swiper-slide v-for="banner in banners" :key="banner.id">
            <div class="relative flex h-full items-center px-8 md:px-20 lg:px-32">
              <div class="z-10 max-w-2xl space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
                <Badge variant="light" color="primary" class="!px-4 !py-1 text-[10px] md:text-xs font-black uppercase tracking-widest ring-1 ring-white/10 backdrop-blur-md">
                   New Release 2026
                </Badge>
                <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                  {{ banner.title.split(' ').slice(0, -1).join(' ') }}
                  <span class="text-brand-400">{{ banner.title.split(' ').slice(-1)[0] }}</span>
                </h1>
                <p class="text-base md:text-xl text-gray-400 font-medium max-w-lg leading-relaxed">{{ banner.desc }}</p>
                <div class="flex flex-wrap gap-4 pt-4">
                  <button class="px-8 py-4 rounded-2xl bg-brand-500 text-white font-black text-sm md:text-base border-b-4 border-brand-700 shadow-xl shadow-brand-500/20 active:translate-y-1 active:border-b-0 transition-all">Explore Collection</button>
                  <button class="px-8 py-4 rounded-2xl bg-white/10 border border-white/20 text-white font-black text-sm md:text-base backdrop-blur-md hover:bg-white/20 transition-all">View Analytics</button>
                </div>
              </div>
              <!-- Decorative Background Image -->
              <div class="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block overflow-hidden">
                <img :src="banner.image" class="h-full w-full object-cover opacity-50 scale-110 group-hover:scale-100 transition-transform duration-1000" alt="banner">
                <div class="absolute inset-0 bg-gradient-to-l from-transparent via-gray-900/60 to-gray-900"></div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </section>

      <!-- Categories Section (Using ComponentCard) -->
      <ComponentCard title="Ecosystem Categories" desc="Explore our professional categories curated for high-performance lifestyles.">
        <div class="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          <a v-for="cat in categories" :key="cat.name" href="#" class="group flex flex-col items-center gap-4 p-5 rounded-2xl border border-transparent hover:border-brand-500/20 hover:bg-white dark:hover:bg-white/5 hover:shadow-theme-md transition-all">
            <div :class="['flex h-14 w-14 items-center justify-center rounded-[20px] transition-all group-hover:scale-110 shadow-theme-xs', 
              cat.color === 'brand' ? 'bg-brand-50 text-brand-500' : 
              cat.color === 'blue-light' ? 'bg-blue-light-50 text-blue-light-500' :
              cat.color === 'warning' ? 'bg-warning-50 text-warning-500' :
              cat.color === 'success' ? 'bg-success-50 text-success-500' :
              cat.color === 'error' ? 'bg-error-50 text-error-500' : 'bg-gray-50 text-gray-500']">
              <component :is="cat.icon" :size="28" />
            </div>
            <span class="text-xs font-black uppercase tracking-wider text-gray-500 group-hover:text-brand-500">{{ cat.name }}</span>
          </a>
        </div>
      </ComponentCard>

      <!-- Flash Sale (High Impact Section) -->
      <section class="space-y-8">
        <!-- Full-width Flash Sale Header -->
        <div class="relative overflow-hidden rounded-[32px] bg-brand-500 text-white shadow-theme-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border-b-8 border-brand-700">
           <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
           <div class="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl"></div>
           
           <div class="space-y-4 relative z-10 text-center md:text-left max-w-xl">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/20 text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
                 <Zap :size="12" class="fill-current" />
                 Limited Time Analytics
              </div>
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-none italic uppercase">
                 Flash <span class="text-brand-100">Insight</span>
              </h2>
              <p class="text-brand-50 font-medium text-sm md:text-base opacity-80">
                 Strategic discounts on our flagship performance monitoring modules. Act fast to secure early access metrics.
              </p>
           </div>
           
           <!-- Timer and Action -->
           <div class="flex flex-col sm:flex-row items-center gap-6 md:gap-10 relative z-10">
              <div class="flex gap-4">
                 <div v-for="(val, unit) in countdown" :key="unit" class="flex flex-col items-center gap-2">
                    <div class="h-16 w-14 md:h-20 md:w-18 rounded-2xl bg-white/20 border border-white/20 flex items-center justify-center text-2xl md:text-3xl font-black backdrop-blur-md shadow-inner">
                       {{ val }}
                    </div>
                    <span class="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-100">{{ unit === 'h' ? 'Hours' : unit === 'm' ? 'Mins' : 'Secs' }}</span>
                 </div>
              </div>
              <button class="px-10 py-4 bg-white text-brand-500 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-50 transition-all shadow-xl hover:scale-105 active:scale-95 group">
                View Full Grid
                <ChevronRight :size="18" class="inline-block ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </div>

        <!-- Product Grid (6 columns on desktop for 12 items in 2 rows) -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
           <div v-for="product in flashSaleProducts" :key="product.id" class="group relative overflow-hidden rounded-[24px] bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-gray-800 p-3 transition-all hover:shadow-theme-lg hover:-translate-y-1">
              <div class="relative h-40 overflow-hidden rounded-[18px] mb-3">
                 <img :src="product.image" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110">
                 <Badge variant="solid" :color="product.color" class="absolute top-2 left-2 !px-2 !py-0.5 text-[8px] font-black uppercase tracking-widest ring-2 ring-white/10">
                    {{ product.discount }}
                 </Badge>
              </div>
              <div class="space-y-3">
                 <div class="flex justify-between items-start">
                    <div>
                       <h3 class="font-bold text-gray-900 dark:text-white group-hover:text-brand-500 transition-colors truncate w-24 md:w-32 text-xs">{{ product.name }}</h3>
                       <div class="flex items-center gap-2 mt-1">
                          <span class="text-sm font-black text-brand-500">${{ product.price }}</span>
                          <span class="text-[10px] text-gray-400 line-through font-medium">${{ product.originalPrice }}</span>
                       </div>
                    </div>
                    <button class="h-8 w-8 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 hover:text-brand-500 hover:bg-brand-50 dark:hover:text-brand-500/10 transition-all shadow-theme-xs">
                       <ShoppingCart :size="14" />
                    </button>
                 </div>
                 <!-- Stock Progress -->
                 <div class="space-y-2">
                    <div class="flex justify-between text-[10px] font-black uppercase tracking-widest">
                       <span class="text-gray-400">Inventory Reserved</span>
                       <span class="text-brand-500">{{ product.progress }}%</span>
                    </div>
                    <div class="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                       <div :class="['h-full rounded-full transition-all duration-1000', 
                         product.color === 'primary' ? 'bg-brand-500' : 
                         product.color === 'success' ? 'bg-success-500' :
                         product.color === 'warning' ? 'bg-warning-500' : 'bg-error-500']" 
                         :style="{ width: product.progress + '%' }"></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <!-- Recommendation Grid (Using ComponentCard + Better Grid) -->
      <ComponentCard title="Strategic Recommendations" desc="Based on your professional profile and market trends.">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div v-for="i in 12" :key="i" class="group relative space-y-4">
            <div class="aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 relative group-hover:shadow-theme-md transition-all">
              <img :src="`https://picsum.photos/seed/${i+40}/400/400`" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="product">
              <button class="absolute bottom-3 right-3 h-10 w-10 rounded-xl bg-white/90 backdrop-blur-md shadow-theme-sm text-gray-700 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all hover:bg-brand-500 hover:text-white">
                 <ShoppingCart :size="18" />
              </button>
              <Badge v-if="i % 3 === 0" variant="light" color="success" class="absolute top-3 left-3 !text-[9px] font-black uppercase tracking-widest">Featured</Badge>
            </div>
            <div class="space-y-1">
              <h4 class="text-sm font-bold text-gray-900 dark:text-white truncate">Pro Component Module {{ i }}</h4>
              <div class="flex items-center justify-between">
                <span class="text-sm font-black text-gray-900 dark:text-white">$450.00</span>
                <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">2.1k sold</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-12 flex justify-center">
          <button class="flex items-center gap-3 px-10 py-4 rounded-xl border-2 border-brand-500/10 text-brand-500 font-black text-sm uppercase tracking-widest hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all group">
            Load More Insights
            <TrendingUp class="group-hover:translate-x-1 transition-transform" :size="18" />
          </button>
        </div>
      </ComponentCard>
    </main>

    <Footer />
  </div>
</template>

<style>
/* Swiper Pagination Styles */
.swiper-pagination-bullet {
  background-color: var(--color-white);
  @apply h-[8px] w-[8px] opacity-40 opacity-100! duration-300;
}
.swiper-pagination-bullet-active {
  background-color: var(--color-brand-500);
  @apply w-[32px] rounded-full;
}
.swiper-slide-active .animate-in {
  animation-fill-mode: forwards;
}
</style>
