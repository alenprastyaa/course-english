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
                <h1 class="sm:text-sm text-gray-900 dark:text-white mb-2">
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
                                    <th
                                        class="px-3 sm:px-4 py-2 sm:py-3 text-white text-left text-xs sm:text-sm font-semibold border border-blue-400 text-center">
                                        <select v-model="selectedVoice"
                                            class="bg-blue-700 text-white text-xs rounded px-2 py-1 border border-blue-400">
                                            <option value="female-en-US">👩 Wanita</option>
                                            <option value="male-en-US">👨 Laki-laki</option>
                                            <option value="natural">🎙️ Natural</option>
                                        </select>
                                    </th>
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
                                    <td
                                        class="px-3 sm:px-4 py-2 sm:py-3 text-center border border-gray-200 dark:border-gray-700">
                                        <button @click="speak(vocab.kalimat, idx)" :class="[
                                            'px-3 py-2 rounded-lg font-medium transition-all text-sm inline-flex items-center gap-2',
                                            speakingIndex === idx
                                                ? 'bg-gradient-to-r from-red-500 to-red-600 text-white animate-pulse shadow-lg'
                                                : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md hover:shadow-lg'
                                        ]">
                                            <svg v-if="speakingIndex === idx" class="w-4 h-4" fill="currentColor"
                                                viewBox="0 0 24 24">
                                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                            </svg>
                                            <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.26 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                            </svg>
                                            <span class="hidden sm:inline">{{ speakingIndex === idx ? 'Hentikan' :
                                                'Dengarkan' }}</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
                        <h4 class="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">💡 Tips
                            Belajar</h4>
                        <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1">
                            <li>✓ Klik tombol 🔊 untuk mendengarkan cara membaca</li>
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
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { lessonContent } from '@/composables/useLessonData'

const route = useRoute()
const router = useRouter()
const speakingIndex = ref(null)
const selectedVoice = ref('female-en-US')
const availableVoices = ref([]) // Variabel untuk menyimpan daftar suara

// Mengambil ID dari URL
const currentId = computed(() => Number(route.params.id))

// Mengambil data array berdasarkan ID
const currentData = computed(() => {
    const index = currentId.value - 1
    return lessonContent.value[index] || null
})

// Fungsi untuk update daftar suara
const updateVoices = () => {
    availableVoices.value = window.speechSynthesis.getVoices()
}

onMounted(() => {
    // 1. Coba ambil suara saat mount
    updateVoices()

    // 2. Pasang event listener karena Chrome memuat suara secara asinkron
    if ('onvoiceschanged' in window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = updateVoices
    }
})

onBeforeUnmount(() => {
    // Bersihkan listener saat keluar halaman
    if ('onvoiceschanged' in window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = null
    }
    // Hentikan suara jika user pindah halaman saat suara masih bunyi
    window.speechSynthesis.cancel()
})

const goBack = () => {
    router.push('/')
}

const navigateLesson = (direction) => {
    const nextId = currentId.value + direction
    router.push({ name: 'LessonDetail', params: { id: nextId } })
    window.scrollTo(0, 0)
}

const speak = (text, idx) => {
    // Hentikan suara yang sedang berjalan
    window.speechSynthesis.cancel()

    // Jika klik tombol yang sama, hentikan
    if (speakingIndex.value === idx) {
        speakingIndex.value = null
        return
    }

    speakingIndex.value = idx

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en-US'
    utterance.rate = 0.9
    utterance.pitch = 1

    // Gunakan daftar suara yang sudah di-load di variable reactive
    let voices = availableVoices.value

    // Fallback: Jika list kosong (jarang terjadi jika mounted benar), coba ambil lagi
    if (voices.length === 0) {
        voices = window.speechSynthesis.getVoices()
    }

    let selectedVoiceObj = null

    if (selectedVoice.value === 'female-en-US') {
        // Cari voice wanita dengan prioritas lebih detail
        selectedVoiceObj = voices.find(v =>
            v.name.includes('Google US English') || // Seringkali default wanita di Chrome Android/PC
            v.name.includes('Microsoft Zira') ||    // Windows Female
            v.name.includes('Samantha') ||          // MacOS Female
            v.name.includes('Google UK English Female') ||
            (v.name.includes('Female') && v.lang.includes('en-US'))
        )
            // Fallback jika tidak ketemu yang spesifik, cari sembarang wanita en-US
            || voices.find(v => v.lang.includes('en') && v.name.includes('Female'))
    } else if (selectedVoice.value === 'male-en-US') {
        // Cari voice laki-laki
        selectedVoiceObj = voices.find(v =>
            v.name.includes('Google UK English Male') ||
            v.name.includes('Microsoft David') || // Windows Male
            (v.name.includes('Male') && v.lang.includes('en-US'))
        ) || voices.find(v => v.lang.includes('en') && v.name.includes('Male'))
    } else {
        // Natural voice / Default
        selectedVoiceObj = voices.find(v => v.lang.includes('en-US')) || voices[0]
    }

    if (selectedVoiceObj) {
        utterance.voice = selectedVoiceObj
        // Debugging: Cek di console suara apa yang terpilih
        console.log("Selected Voice:", selectedVoiceObj.name)
    }

    utterance.onend = () => {
        speakingIndex.value = null
    }

    // Error handling jika suara error
    utterance.onerror = () => {
        speakingIndex.value = null
    }

    window.speechSynthesis.speak(utterance)
}
</script>