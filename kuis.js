// Bank Soal Epidemiologi Penyakit Menular
const quizData = [
  {
    id: 1,
    topic: "ISPA & Pneumonia",
    question: "Penyebab utama (etiologi) pneumonia pada anak balita yang paling sering ditemukan dari golongan bakteri adalah...",
    options: [
      "Streptococcus pneumoniae dan Haemophilus influenzae tipe b",
      "Rhinovirus dan Coronavirus",
      "Bacillus anthracis dan Leptospira",
      "Mycobacterium tuberculosis dan Salmonella"
    ],
    answer: 0,
    explanation: "Pneumonia merupakan infeksi parenkim paru yang sebagian besar disebabkan oleh bakteri Streptococcus pneumoniae dan Haemophilus influenzae tipe b (Hib)."
  },
  {
    id: 2,
    topic: "Ebola",
    question: "Manakah dari perilaku/faktor budaya berikut yang paling berisiko tinggi menularkan virus Ebola di masyarakat?",
    options: [
      "Mengonsumsi air minum yang tidak dimasak",
      "Tradisi pemakaman yang melibatkan kontak fisik langsung dengan jenazah penderita",
      "Gigitan nyamuk Aedes aegypti di siang hari",
      "Penggunaan sarung tangan medis saat merawat pasien"
    ],
    answer: 1,
    explanation: "Virus Ebola ditularkan melalui cairan tubuh. Tradisi memandikan/memeluk jenazah penderita Ebola menjadi salah satu rantai penularan paling utama."
  },
  {
    id: 3,
    topic: "MERS-CoV",
    question: "Hewan yang terbukti menjadi reservoir utama penularan MERS-CoV ke manusia adalah...",
    options: [
      "Babi peternakan",
      "Unggas liar",
      "Unta dromedaris",
      "Tikus rumah"
    ],
    answer: 2,
    explanation: "MERS-CoV (Middle East Respiratory Syndrome) menular ke manusia terutama dari kontak langsung/tidak langsung dengan unta dromedaris."
  },
  {
    id: 4,
    topic: "Flu Burung (Avian Influenza)",
    question: "Langkah keamanan pangan yang tepat untuk mencegah penularan virus Avian Influenza (H5N1) melalui makanan adalah...",
    options: [
      "Meminum susu mentah tanpa dipasteurisasi",
      "Memasak daging unggas hingga matang sempurna (suhu mencukupi)",
      "Menyembelih sendiri unggas yang tampak sakit",
      "Mengonsumsi telur setengah matang"
    ],
    answer: 1,
    explanation: "Virus Influenza A (H5N1) mati pada suhu pemasakan yang tinggi. Mengonsumsi daging unggas matang sempurna dan memprosesnya higienis mencegah risiko penularan."
  },
  {
    id: 5,
    topic: "Leptospirosis",
    question: "Bakteri Leptospira umumnya dikeluarkan ke lingkungan oleh hewan reservoir (seperti tikus) melalui...",
    options: [
      "Kotoran/feses",
      "Cairan urine",
      "Udara/droplet batuk",
      "Gigitan kutu"
    ],
    answer: 1,
    explanation: "Bakteri Leptospira berkembang di tubulus ginjal tikus/hewan pengerat dan dikeluarkan secara terus-menerus melalui urine."
  },
  {
    id: 6,
    topic: "Antraks",
    question: "Mengapa bangkai hewan yang mati mendadak akibat dugaan Antraks DILARANG KERAS disembelih atau dibedah?",
    options: [
      "Karena dapat menyebabkan dagingnya membusuk lebih cepat",
      "Karena kontak bakteri Bacillus anthracis dengan udara memicu pembentukan spora yang sangat resisten",
      "Karena virus antraks dapat terbang bersama angin",
      "Karena racun antraks hanya aktif jika hewan dibedah"
    ],
    answer: 1,
    explanation: "Bakteri Bacillus anthracis jika terpapar udara luar akan membentuk spora yang mampu bertahan hidup puluhan tahun di dalam tanah."
  }
];

// State Management
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// DOM Elements
const quizCard = document.getElementById("quiz-card");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackText = document.getElementById("feedback-text");
const nextBtn = document.getElementById("next-btn");
const progressFill = document.getElementById("progress-fill");
const currentNumEl = document.getElementById("current-num");
const totalNumEl = document.getElementById("total-num");
const topicBadge = document.getElementById("topic-badge");
const resultCard = document.getElementById("result-card");
const scoreText = document.getElementById("score-text");

function initQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  totalNumEl.textContent = quizData.length;
  resultCard.classList.add("hidden");
  quizCard.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  resetState();
  const q = quizData[currentQuestionIndex];
  
  currentNumEl.textContent = currentQuestionIndex + 1;
  topicBadge.textContent = q.topic;
  questionText.textContent = q.question;
  
  // Progress bar update
  const progressPercent = ((currentQuestionIndex) / quizData.length) * 100;
  progressFill.style.width = `${progressPercent}%`;

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    btn.innerHTML = `<span class="opt-prefix">${String.fromCharCode(65 + idx)}.</span> <span class="opt-label">${opt}</span>`;
    btn.addEventListener("click", () => selectAnswer(idx));
    optionsContainer.appendChild(btn);
  });
}

function resetState() {
  nextBtn.classList.add("hidden");
  feedbackText.classList.add("hidden");
  feedbackText.className = "feedback-box hidden";
  optionsContainer.innerHTML = "";
}

function selectAnswer(selectedIdx) {
  const q = quizData[currentQuestionIndex];
  const buttons = optionsContainer.querySelectorAll(".opt-btn");
  
  // Disable all options after selection
  buttons.forEach(btn => btn.disabled = true);

  if (selectedIdx === q.answer) {
    score++;
    buttons[selectedIdx].classList.add("correct");
    feedbackText.innerHTML = `<strong>Benar!</strong> ${q.explanation}`;
    feedbackText.classList.add("correct");
  } else {
    buttons[selectedIdx].classList.add("wrong");
    buttons[q.answer].classList.add("correct");
    feedbackText.innerHTML = `<strong>Kurang tepat.</strong> ${q.explanation}`;
    feedbackText.classList.add("wrong");
  }

  feedbackText.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizCard.classList.add("hidden");
  resultCard.classList.remove("hidden");
  progressFill.style.width = "100%";
  
  const percentage = Math.round((score / quizData.length) * 100);
  scoreText.innerHTML = `Skor Kamu: <strong>${score} / ${quizData.length}</strong> (${percentage}%)`;
}

document.getElementById("restart-btn")?.addEventListener("click", initQuiz);

// Start
document.addEventListener("DOMContentLoaded", initQuiz);
