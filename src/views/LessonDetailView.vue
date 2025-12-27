<template>
    <div
        class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-4 sm:p-8">
        <div class="max-w-4xl mx-auto">

            <button @click="goBack"
                class="mb-4 flex items-center gap-2 text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                <svg class="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Kembali ke Daftar
            </button>

            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-8">
                <h1 class=" sm:text-sm  text-gray-900 dark:text-white mb-2">
                    Belajar Bahasa Inggris Ke-{{ currentId }}
                </h1>
                <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
                    Materi pembelajaran ke-{{ currentId }} dari 16
                </p>
                <div v-if="!currentData" class="p-8 text-center text-gray-500">
                    Materi untuk hari ini belum tersedia.
                </div>

                <div v-else class="prose dark:prose-invert max-w-none mb-8">


                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse mb-6">
                            <thead>
                                <tr class="bg-gradient-to-r from-blue-500 to-blue-600">
                                    <th
                                        class="px-3 sm:px-4 py-2 sm:py-3 text-white text-left text-xs sm:text-sm font-semibold border border-blue-400">
                                        No</th>
                                    <th
                                        class="px-3 sm:px-4 py-2 sm:py-3 text-white text-left text-xs sm:text-sm font-semibold border border-blue-400">
                                        Kalimat</th>
                                    <th
                                        class="px-3 sm:px-4 py-2 sm:py-3 text-white text-left text-xs sm:text-sm font-semibold border border-blue-400">
                                        Arti / Terjemah</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                <tr v-for="(vocab, idx) in currentData" :key="idx"
                                    class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                    <td
                                        class="px-3 sm:px-4 py-2 sm:py-3 text-gray-700 dark:text-gray-300 text-xs sm:text-sm border border-gray-200 dark:border-gray-700 font-medium">
                                        {{ idx + 1 }}</td>
                                    <td
                                        class="px-3 sm:px-4 py-2 sm:py-3 text-gray-900 dark:text-white text-xs sm:text-sm border border-gray-200 dark:border-gray-700 font-semibold">
                                        {{ vocab.kalimat }}</td>
                                    <td
                                        class="px-3 sm:px-4 py-2 sm:py-3 text-gray-700 dark:text-gray-300 text-xs sm:text-sm border border-gray-200 dark:border-gray-700">
                                        {{ vocab.arti }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
                        <h4 class="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">💡 Tips
                            Belajar</h4>
                        <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1">
                            <li>✓ Hafalkan setiap kalimat beserta artinya</li>
                            <li>✓ Praktik mengucapkan dengan suara keras</li>
                        </ul>
                    </div>
                </div>

                <div class="flex gap-3 sm:gap-4">
                    <button v-if="currentId > 1" @click="navigateLesson(-1)"
                        class="flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-300 transition-colors text-sm sm:text-base">
                        ← Sebelumnya
                    </button>

                    <button v-if="currentId < 16" @click="navigateLesson(1)"
                        class="flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-sm sm:text-base">
                        Selanjutnya →
                    </button>

                    <button v-else disabled
                        class="flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium text-sm sm:text-base">
                        ✓ Selesai
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { lessonContent } from '@/composables/useLessonData'

const route = useRoute()
const router = useRouter()

// Mengambil ID dari URL (misal: /lesson/1 -> id = 1)
// Pastikan dikonversi ke Number
const currentId = computed(() => Number(route.params.id))

// Mengambil data array berdasarkan ID.
// Karena array dimulai dari 0, maka ID dikurangi 1.
const currentData = computed(() => {
    const index = currentId.value - 1
    return lessonContent.value[index] || null
})

const goBack = () => {
    router.push('/')
}

const navigateLesson = (direction) => {
    const nextId = currentId.value + direction
    router.push({ name: 'LessonDetail', params: { id: nextId } })
    // Scroll ke atas saat pindah halaman
    window.scrollTo(0, 0)
}
</script>