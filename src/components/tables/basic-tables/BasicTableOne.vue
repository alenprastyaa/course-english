<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-4 sm:p-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="mb-6 sm:mb-8">
        <h1 class="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
          English Learning Path
        </h1>
        <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Pelajari Bahasa Inggris dengan terstruktur dan interaktif
        </p>
      </div>

      <!-- Learning Categories -->
      <div class="space-y-4">
        <div v-for="(category, index) in learningCategories" :key="index"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
          <!-- Category Header -->
          <button @click="toggleCategory(index)"
            class="w-full p-3 sm:p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <div class="flex items-center gap-2 sm:gap-4 flex-1 text-left">
              <div
                :class="['w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-gradient-to-br flex items-center justify-center text-white text-lg sm:text-2xl', category.colorClass]">
                {{ category.icon }}
              </div>
              <div>
                <h2 class="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white">
                  {{ category.category }}
                </h2>
                <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {{ category.items ? `${category.items.length} lessons` : `${category.count} vocabulary` }}
                </p>
              </div>
            </div>
            <div class="flex items-center gap-2 sm:gap-3">
              <div v-if="category.items" class="text-right">
                <div class="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                  {{ getProgress(index) }}%
                </div>
                <div
                  class="w-12 sm:w-16 h-1.5 sm:h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-0.5 sm:mt-1">
                  <div :style="{ width: getProgress(index) + '%' }"
                    class="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"></div>
                </div>
              </div>
              <svg
                :class="['w-5 sm:w-6 h-5 sm:h-6 text-gray-400 transition-transform duration-300 flex-shrink-0', expandedIndex === index && 'rotate-180']"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </button>

          <!-- Expanded Content -->
          <transition enter-active-class="transition-all duration-300" leave-active-class="transition-all duration-300"
            enter-from-class="max-h-0 opacity-0" enter-to-class="max-h-96 opacity-100"
            leave-from-class="max-h-96 opacity-100" leave-to-class="max-h-0 opacity-0">
            <div v-if="expandedIndex === index" class="border-t border-gray-200 dark:border-gray-700">
              <!-- Lessons List -->
              <div v-if="category.items" class="divide-y divide-gray-200 dark:divide-gray-700">
                <label v-for="(item, itemIndex) in category.items" :key="itemIndex"
                  class="flex items-center gap-2 sm:gap-3 p-3 sm:p-6 hover:bg-gray-50 dark:hover:bg-gray-700/30 cursor-pointer transition-colors">
                  <input type="checkbox" :checked="checkedItems[`${index}-${itemIndex}`]"
                    @change="toggleCheck(index, itemIndex)"
                    class="w-4 sm:w-5 h-4 sm:h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer flex-shrink-0" />
                  <span class="text-sm sm:text-base text-gray-700 dark:text-gray-300">{{ item }}</span>
                </label>
              </div>

              <!-- Vocabulary Info -->
              <div v-else class="p-3 sm:p-6 text-center">
                <div class="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text"
                  :class="`bg-gradient-to-r ${category.bgGradient}`">
                  {{ category.count }}
                </div>
                <p class="text-xs sm:text-base text-gray-600 dark:text-gray-400 mt-2">{{ category.description }}</p>
                <button
                  class="mt-3 sm:mt-4 px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r rounded-lg text-white text-sm sm:text-base font-medium hover:opacity-90 transition-opacity"
                  :class="`${category.bgGradient}`">
                  Mulai Belajar
                </button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const expandedIndex = ref(null)
const checkedItems = ref({})

const learningCategories = ref([
  {
    category: 'Pelajaran Dasar',
    icon: '📚',
    colorClass: 'from-blue-500 to-blue-600',
    items: Array.from({ length: 16 }, (_, i) => `Belajar Bahasa Inggris Ke ${i + 1}`),
  },
  {
    category: 'Kosakata Umum',
    icon: '⚡',
    colorClass: 'from-amber-500 to-orange-600',
    count: 233,
    description: 'Kosakata Bahasa Inggris Umum',
    bgGradient: 'from-amber-500 to-orange-600',
  },
  {
    category: 'Kata Kerja',
    icon: '🎯',
    colorClass: 'from-emerald-500 to-teal-600',
    count: 137,
    description: 'Kosakata Bahasa Inggris Kata Kerja',
    bgGradient: 'from-emerald-500 to-teal-600',
  },
  {
    category: 'Kata Sifat',
    icon: '✨',
    colorClass: 'from-rose-500 to-pink-600',
    count: 111,
    description: 'Kosakata Bahasa Inggris Kata Sifat',
    bgGradient: 'from-rose-500 to-pink-600',
  },
])

const toggleCategory = (index) => {
  expandedIndex.value = expandedIndex.value === index ? null : index
}

const toggleCheck = (categoryIndex, itemIndex) => {
  const key = `${categoryIndex}-${itemIndex}`
  checkedItems.value[key] = !checkedItems.value[key]
}

const getProgress = (categoryIndex) => {
  const category = learningCategories.value[categoryIndex]
  if (!category.items) return 0

  const checked = category.items.filter((_, i) => checkedItems.value[`${categoryIndex}-${i}`]).length
  return Math.round((checked / category.items.length) * 100)
}
</script>