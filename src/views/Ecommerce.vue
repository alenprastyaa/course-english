<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-4 sm:p-8">
    <div class="max-w-4xl mx-auto">
      <div class="mb-6 sm:mb-8">
        <h1 class="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
          English Learning Path
        </h1>
        <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Pelajari Bahasa Inggris dengan terstruktur dan interaktif
        </p>
      </div>

      <div class="space-y-4">
        <div v-for="(category, index) in learningCategories" :key="index"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">

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
              <svg
                :class="['w-5 sm:w-6 h-5 sm:h-6 text-gray-400 transition-transform duration-300 flex-shrink-0', expandedIndex === index && 'rotate-180']"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </button>

          <transition enter-active-class="transition-all duration-300" leave-active-class="transition-all duration-300"
            enter-from-class="max-h-0 opacity-0" enter-to-class="max-h-96 opacity-100"
            leave-from-class="max-h-96 opacity-100" leave-to-class="max-h-0 opacity-0">

            <div v-if="expandedIndex === index" class="border-t border-gray-200 dark:border-gray-700">
              <div v-if="category.items" class="divide-y divide-gray-200 dark:divide-gray-700">
                <button v-for="(item, itemIndex) in category.items" :key="itemIndex" @click="goToLesson(itemIndex)"
                  class="w-full flex items-center gap-2 sm:gap-3 p-3 sm:p-6 hover:bg-blue-50 dark:hover:bg-gray-700/30 cursor-pointer transition-colors text-left">
                  <span class="text-sm sm:text-base text-gray-700 dark:text-gray-300 flex-1">{{ item }}</span>
                  <svg class="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div v-else class="p-3 sm:p-6 text-center">
                <p class="text-gray-500">Konten Vocabulary...</p>
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
import { useRouter } from 'vue-router'
import { learningCategories } from '@/composables/useLessonData' // Import data

const router = useRouter()
const expandedIndex = ref(null)

const toggleCategory = (index) => {
  expandedIndex.value = expandedIndex.value === index ? null : index
}

// Navigasi ke halaman detail
const goToLesson = (index) => {
  // Kita kirim ID (index + 1) agar URL jadi /lesson/1, /lesson/2, dst.
  router.push({ name: 'LessonDetail', params: { id: index + 1 } })
}
</script>