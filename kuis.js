// Data Soal Latihan Epidemiologi Penyakit Menular
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
    explanation: "Virus Ebola ditularkan melalui cairan tubuh. Tradisi memandikan atau memeluk jenazah penderita Ebola menjadi salah satu rantai penularan utama."
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
    explanation: "MERS-CoV (Middle East Respiratory Syndrome) menular ke manusia terutama dari kontak langsung atau tidak langsung dengan unta dromedaris."
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
    explanation: "Virus Influenza A (H5N1) mati pada suhu pemasakan yang tinggi. Mengonsumsi daging unggas matang sempurna dan memprosesnya secara higienis mencegah risiko penularan."
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

// Variable State
let currentIndex = 0;
let userScore = 0;

// Element Selector
const quizCard = document.getElementById("quiz-card");
const questionText = document.getElementById("quiz-question");
const optionsGrid = document.getElementById("quiz-options");
const feedbackBox = document.getElementById("quiz-feedback");
const nextButton = document.getElementById("quiz-next-btn");
const progressFill = document.getElementById("quiz-progress-fill");
const currentNumEl = document.getElementById("quiz-current-num");
const totalNumEl = document.getElementById("quiz-total-num");
const topicTag = document.getElementById("quiz-topic-tag");
const resultCard = document.getElementById("quiz-result-card");
const finalScoreEl = document.getElementById("quiz-final-score");

function startQuiz() {
  currentIndex = 0;
  userScore = 0;
  if (totalNumEl) totalNumEl.textContent = quizData.length;
  if (resultCard) resultCard.classList.add("hidden");
  if (quizCard) quizCard.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  resetQuizState();
  const item = quizData[currentIndex];

  if (currentNumEl) currentNumEl.textContent = currentIndex + 1;
  if (topicTag) topicTag.textContent = item.topic;
  if (questionText) questionText.textContent = item.question;

  // Update Progress Line
  const pct = ((currentIndex) / quizData.length) * 100;
  if (progressFill) progressFill.style.width = `${pct}%`;

  item.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-opt-btn";
    btn.innerHTML = `<span class="opt-key">${String.fromCharCode(65 + idx)}.</span> <span>${optText}</span>`;
    btn.onclick = () => handleSelectOption(idx);
    optionsGrid.appendChild(btn);
  });
}

function resetQuizState() {
  if (nextButton) nextButton.classList.add("hidden");
  if (feedbackBox) {
    feedbackBox.className = "info-box hidden";
    feedbackBox.innerHTML = "";
  }
  if (optionsGrid) optionsGrid.innerHTML = "";
}

function handleSelectOption(chosenIdx) {
  const item = quizData[currentIndex];
  const allBtns = optionsGrid.querySelectorAll(".quiz-opt-btn");

  allBtns.forEach(b => b.disabled = true);

  if (chosenIdx === item.answer) {
    userScore++;
    allBtns[chosenIdx].classList.add("is-correct");
    feedbackBox.className = "info-box is-correct-box";
    feedbackBox.innerHTML = `<strong>Jawaban Tepat!</strong> ${item.explanation}`;
  } else {
    allBtns[chosenIdx].classList.add("is-wrong");
    allBtns[item.answer].classList.add("is-correct");
    feedbackBox.className = "info-box is-wrong-box";
    feedbackBox.innerHTML = `<strong>Kurang Tepat.</strong> ${item.explanation}`;
  }

  feedbackBox.classList.remove("hidden");
  nextButton.classList.remove("hidden");
}

if (nextButton) {
  nextButton.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < quizData.length) {
      renderQuestion();
    } else {
      renderResult();
    }
  });
}

function renderResult() {
  quizCard.classList.add("hidden");
  resultCard.classList.remove("hidden");
  if (progressFill) progressFill.style.width = "100%";

  const percentage = Math.round((userScore / quizData.length) * 100);
  if (finalScoreEl) {
    finalScoreEl.innerHTML = `Skor Akhir Anda: <strong>${userScore} dari ${quizData.length}</strong> (${percentage}%)`;
  }
}

const restartBtn = document.getElementById("quiz-restart-btn");
if (restartBtn) {
  restartBtn.addEventListener("click", startQuiz);
}

document.addEventListener("DOMContentLoaded", startQuiz);
