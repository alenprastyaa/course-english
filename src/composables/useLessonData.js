
import { ref } from 'vue'
export const learningCategories = ref([
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

// Data Lesson Content (Array of Array)
export const lessonContent = ref([
    // --- Hari Ke 1 (Index 0) ---
    [
        { kalimat: 'Take It Easy', arti: 'Santai aja' },
        { kalimat: 'Let Me Be', arti: 'Biarkan aku saja' },
        { kalimat: 'For What', arti: 'Untuk apa' },
        { kalimat: 'Dead Meat', arti: 'Matilah kau' },
        { kalimat: 'What\'s Up ?', arti: 'Hai Apa Kabar ?' },
        { kalimat: 'Nothing Much', arti: 'Biasa saja' },
        { kalimat: 'I guess so', arti: 'Saya pikir juga begitu' },
        { kalimat: 'Don\'t bother', arti: 'Jangan ganggu' },
        { kalimat: 'No hard feeling', arti: 'Jangan tersinggung' },
        { kalimat: 'Don\'t be Noisy', arti: 'Jangan rame' },
        { kalimat: 'Piece of cake', arti: 'Mudah sekali' },
        { kalimat: 'Poor thing', arti: 'Kasihannya' },
        { kalimat: 'So what ?', arti: 'Lalu kenapa ?' },
        { kalimat: 'So so', arti: 'Biasa saja' },
        { kalimat: 'Just for fun', arti: 'Hanya tuk senang-senang' },
        { kalimat: 'One way or another', arti: 'ini atau itu' },
        { kalimat: 'Help yourself !', arti: 'Bantu diri anda sendiri' },
        { kalimat: 'Absolutely !', arti: 'Tentu Saja' },
        { kalimat: 'What have you been doing', arti: 'Apa yang telah Anda lakukan' },
        { kalimat: 'Nothing Much', arti: 'Bukan apa apa' },
    ],

    // --- Hari Ke 2 (Index 1) ---
    [
        { kalimat: 'What\'s on your mind ?', arti: 'Apa yang anda pikirkan ?' },
        { kalimat: 'I was just thinking', arti: 'Saya hanya sedang berpikir' },
        { kalimat: 'I was just day dreaming', arti: 'Saya hanya sedang melamun' },
        { kalimat: 'It\'s none of your business', arti: 'Bukan urusan Anda' },
        { kalimat: 'Is that so ?', arti: 'Hanya itu ?' },
        { kalimat: 'How come ?', arti: 'Bagaimana bisa ?' },
        { kalimat: 'How\'s it going ?', arti: 'Bagaimana itu berjalan ?' },
        { kalimat: 'Definitely !', arti: 'Tentu saja !' },
        { kalimat: 'Of course !', arti: 'Pastinya !' },
        { kalimat: 'You better believe it !', arti: 'Anda harus mempercayainya' },
        { kalimat: 'I guess so', arti: 'Saya pikir begitu' },
        { kalimat: 'There\'s no way to know', arti: 'Tidak ada cara untuk mengetahuinya' },
        { kalimat: 'I can\'t say for sure', arti: 'Saya tidak dapat memastikannya' },
        { kalimat: 'This is too good to be true', arti: 'Terlalu baik untuk menjadi kenyataan' },
        { kalimat: 'No way, stop joking !', arti: 'Sudah ! Cukup bercandanya' },
        { kalimat: 'I got it', arti: 'Saya paham' },
        { kalimat: 'Right on! (Great)', arti: 'Luar biasa' },
        { kalimat: 'I did it! ( I made it )', arti: 'Saya berhasil melakukannya' },
        { kalimat: 'Got a minute ?', arti: 'Anda punya waktu sebentar ?' },
        { kalimat: 'About when ?', arti: 'Sekitar kapan ?' },
    ],

    [], [], [], [], [], [], [], [], [], [], [], [], [], []
])