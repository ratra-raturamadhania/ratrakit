// Bank Soal Mata Kuliah Dinamika Kelompok (30 Soal)
const dinamikaKelompokQuizData = [
  // --- KONSEP DASAR DINAMIKA KELOMPOK (Soal 1-5) ---
  {
    id: 1,
    topic: "Konsep Dasar Dinamika Kelompok",
    question: "Proses saling memengaruhi antar individu dalam kelompok yang memunculkan perubahan sikap, perilaku, dan pola hubungan untuk mencapai tujuan bersama disebut...",
    options: [
      "Kohesivitas Sosial",
      "Dinamika Kelompok",
      "Konformitas Kelompok",
      "Struktur Organisasi"
    ],
    answer: 1,
    explanation: "Dinamika kelompok adalah proses saling memengaruhi antar individu dalam kelompok sehingga memunculkan perubahan sikap, perilaku, dan pola hubungan untuk mencapai tujuan bersama."
  },
  {
    id: 2,
    topic: "Konsep Dasar Dinamika Kelompok",
    question: "Manakah yang BUKAN merupakan fungsi utama dari dinamika kelompok dalam pelayanan masyarakat?",
    options: [
      "Membentuk kerja sama untuk memecahkan masalah",
      "Mengurangi beban kerja dengan pembagian tugas",
      "Menciptakan iklim otoriter untuk mempercepat keputusan",
      "Menciptakan iklim demokratis bagi setiap anggota"
    ],
    answer: 2,
    explanation: "Fungsi dinamika kelompok adalah menciptakan iklim demokratis di mana setiap anggota bisa memberi masukan, bukan iklim otoriter."
  },
  {
    id: 3,
    topic: "Konsep Dasar Dinamika Kelompok",
    question: "Aturan tidak tertulis yang mengatur tata cara dan perilaku anggota dalam suatu kelompok dinamakan...",
    options: [
      "Struktur Kelompok",
      "Norma Kelompok",
      "Peran Tugas",
      "Kohesivitas"
    ],
    answer: 1,
    explanation: "Norma kelompok merupakan aturan tidak tertulis yang mengatur dan memandu perilaku seluruh anggota kelompok."
  },
  {
    id: 4,
    topic: "Konsep Dasar Dinamika Kelompok",
    question: "Kelompok yang terbentuk secara spontan dari interaksi sosial sehari-hari tanpa aturan tertulis resmi dinamakan...",
    options: [
      "Kelompok Formal",
      "Kelompok Tugas",
      "Kelompok Sekunder",
      "Kelompok Informal"
    ],
    answer: 3,
    explanation: "Kelompok informal terbentuk secara spontan dari interaksi sosial sehari-hari berdasarkan minat atau pertemanan tanpa aturan resmi tertulis."
  },
  {
    id: 5,
    topic: "Konsep Dasar Dinamika Kelompok",
    question: "Ciri khas utama yang membedakan Kelompok Primer (Primary Group) dengan Kelompok Sekunder adalah...",
    options: [
      "Hubungan bersifat impersonal dan anggotanya sangat besar",
      "Hubungan akrab, emosional, dan jumlah anggotanya kecil",
      "Dibentuk khusus oleh instansi pemerintah secara formal",
      "Hanya berfokus pada pencapaian tugas tanpa iklim emosional"
    ],
    answer: 1,
    explanation: "Kelompok primer ditandai dengan hubungan yang sangat akrab, erat secara emosional, dan biasanya beranggotakan kelompok kecil (seperti keluarga atau sahabat)."
  },

  // --- TAHAPAN PEMBENTUKAN KELOMPOK / TUCKMAN (Soal 6-10) ---
  {
    id: 6,
    topic: "Tahapan Pertumbuhan Kelompok",
    question: "Tahap awal pembentukan kelompok di mana anggota baru berkumpul, komunikasi masih formal, dan terdapat banyak ketidakjelasan peran dinamakan tahap...",
    options: [
      "Storming",
      "Forming",
      "Norming",
      "Performing"
    ],
    answer: 1,
    explanation: "Forming adalah tahap pembentukan awal di mana anggota baru berkumpul dan masih orientasi serta menyesuaikan diri."
  },
  {
    id: 7,
    topic: "Tahapan Pertumbuhan Kelompok",
    question: "Tahap dalam perkembangan kelompok yang ditandai dengan timbulnya konflik internal, perbedaan pendapat, dan perebutan peran dinamakan...",
    options: [
      "Forming",
      "Storming",
      "Norming",
      "Adjourning"
    ],
    answer: 1,
    explanation: "Storming (tahap pancaroba) ditandai dengan mulai munculnya konflik internal, perbedaan argumen, dan klarifikasi peran."
  },
  {
    id: 8,
    topic: "Tahapan Pertumbuhan Kelompok",
    question: "Pada tahap apakah kelompok mulai menemukan ritme kerja, menyepakati norma/aturan bersama, dan menumbuhkan rasa percaya?",
    options: [
      "Forming",
      "Storming",
      "Norming",
      "Adjourning"
    ],
    answer: 2,
    explanation: "Norming adalah tahap pembentukan norma di mana norma dan aturan disepakati, kerja sama mulai terbangun, serta keharmonisan tumbuh."
  },
  {
    id: 9,
    topic: "Tahapan Pertumbuhan Kelompok",
    question: "Tahap puncak di mana kelompok berfungsi secara mandiri, otonom, sangat produktif, dan berfokus penuh pada pencapaian tujuan dinamakan...",
    options: [
      "Performing",
      "Norming",
      "Storming",
      "Forming"
    ],
    answer: 0,
    explanation: "Performing (tahap berprestasi/berkinerja) merupakan puncak produktivitas di mana tim bekerja otonom dan efektif sebagai satu kesatuan."
  },
  {
    id: 10,
    topic: "Tahapan Pertumbuhan Kelompok",
    question: "Tahap akhir pertumbuhan kelompok saat tugas/proyek telah selesai dilaksanakan dan tim akan dibubarkan disebut...",
    options: [
      "Performing",
      "Norming",
      "Adjourning",
      "Storming"
    ],
    answer: 2,
    explanation: "Adjourning adalah tahap akhir pembubaran kelompok setelah seluruh rangkaian tugas atau proyek selesai diselesaikan."
  },

  // --- PRINSIP KERJA SAMA TIM (Soal 11-15) ---
  {
    id: 11,
    topic: "Prinsip Kerja Sama Tim",
    question: "Di bawah ini yang merupakan contoh penerapan prinsip 'Be Reliable' (Dapat Diandalkan) dalam tim adalah...",
    options: [
      "Hadir rapat tepat waktu dan memenuhi tenggat waktu (deadline)",
      "Mengubah rencana secara mendadak tanpa koordinasi",
      "Menyampaikan ide sebanyak-banyaknya tanpa mendengarkan orang lain",
      "Hanya hadir saat evaluasi akhir proyek saja"
    ],
    answer: 0,
    explanation: "Be Reliable artinya dapat diandalkan, seperti menepati janji, datang tepat waktu, dan menyelesaikan tugas sesuai deadline."
  },
  {
    id: 12,
    topic: "Prinsip Kerja Sama Tim",
    question: "Kondisi di mana gabungan kontribusi anggota tim menghasilkan kinerja yang jauh lebih besar dibandingkan jika mereka bekerja sendiri-sendiri disebut...",
    options: [
      "Konformitas",
      "Sinergi Tim",
      "Groupthink",
      "Interdependensi Pasif"
    ],
    answer: 1,
    explanation: "Sinergi terjadi ketika gabungan kekuatan dan kontribusi unik anggota menghasilkan output/kinerja yang lebih besar daripada penjumlahan hasil kerja individu."
  },
  {
    id: 13,
    topic: "Prinsip Kerja Sama Tim",
    question: "Peran dalam tim yang berfokus pada menjaga keharmonisan, motivasi, dan hubungan baik antaranggota kelompok disebut...",
    options: [
      "Peran Tugas (Task Roles)",
      "Peran Pemeliharaan (Maintenance Roles)",
      "Peran Individual",
      "Peran Struktural Formal"
    ],
    answer: 1,
    explanation: "Maintenance Roles (Peran Pemeliharaan) bertugas menjaga dinamika positif, hubungan baik, dan keharmonisan di dalam tim."
  },
  {
    id: 14,
    topic: "Prinsip Kerja Sama Tim",
    question: "Penyampaian umpan balik (feedback) yang konstruktif sebaiknya disampaikan dengan cara...",
    options: [
      "Menyerang kepribadian individu agar merasa jera",
      "Spesifik, berfokus pada pekerjaan, dan disertai saran perbaikan",
      "Mengumbar kesalahan di depan umum tanpa memberikan solusi",
      "Menyimpan masukan sampai proyek selesai sepenuhnya"
    ],
    answer: 1,
    explanation: "Feedback konstruktif harus bersifat spesifik, berfokus pada tugas/perilaku, obyektif, serta menawarkan saran perbaikan."
  },
  {
    id: 15,
    topic: "Prinsip Kerja Sama Tim",
    question: "Perbedaan mendasar antara Kelompok (Group) dan Tim (Team) terletak pada...",
    options: [
      "Jumlah anggotanya yang selalu berbeda jauh",
      "Adanya Shared Goal (tujuan bersama) dan saling ketergantungan (interdependent) pada Tim",
      "Kelompok tidak memiliki pemimpin sedangkan Tim selalu memiliki struktur tertulis",
      "Tim hanya dibentuk untuk hubungan sosial jangka panjang"
    ],
    answer: 1,
    explanation: "Tim memiliki tujuan bersama yang disepakati (shared goal) serta adanya saling ketergantungan dan akuntabilitas kolektif."
  },

  // --- TEAM BUILDING SEKTOR KESEHATAN (Soal 16-20) ---
  {
    id: 16,
    topic: "Team Building Kesehatan",
    question: "Sinergi kolaborasi antara Dokter, Ahli Gizi, Sanitarian, Epidemiolog, dan Kader Kesehatan dalam menangani masalah stunting dinamakan...",
    options: [
      "Interprofessional Collaboration (IPC)",
      "Single-discipline Medical Services",
      "Keterbukaan Diri Pasif",
      "Intrapersonal Dynamic"
    ],
    answer: 0,
    explanation: "IPC (Interprofessional Collaboration) adalah kolaborasi lintas profesi kesehatan untuk menyelesaikan masalah kesehatan masyarakat yang kompleks."
  },
  {
    id: 17,
    topic: "Team Building Kesehatan",
    question: "Kondisi di mana anggota tim merasa aman untuk angkat bicara, melaporkan kendala, atau mengakui kesalahan tanpa takut dihakimi disebut...",
    options: [
      "Social Cohesion",
      "Keselamatan Psikologis (Psychological Safety)",
      "Conformity",
      "Groupthink"
    ],
    answer: 1,
    explanation: "Keselamatan Psikologis adalah suasana di mana anggota merasa aman untuk berpendapat atau mengakui kesalahan tanpa rasa takut dihakimi."
  },
  {
    id: 18,
    topic: "Team Building Kesehatan",
    question: "Permainan seperti 'Dua Fakta Satu Bohong' dalam rangkaian kegiatan team building bertujuan sebagai...",
    options: [
      "Problem Solving Exercise",
      "Ice Breaking untuk mencairkan suasana dan ketegangan",
      "Simulasi Kolaboratif Tingkat Tinggi",
      "Evaluasi Kinerja Tahunan"
    ],
    answer: 1,
    explanation: "Kegiatan tersebut merupakan bentuk Ice Breaking yang bertujuan mencairkan suasana, menghilangkan kecanggokkan, dan mencairkan komunikasi."
  },
  {
    id: 19,
    topic: "Team Building Kesehatan",
    question: "Permainan 'Blindfold Obstacle Course' (pemanduan teman yang ditutup matanya) sangat cocok dilaksanakan pada tahap pembentukan...",
    options: [
      "Trust-Building Exercise (Membangun Kepercayaan)",
      "Performing Stage",
      "Adjourning Stage",
      "Evaluasi Akhir Proyek"
    ],
    answer: 0,
    explanation: "Permainan rintangan mata tertutup bertujuan melatih kepercayaan (Trust-Building), komunikasi verbal yang presisi, dan empati."
  },
  {
    id: 20,
    topic: "Team Building Kesehatan",
    question: "Manakah yang merupakan salah satu hambatan terbesar dalam membangun tim yang efektif?",
    options: [
      "Komunikasi yang terbuka dan jujur",
      "Konflik yang dibiarkan berlarut-larut tanpa penyelesaian",
      "Adanya keberagaman latar belakang keahlian",
      "Tujuan bersama yang spesifik dan terukur"
    ],
    answer: 1,
    explanation: "Konflik yang dibiarkan berlarut-larut tanpa adanya resolusi akan merusak rasa saling percaya dan meruntuhkan produktivitas tim."
  },

  // --- KOMUNIKASI DALAM KELOMPOK (Soal 21-25) ---
  {
    id: 21,
    topic: "Komunikasi Kelompok",
    question: "Model komunikasi di mana proses pengiriman dan penerimaan pesan serta umpan balik (feedback) berlangsung secara simultan dan bergantian dinamakan...",
    options: [
      "Model Komunikasi Linier",
      "Model Komunikasi Transaksional",
      "Komunikasi Satu Arah",
      "Komunikasi Komanditer"
    ],
    answer: 1,
    explanation: "Model transaksional memandang komunikasi sebagai proses dua arah yang dinamis di mana pengirim dan penerima bertukar peran secara simultan."
  },
  {
    id: 22,
    topic: "Komunikasi Kelompok",
    question: "Fenomena di mana anggota kelompok cenderung menghindari konflik dan menyetujui keputusan bersama meskipun keputusan tersebut kurang tepat dinamakan...",
    options: [
      "Active Listening",
      "Groupthink (Pemikiran Kelompok)",
      "Sandwich Feedback",
      "Self-Disclosure"
    ],
    answer: 1,
    explanation: "Groupthink terjadi ketika dorongan untuk mencapai konsensus membuat kelompok mengabaikan alternatif pemikiran lain yang lebih rasional."
  },
  {
    id: 23,
    topic: "Komunikasi Kelompok",
    question: "Kecenderungan seseorang untuk mengikuti perilaku atau pendapat mayoritas kelompok meskipun bertentangan dengan pandangan pribadinya disebut...",
    options: [
      "Konformitas (Conformity)",
      "Kohesivitas",
      "Empati",
      "Inisiatif Individual"
    ],
    answer: 0,
    explanation: "Konformitas adalah tekanan sosial yang membuat individu menyesuaikan diri dan mengikuti suara mayoritas kelompok."
  },
  {
    id: 24,
    topic: "Komunikasi Kelompok",
    question: "Penggunaan strategi 'Sandwich Feedback' dalam memberikan evaluasi dilakukan dengan urutan...",
    options: [
      "Kritik keras -> Apresiasi -> Teguran",
      "Apresiasi -> Masukan/Saran -> Apresiasi",
      "Masukan -> Kritik -> Apresiasi",
      "Pujian berlebihan tanpa menyampaikan kekurangan"
    ],
    answer: 1,
    explanation: "Sandwich feedback diawali dengan pujian/apresiasi, diikuti saran/kritik membangun di tengah, dan ditutup kembali dengan apresiasi/motivasi."
  },
  {
    id: 25,
    topic: "Komunikasi Kelompok",
    question: "Kelompok yang dibentuk untuk memfasilitasi dukungan emosional dan berbagi pengalaman pribadi (seperti kelompok parenting) tergolong kelompok...",
    options: [
      "Kelompok Instruksional",
      "Kelompok Ekspresif",
      "Kelompok Formal Struktural",
      "Kelompok Tertutup"
    ],
    answer: 1,
    explanation: "Kelompok ekspresif berfokus pada pembentukan ikatan emosional, saling mendukung, dan berbagi pengalaman pribadi."
  },

  // --- KOHESIVITAS & KETERBUKAAN DIRI / JOHARI WINDOW (Soal 26-30) ---
  {
    id: 26,
    topic: "Kohesivitas & Keterbukaan Diri",
    question: "Daya tarik anggota terhadap kelompok secara keseluruhan dan tingkat keterikatan untuk bertahan dalam kelompok dinamakan...",
    options: [
      "Kohesivitas Kelompok",
      "Konformitas Kelompok",
      "Struktur Kelompok",
      "Dinamika Formal"
    ],
    answer: 0,
    explanation: "Kohesivitas kelompok adalah tingkat ketertarikan dan dorongan anggota untuk tetap bersatu dan mempertahankan keanggotaannya."
  },
  {
    id: 27,
    topic: "Kohesivitas & Keterbukaan Diri",
    question: "Proses mengungkapkan dan berbagi informasi pribadi, pemikiran, serta perasaan kepada orang lain dinamakan...",
    options: [
      "Self-Disclosure (Keterbukaan Diri)",
      "Self-Fulfillment",
      "Blind Spot Isolation",
      "Group Defense Mechanism"
    ],
    answer: 0,
    explanation: "Self-disclosure adalah perilaku komunikasi di mana seseorang mengungkapkan informasi atau perasaan pribadi kepada orang lain."
  },
  {
    id: 28,
    topic: "Kohesivitas & Keterbukaan Diri",
    question: "Dalam konsep Johari Window, area yang memuat informasi yang 'Diketahui oleh orang lain, namun tidak disadari oleh diri sendiri' dinamakan...",
    options: [
      "Open Area",
      "Blind Spot",
      "Hidden Area",
      "Unknown Area"
    ],
    answer: 1,
    explanation: "Blind Spot (Titik Buta) adalah hal-hal mengenai diri kita yang dilihat atau diketahui orang lain tetapi tidak kita sadari sendiri."
  },
  {
    id: 29,
    topic: "Kohesivitas & Keterbukaan Diri",
    question: "Cara paling efektif untuk mempersempit area 'Blind Spot' dalam diagram Johari Window adalah dengan...",
    options: [
      "Menyimpan rahasia rapat-rapat",
      "Meminta masukan/umpan balik (feedback) yang jujur dari orang lain",
      "Menghindari diskusi kelompok kecil",
      "Menyalahkan anggota tim lain"
    ],
    answer: 1,
    explanation: "Meminta umpan balik (feedback) dari orang lain membantu kita menyadari kebiasaan yang tidak kita sadari, sehingga mempersempit Blind Spot."
  },
  {
    id: 30,
    topic: "Kohesivitas & Keterbukaan Diri",
    question: "Manakah pernyataan yang BENAR mengenai hubungan ukuran 'Open Area' pada Johari Window dengan kualitas komunikasi tim?",
    options: [
      "Semakin sempit Open Area, semakin baik tingkat kepercayaan tim",
      "Semakin luas Open Area, semakin tinggi tingkat kepercayaan dan efektivitas komunikasi tim",
      "Luas Open Area tidak memengaruhi komunikasi kelompok",
      "Open Area yang luas hanya menimbulkan konflik internal"
    ],
    answer: 1,
    explanation: "Semakin luas Open Area (wilayah terbuka), semakin tinggi rasa percaya, transparansi, dan efektivitas komunikasi di dalam tim."
  }
];

// State Management khusus Dinamika Kelompok
let dinamikaCurrentQuizData = [];
let dinamikaCurrentIndex = 0;
let dinamikaUserAnswers = [];

function dinamikaShuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function initDinamikaQuiz() {
  dinamikaCurrentQuizData = dinamikaShuffleArray(dinamikaKelompokQuizData);
  dinamikaCurrentIndex = 0;
  dinamikaUserAnswers = new Array(dinamikaCurrentQuizData.length).fill(null);
  
  const totalNumEl = document.getElementById("quiz-total-num-dinamika");
  const resultCard = document.getElementById("quiz-result-card-dinamika");
  
  if (totalNumEl) totalNumEl.textContent = dinamikaCurrentQuizData.length;
  if (resultCard) resultCard.classList.add("hidden");
  
  renderDinamikaPalette();
  renderDinamikaQuestion();
}

function renderDinamikaPalette() {
  const numberPalette = document.getElementById("quiz-number-palette-dinamika");
  if (!numberPalette) return;
  numberPalette.innerHTML = "";

  dinamikaCurrentQuizData.forEach((_, idx) => {
    const pBtn = document.createElement("button");
    pBtn.type = "button";
    pBtn.textContent = idx + 1;
    pBtn.style.cssText = "width: 32px; height: 32px; padding: 0; font-size: 0.8rem; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; cursor: pointer;";
    
    if (idx === dinamikaCurrentIndex) {
      pBtn.style.border = "2px solid var(--accent-blue)";
      pBtn.style.fontWeight = "bold";
    }
    
    if (dinamikaUserAnswers[idx] !== null) {
      const isCorrect = dinamikaUserAnswers[idx] === dinamikaCurrentQuizData[idx].answer;
      pBtn.style.backgroundColor = isCorrect ? "#10b981" : "#ef4444";
      pBtn.style.color = "#ffffff";
      pBtn.style.border = "none";
    } else {
      pBtn.style.backgroundColor = "#ffffff";
      pBtn.style.color = "var(--text-color)";
      pBtn.style.border = "1px solid var(--border-color)";
    }

    pBtn.onclick = () => {
      dinamikaCurrentIndex = idx;
      renderDinamikaQuestion();
    };

    numberPalette.appendChild(pBtn);
  });
}

function renderDinamikaQuestion() {
  resetDinamikaQuizState();
  renderDinamikaPalette();

  const item = dinamikaCurrentQuizData[dinamikaCurrentIndex];

  const currentNumEl = document.getElementById("quiz-current-num-dinamika");
  const topicTag = document.getElementById("quiz-topic-tag-dinamika");
  const questionText = document.getElementById("quiz-question-dinamika");
  const progressFill = document.getElementById("quiz-progress-fill-dinamika");
  const prevButton = document.getElementById("quiz-prev-btn-dinamika");
  const nextButton = document.getElementById("quiz-next-btn-dinamika");
  const optionsGrid = document.getElementById("quiz-options-dinamika");

  if (currentNumEl) currentNumEl.textContent = dinamikaCurrentIndex + 1;
  if (topicTag) topicTag.textContent = item.topic;
  if (questionText) questionText.textContent = item.question;

  const answeredCount = dinamikaUserAnswers.filter(a => a !== null).length;
  const pct = (answeredCount / dinamikaCurrentQuizData.length) * 100;
  if (progressFill) progressFill.style.width = `${pct}%`;

  if (prevButton) {
    if (dinamikaCurrentIndex > 0) prevButton.classList.remove("hidden");
    else prevButton.classList.add("hidden");
    prevButton.onclick = () => {
      if (dinamikaCurrentIndex > 0) { dinamikaCurrentIndex--; renderDinamikaQuestion(); }
    };
  }

  if (nextButton) {
    nextButton.textContent = (dinamikaCurrentIndex === dinamikaCurrentQuizData.length - 1) ? "Lihat Hasil Akhir 🎉" : "Soal Selanjutnya \u2192";
    nextButton.onclick = () => {
      if (dinamikaCurrentIndex < dinamikaCurrentQuizData.length - 1) {
        dinamikaCurrentIndex++;
        renderDinamikaQuestion();
      } else {
        renderDinamikaResult();
      }
    };
  }

  if (optionsGrid) {
    item.options.forEach((optText, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-opt-btn";
      btn.innerHTML = `<span style="font-weight: 700; color: var(--text-muted);">${String.fromCharCode(65 + idx)}.</span> <span>${optText}</span>`;
      
      if (dinamikaUserAnswers[dinamikaCurrentIndex] !== null) {
        btn.disabled = true;
        if (idx === item.answer) {
          btn.classList.add("is-correct");
        }
        if (dinamikaUserAnswers[dinamikaCurrentIndex] === idx && idx !== item.answer) {
          btn.classList.add("is-wrong");
        }
      } else {
        btn.onclick = () => handleDinamikaSelectOption(idx);
      }

      optionsGrid.appendChild(btn);
    });
  }

  if (dinamikaUserAnswers[dinamikaCurrentIndex] !== null) {
    showDinamikaFeedback(dinamikaUserAnswers[dinamikaCurrentIndex] === item.answer, item.explanation);
  }
}

function resetDinamikaQuizState() {
  const feedbackBox = document.getElementById("quiz-feedback-dinamika");
  const optionsGrid = document.getElementById("quiz-options-dinamika");

  if (feedbackBox) {
    feedbackBox.className = "info-box hidden";
    feedbackBox.innerHTML = "";
  }
  if (optionsGrid) optionsGrid.innerHTML = "";
}

function handleDinamikaSelectOption(chosenIdx) {
  dinamikaUserAnswers[dinamikaCurrentIndex] = chosenIdx;
  renderDinamikaQuestion();
}

function showDinamikaFeedback(isCorrect, explanation) {
  const feedbackBox = document.getElementById("quiz-feedback-dinamika");
  if (!feedbackBox) return;

  if (isCorrect) {
    feedbackBox.className = "info-box";
    feedbackBox.style.cssText = "background-color: var(--success-bg); border-left: 4px solid var(--secondary-color); color: #065f46;";
    feedbackBox.innerHTML = `<strong>Jawaban Benar!</strong> ${explanation}`;
  } else {
    feedbackBox.className = "info-box";
    feedbackBox.style.cssText = "background-color: var(--danger-bg); border-left: 4px solid var(--danger-color); color: #991b1b;";
    feedbackBox.innerHTML = `<strong>Kurang Tepat.</strong> ${explanation}`;
  }
  feedbackBox.classList.remove("hidden");
}

function renderDinamikaResult() {
  const mainContainer = document.getElementById("quiz-main-container-dinamika");
  const resultCard = document.getElementById("quiz-result-card-dinamika");
  const finalScoreVal = document.getElementById("quiz-final-score-val-dinamika");
  const finalDetailEl = document.getElementById("quiz-final-detail-dinamika");
  const restartBtn = document.getElementById("quiz-restart-btn-dinamika");

  if (mainContainer) mainContainer.classList.add("hidden");
  if (resultCard) resultCard.classList.remove("hidden");

  let correctCount = 0;
  dinamikaUserAnswers.forEach((ans, idx) => {
    if (ans === dinamikaCurrentQuizData[idx].answer) correctCount++;
  });

  const percentage = Math.round((correctCount / dinamikaCurrentQuizData.length) * 100);

  if (finalScoreVal) finalScoreVal.textContent = percentage;
  if (finalDetailEl) {
    finalDetailEl.innerHTML = `Kamu berhasil menjawab <strong>${correctCount} dari ${dinamikaCurrentQuizData.length} soal</strong> dengan benar.`;
  }

  if (restartBtn) {
    restartBtn.onclick = () => {
      if (resultCard) resultCard.classList.add("hidden");
      const startScreen = document.getElementById("quiz-start-screen-dinamika");
      if (startScreen) startScreen.classList.remove("hidden");
    };
  }
}
