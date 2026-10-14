// daskespro.js - Modul Kuis Dasar Kesehatan Reproduksi & Keluarga (Ratrakit)

const daskesproQuizData = [
  {
    question: "1. Pada tahun berapakah istilah 'kesehatan reproduksi' mulai populer secara internasional dalam Konferensi ICPD di Kairo?",
    options: ["a. 1987", "b. 1990", "c. 1994", "d. 2009"],
    answer: "c. 1994",
    explanation: "Istilah 'kesehatan reproduksi' mulai populer tahun 1994 pada Konferensi Internasional tentang Kependudukan dan Pembangunan (ICPD) di Kairo."
  },
  {
    question: "2. Undang-Undang Republik Indonesia Nomor berapakah yang mengatur tentang definisi kesehatan reproduksi pada Pasal 71?",
    options: ["a. UU No. 36 Tahun 2009", "b. UU No. 52 Tahun 2009", "c. UU No. 17 Tahun 2023", "d. UU No. 16 Tahun 2019"],
    answer: "a. UU No. 36 Tahun 2009",
    explanation: "Pasal 71 UU No. 36 Tahun 2009 mengatur pengertian dan cakupan kesehatan reproduksi di Indonesia."
  },
  {
    question: "3. Prinsip dasar kesehatan reproduksi yang menjamin kesetaraan hak dan peran antara laki-laki dan perempuan disebut...",
    options: ["a. Universalitas", "b. Keadilan Gender", "c. Partisipasi Subjektif", "d. Kemandirian Fisiologis"],
    answer: "b. Keadilan Gender",
    explanation: "Keadilan dan kesetaraan gender menjamin hak serta tanggung jawab yang sama dalam kesehatan reproduksi."
  },
  {
    question: "4. Berapa batasan usia remaja menurut Permenkes RI No. 25 Tahun 2014?",
    options: ["a. 10 - 19 Tahun", "b. 10 - 18 Tahun", "c. 12 - 21 Tahun", "d. 15 - 24 Tahun"],
    answer: "b. 10 - 18 Tahun",
    explanation: "Permenkes RI No. 25 Tahun 2014 mendefinisikan remaja pada rentang usia 10-18 tahun (sedangkan WHO menetapkan 10-19 tahun)."
  },
  {
    question: "5. Tahun berapakah program Pelayanan Kesehatan Peduli Remaja (PKPR) pertama kali diperkenalkan di Indonesia?",
    options: ["a. 1997", "b. 2003", "c. 2014", "d. 2019"],
    answer: "b. 2003",
    explanation: "Program PKPR mulai diinisiasi pada tahun 2003 dan diperkuat dengan Standar Nasional PKPR pada tahun 2014."
  },
  {
    question: "6. Berikut yang BUKAN merupakan salah satu dari 5 Standar Nasional PKPR adalah...",
    options: [
      "a. Sumber Daya Manusia (SDM) kesehatan",
      "b. Jejaring dan Kerjasama Lintas Sektor",
      "c. Pemberian Alat Kontrasepsi Bebas bagi Remaja Belum Menikah",
      "d. Sarana dan Prasarana Kesehatan Remaja"
    ],
    answer: "c. Pemberian Alat Kontrasepsi Bebas bagi Remaja Belum Menikah",
    explanation: "Standar PKPR mencakup SDM, sarana prasarana, keterlibatan remaja, jejaring lintas sektor, dan manajemen faskes."
  },
  {
    question: "7. Pihak mana sajakah yang dapat memberikan layanan konseling kesehatan reproduksi remaja dalam skema PKPR?",
    options: [
      "a. Tenaga Kesehatan saja",
      "b. Guru BK saja",
      "c. Tenaga Kesehatan, Guru terlatih, dan Konselor Sebaya",
      "d. Orang tua murid saja"
    ],
    answer: "c. Tenaga Kesehatan, Guru terlatih, dan Konselor Sebaya",
    explanation: "Konseling PKPR memanfaatkan tenaga kesehatan, guru terlatih, serta konselor sebaya untuk pendekatan yang konsisttif."
  },
  {
    question: "8. Peraturan Pemerintah nomor berapa yang memuat ketentuan khusus upaya kesehatan sistem reproduksi anak usia sekolah dan remaja?",
    options: ["a. PP No. 61 Tahun 2014", "b. PP No. 28 Tahun 2024", "c. Permenkes No. 21 Tahun 2021", "d. UU No. 17 Tahun 2023"],
    answer: "b. PP No. 28 Tahun 2024",
    explanation: "PP No. 28 Tahun 2024 mengatur ketentuan pelaksana kesehatan reproduksi anak usia sekolah dan remaja."
  },
  {
    question: "9. Berdasarkan UU No. 16 Tahun 2019, batas usia minimal perkawinan untuk pria dan wanita di Indonesia adalah...",
    options: ["a. 16 Tahun", "b. 17 Tahun", "c. 18 Tahun", "d. 19 Tahun"],
    answer: "d. 19 Tahun",
    explanation: "UU No. 16 Tahun 2019 menaikkan batas minimal usia pernikahan bagi wanita menjadi 19 tahun, setara dengan pria."
  },
  {
    question: "10. Provinsi di Indonesia yang mencatatkan proporsi pernikahan dini anak (10-14 tahun) tertinggi periode 2020-2022 adalah...",
    options: ["a. Papua Barat", "b. Jawa Timur", "c. Sulawesi Barat", "d. DKI Jakarta"],
    answer: "b. Jawa Timur",
    explanation: "Berdasarkan data statistik kependudukan, Jawa Timur mencatatkan persentase tertinggi untuk kelompok usia 10-14 tahun pada rentang periode tersebut."
  },
  {
    question: "11. Infeksi Menular Seksual (IMS) yang menjadi faktor etiologi utama terjadinya kanker serviks pada wanita adalah...",
    options: ["a. Neisseria gonorrhoeae", "b. Human Papillomavirus (HPV)", "c. Chlamydia trachomatis", "d. Treponema pallidum"],
    answer: "b. Human Papillomavirus (HPV)",
    explanation: "Infeksi persisten tipe HPV risiko tinggi (seperti HPV 16 dan 18) memicu displasia serviks hingga kanker serviks."
  },
  {
    question: "12. Mengapa remaja perempuan secara biologis lebih rentan terhadap komplikasi Infeksi Menular Seksual (IMS)?",
    options: [
      "a. Ektropion serviks/pematangan serviks belum sempurna serta ektopi serviks yang luas",
      "b. Sistem imunitas tubuh belum terbentuk sama sekali",
      "c. Tingkat keasaman (pH) vagina yang terlalu tinggi",
      "d. Volume darah menstruasi yang sedikit"
    ],
    answer: "a. Ektropion serviks/pematangan serviks belum sempurna serta ektopi serviks yang luas",
    explanation: "Secara anatomi, ektropion serviks pada remaja masih berkembang sehingga sel epitel kolumnar lebih terpapar patogen."
  },
  {
    question: "13. Lembaga Keluarga Berencana Nasional (LKBN) bertransformasi menjadi BKKBN melalui Keppres No. 8 pada tahun...",
    options: ["a. 1957", "b. 1967", "c. 1970", "d. 2009"],
    answer: "c. 1970",
    explanation: "BKKBN resmi dibentuk pada tahun 1970 untuk mengkoordinasikan pelaksanaan program KB nasional."
  },
  {
    question: "14. Sistem informasi pencatatan dan pelaporan pelayanan KB digital yang diterapkan secara terintegrasi oleh BKKBN adalah...",
    options: ["a. e-Puskesmas", "b. SIGA (Sistem Informasi Keluarga)", "c. SIMKES", "d. SIKLINIK"],
    answer: "b. SIGA (Sistem Informasi Keluarga)",
    explanation: "SIGA menjadi sistem pendataan operasional keluarga berbasis digital di tingkat lapangan hingga pusat."
  },
  {
    question: "15. Kelompok metode kontrasepsi berikut yang dikategorikan sebagai Metode Kontrasepsi Jangka Panjang (MKJP) adalah...",
    options: [
      "a. Kondom dan Pil KB",
      "b. Suntik 3 Bulan dan MAL",
      "c. IUD (AKDR), Implan, MOW (Tubektomi), dan MOP (Vasektomi)",
      "d. Diafragma dan Spermisida"
    ],
    answer: "c. IUD (AKDR), Implan, MOW (Tubektomi), dan MOP (Vasektomi)",
    explanation: "MKJP memberikan perlindungan kontrasepsi jangka panjang (3 tahun hingga permanen)."
  },
  {
    question: "16. Langkah-langkah konseling KB terstandar yang terdiri dari 6 tahapan dikenal dengan rumus...",
    options: ["a. BAKSOKU", "b. SATU TUJU", "c. 10 T", "d. GURIK MASS"],
    answer: "b. SATU TUJU",
    explanation: "SATU TUJU singkatan dari: Sapa, Tanya, Uraikan, Bantu, Jelaskan, dan Ulangi kunjungan."
  },
  {
    question: "17. Pasangan Usia Subur (PUS) yang belum pernah mengalami kehamilan setelah 12 bulan berhubungan intim secara teratur tanpa kontrasepsi disebut...",
    options: ["a. Infertilitas Sekunder", "b. Infertilitas Primer", "c. Unmet Need KB", "d. Amenorea Sekunder"],
    answer: "b. Infertilitas Primer",
    explanation: "Infertilitas primer merujuk pada kegagalan mencapai kehamilan pertama dalam kurun waktu minimal 1 tahun."
  },
  {
    question: "18. Sebutkan 4 Pilar Utama dalam strategi Safe Motherhood menurut WHO!",
    options: [
      "a. KB, Asuhan Antenatal (ANC), Persalinan Bersih & Aman, Pelayanan Obstetri Esensial",
      "b. Gizi, Sanitasi, Imunisasi, Pendidikan Kesehatan",
      "c. Posyandu, Puskesmas, Rumah Sakit, PONEK",
      "d. Remaja, Catin, Ibu Hamil, Ibu Nifas"
    ],
    answer: "a. KB, Asuhan Antenatal (ANC), Persalinan Bersih & Aman, Pelayanan Obstetri Esensial",
    explanation: "Empat pilar tersebut ditopang oleh pelayanan kesehatan dasar dan kesetaraan gender."
  },
  {
    question: "19. Batasan risiko kehamilan '4 Terlalu' mencakup faktor-faktor berikut, KECUALI...",
    options: ["a. Terlalu Muda (<20 tahun)", "b. Terlalu Tua (>35 tahun)", "c. Terlalu Luas (Luas wilayah tempat tinggal)", "d. Terlalu Banyak (>4 anak)"],
    answer: "c. Terlalu Luas (Luas wilayah tempat tinggal)",
    explanation: "'4 Terlalu' meliputi: Terlalu Muda, Terlalu Tua, Terlalu Dekat jarak kelahiran, dan Terlalu Banyak anak."
  },
  {
    question: "20. Berdasarkan standar ANC Terpadu Kemenkes RI terbaru, jumlah minimal kontak pemeriksaan kehamilan adalah...",
    options: ["a. 4 kali", "b. 6 kali (Trimester I: 1x, Trimester II: 2x, Trimester III: 3x)", "c. 8 kali", "d. 12 kali"],
    answer: "b. 6 kali (Trimester I: 1x, Trimester II: 2x, Trimester III: 3x)",
    explanation: "Standar terbaru mewajibkan minimal 6 kali kunjungan ANC dengan sedikitnya 2 kali pemeriksaan oleh dokter."
  },
  {
    question: "21. Perbedaan mendasar antara Maternal Mortality Ratio (MMR Rasio) dan Maternal Mortality Rate (MMR Rate) terletak pada pembaginya, yaitu...",
    options: [
      "a. MMR Rasio menggunakan pembagi Jumlah Kelahiran Hidup; MMR Rate menggunakan Jumlah Wanita Usia Subur (WUS)",
      "b. MMR Rasio dihitung per 1.000 penduduk; MMR Rate per 100.000 penduduk",
      "c. MMR Rasio khusus ibu usia muda; MMR Rate untuk semua usia ibu",
      "d. Tidak ada perbedaan"
    ],
    answer: "a. MMR Rasio menggunakan pembagi Jumlah Kelahiran Hidup; MMR Rate menggunakan Jumlah Wanita Usia Subur (WUS)",
    explanation: "Rasio AKI membandingkan kematian ibu dengan kelahiran hidup (per 100.000 KH), sedangkan Rate membandingkan dengan total WUS (per 1.000 WUS)."
  },
  {
    question: "22. Etiologi utama Perdarahan Postpartum (PPH) dirumuskan dalam prinsip '4T', yaitu...",
    options: [
      "a. Tonus, Tissue, Trauma, Thrombin",
      "b. Tekanan, Tensi, Tempat, Waktu",
      "c. Toksisitas, Trauma, Tetanus, Trombosis",
      "d. Tumor, TBC, Typhus, Toksoplasma"
    ],
    answer: "a. Tonus, Tissue, Trauma, Thrombin",
    explanation: "4T melambangkan: Tonus (Atonia uteri), Tissue (Retensio plasenta), Trauma (Laserasi jalan lahir), dan Thrombin (Ganggual koagulasi)."
  },
  {
    question: "23. Inovasi program pendampingan ibu hamil risiko tinggi secara terpadu di Kabupaten Banyumas dikenal dengan nama...",
    options: ["a. Jampersal", "b. KIRANA", "c. EMAS", "d. SIJARIEMAS"],
    answer: "b. KIRANA",
    explanation: "Program KIRANA (Kawal Ibu Hamil Risiko Tinggi Terintegrasi dan Terpadu) merupakan inovasi penanganan risiko maternal lokal."
  },
  {
    question: "24. Komponen kesiapan rujukan kebidanan 'BAKSOKU' untuk huruf 'K' pertama adalah...",
    options: ["a. Keuangan", "b. Keluarga", "c. Kendaraan", "d. Keterampilan Klinik"],
    answer: "c. Kendaraan",
    explanation: "BAKSOKU: Bidan, Alat, Keluarga, Surat, Obat, Kendaraan, dan Uang."
  },
  {
    question: "25. Rentang usia kehamilan fisiologis pada Trimester II berada pada usia gestasi...",
    options: ["a. 0 - 13 minggu", "b. 14 - 27 minggu", "c. 28 - 40 minggu", "d. 12 - 24 minggu"],
    answer: "b. 14 - 27 minggu",
    explanation: "Trimester I (0-13 minggu), Trimester II (14-27 minggu), Trimester III (28-40 minggu)."
  },
  {
    question: "26. Hormon glikoprotein yang dihasilkan oleh trofoblas pada awal kehamilan untuk mempertahankan korpus luteum adalah...",
    options: ["a. Estrogen", "b. Progesteron", "c. human Chorionic Gonadotropin (hCG)", "d. Human Placental Lactogen (hPL)"],
    answer: "c. human Chorionic Gonadotropin (hCG)",
    explanation: "hCG disekresikan sejak awal implantasi untuk menstimulasi korpus luteum memproduksi progesteron."
  },
  {
    question: "27. Kondisi penurunan kadar hemoglobin relatif pada ibu hamil akibat ekspansi volume plasma yang lebih besar dibanding eritrosit dinamakan...",
    options: ["a. Hemodilusi Fisiologis", "b. Hemolisis Patologis", "c. Leukositosis Fisiologis", "d. Trombositopenia Gestasional"],
    answer: "a. Hemodilusi Fisiologis",
    explanation: "Peningkatan volume darah plasma menyebabkan pengenceran darah (hemodilusi) yang wajar terjadi pada masa kehamilan."
  },
  {
    question: "28. Menurut Angka Kecukupan Gizi (AKG 2019), tambahan kebutuhan energi harian bagi ibu hamil Trimester II & III adalah...",
    options: ["a. +180 kkal/hari", "b. +300 kkal/hari", "c. +450 kkal/hari", "d. +500 kkal/hari"],
    answer: "b. +300 kkal/hari",
    explanation: "Rekomendasi AKG menambah +180 kkal pada Trimester I dan +300 kkal pada Trimester II & III."
  },
  {
    question: "29. Berapa tambahan asupan Protein harian yang direkomendasikan untuk ibu hamil Trimester III berdasarkan AKG 2019?",
    options: ["a. +1 gram/hari", "b. +10 gram/hari", "c. +30 gram/hari", "d. +40 gram/hari"],
    answer: "c. +30 gram/hari",
    explanation: "Tambahan protein bertahap: Trimester I (+1g), Trimester II (+10g), dan Trimester III (+30g)."
  },
  {
    question: "30. Suplementasi mikronutrien vital sebelum konsepsi dan awal kehamilan untuk mencegah Neural Tube Defects (NTD) adalah...",
    options: ["a. Asam Folat", "b. Kalsium", "c. Vitamin C", "d. Seng (Zinc)"],
    answer: "a. Asam Folat",
    explanation: "Asam folat penting untuk penutupan bumbung saraf janin pada 28 hari pertama pascakonsepsi."
  },
  {
    question: "31. Rekomendasi model pelayanan Antenatal Care (ANC) terbaru dari WHO menetapkan minimal...",
    options: ["a. 4 kali kontak", "b. 6 kali kontak", "c. 8 kali kontak", "d. 10 kali kontak"],
    answer: "c. 8 kali kontak",
    explanation: "WHO ANC Model menyarankan 8 kali kontak untuk menurunkan angka kematian perinatal dan meningkatkan kepuasan ibu."
  },
  {
    question: "32. Metode komunikasi edukasi kesehatan dengan meminta pasien menjelaskan kembali informasi menggunakan bahasanya sendiri dinamakan...",
    options: ["a. One-Way Presentation", "b. Teach-Back Method", "c. Peer Educator", "d. Motivational Interviewing"],
    answer: "b. Teach-Back Method",
    explanation: "Teach-back method memastikan tingkat pemahaman pemahaman pasien secara akurat."
  },
  {
    question: "33. Obat pilihan utama (gold standard) untuk penanganan serta pencegahan kejang pada kasus Preeklampsia Berat / Eklampsia adalah...",
    options: ["a. Diazepam", "b. Magnesium Sulfat (MgSO4)", "c. Nifedipin", "d. Oksitosin"],
    answer: "b. Magnesium Sulfat (MgSO4)",
    explanation: "MgSO4 diberikan sebagai antikonvulsan lini pertama pada kasus preeklampsia berat dan eklampsia."
  },
  {
    question: "34. Berdasarkan estimasi data BPS, proporsi populasi usia remaja (10-19 tahun) di Indonesia mencapai sekitar...",
    options: ["a. 20 Juta jiwa", "b. 32 Juta jiwa", "c. 44 Juta jiwa", "d. 60 Juta jiwa"],
    answer: "c. 44 Juta jiwa",
    explanation: "Populasi remaja Indonesia berkisar 44 juta jiwa (sekitar 15-16% dari total penduduk)."
  },
  {
    question: "35. Kebiasaan mengonsumsi teh segera setelah makan pada ibu hamil dapat memicu anemia karena kandungan tanin dalam teh...",
    options: [
      "a. Merusak eritrosit di intravascular",
      "b. Menghambat absorpsi zat besi (Fe) non-heme di usus",
      "c. Menghancurkan asam folat dalam lambung",
      "d. Mempercepat ekskresi kalsium melalui urin"
    ],
    answer: "b. Menghambat absorpsi zat besi (Fe) non-heme di usus",
    explanation: "Senyawa tanin dan polifenol mengikat zat besi membentuk senyawa tak larut yang sulit diserap usus."
  },
  {
    question: "36. Kematian ibu yang disebabkan komplikasi obstetri langsung terjadi lebih dari 42 hari tetapi kurang dari 1 tahun pascapersalinan disebut...",
    options: ["a. Direct Maternal Death", "b. Late Maternal Death", "c. Perinatal Mortality", "d. Non-Obstetric Death"],
    answer: "b. Late Maternal Death",
    explanation: "Kematian maternal akhir (Late Maternal Death) dicatat pada rentang >42 hari hingga <1 tahun pascapersalinan."
  },
  {
    question: "37. Angka kelahiran total / Total Fertility Rate (TFR) sasaran untuk mencapai Replacement Level kependudukan adalah...",
    options: ["a. 1.8", "b. 2.1", "c. 2.4", "d. 3.0"],
    answer: "b. 2.1",
    explanation: "TFR 2,1 berarti rata-rata seorang wanita melahirkan 2,1 anak selama masa reproduksinya untuk mempertahankan keseimbangan populasi."
  },
  {
    question: "38. Tanda bahaya kehamilan Trimester III yang memerlukan penanganan darurat segera meliputi...",
    options: [
      "a. Nyeri punggung bawah dan sering buang air kecil",
      "b. Perdarahan per vaginam, sakit kepala hebat disertai gangguan penglihatan, serta gerakan janin berkurang",
      "c. Mual di pagi hari dan pembesaran payudara",
      "d. Garis hitam di perut (linea nigra)"
    ],
    answer: "b. Perdarahan per vaginam, sakit kepala hebat disertai gangguan penglihatan, serta gerakan janin berkurang",
    explanation: "Tanda tersebut mengindikasikan solusio plasenta, preeklampsia berat, atau gawat janin."
  },
  {
    question: "39. Program Kampung KB (Kampung Keluarga Berkualitas) dicanangkan pertama kali secara nasional pada tahun...",
    options: ["a. 2009", "b. 2012", "c. 2016", "d. 2022"],
    answer: "c. 2016",
    explanation: "Kampung KB resmi diluncurkan oleh Presiden RI pada Januari 2016 sebagai penguatan program kependudukan berbasis desa."
  },
  {
    question: "40. Fasilitas kesehatan tingkat Rumah Sakit yang menyediakan Pelayanan Obstetrik Neonatal Emergensi Komprehensif selama 24 jam disebut...",
    options: ["a. PONED", "b. PONEK", "c. Poskesdes", "d. Puskesmas Pembantu"],
    answer: "b. PONEK",
    explanation: "PONEK diselenggarakan di Rumah Sakit rujukan, sedangkan PONED diselenggarakan di Puskesmas rawat inap."
  }
];

// Controller State
let currentQuestionIndex = 0;
let userAnswers = {};

// UI Engine Implementation
function initDasKesProQuiz() {
  const container = document.getElementById("quiz-container");
  if (!container) return;

  renderQuizUI(container);
}

function renderQuizUI(container) {
  const q = daskesproQuizData[currentQuestionIndex];
  const total = daskesproQuizData.length;
  const isAnswered = userAnswers[currentQuestionIndex] !== undefined;
  const selectedAns = userAnswers[currentQuestionIndex];

  let optionsHTML = q.options.map((opt) => {
    let btnStyle = "btn-outline-primary";
    if (isAnswered) {
      if (opt === q.answer) {
        btnStyle = "btn-success";
      } else if (opt === selectedAns) {
        btnStyle = "btn-danger";
      } else {
        btnStyle = "btn-light";
      }
    } else if (opt === selectedAns) {
      btnStyle = "btn-primary";
    }

    return `
      <button class="btn ${btnStyle} option-btn text-start w-100 mb-2" 
              onclick="selectAnswer('${opt}')" 
              ${isAnswered ? 'disabled' : ''}>
        ${opt}
      </button>
    `;
  }).join("");

  let explanationHTML = "";
  if (isAnswered) {
    const isCorrect = selectedAns === q.answer;
    explanationHTML = `
      <div class="alert ${isCorrect ? 'alert-success' : 'alert-danger'} mt-3">
        <strong>${isCorrect ? '✓ Benar!' : '✗ Salah!'}</strong><br>
        <strong>Kunci Jawaban:</strong> ${q.answer}<br>
        <hr class="my-2">
        <strong>Pembahasan:</strong> ${q.explanation}
      </div>
    `;
  }

  container.innerHTML = `
    <div class="card shadow-sm border-0">
      <div class="card-header bg-dark text-white d-flex justify-content-between align-items-center">
        <h5 class="mb-0">Dasar Kesehatan Reproduksi & Keluarga</h5>
        <span class="badge bg-primary">Soal ${currentQuestionIndex + 1} / ${total}</span>
      </div>
      <div class="card-body">
        <p class="card-text fw-bold fs-5">${q.question}</p>
        <div class="options-group mt-3">
          ${optionsHTML}
        </div>
        ${explanationHTML}
      </div>
      <div class="card-footer bg-light d-flex justify-content-between">
        <button class="btn btn-secondary" onclick="prevQuestion()" ${currentQuestionIndex === 0 ? 'disabled' : ''}>
          &laquo; Sebelumnya
        </button>
        ${currentQuestionIndex === total - 1 ? `
          <button class="btn btn-success" onclick="finishQuiz()" ${!isAnswered ? 'disabled' : ''}>
            Selesai & Lihat Skor
          </button>
        ` : `
          <button class="btn btn-primary" onclick="nextQuestion()" ${!isAnswered ? 'disabled' : ''}>
            Selanjutnya &raquo;
          </button>
        `}
      </div>
    </div>
  `;
}

function selectAnswer(opt) {
  userAnswers[currentQuestionIndex] = opt;
  renderQuizUI(document.getElementById("quiz-container"));
}

function nextQuestion() {
  if (currentQuestionIndex < daskesproQuizData.length - 1) {
    currentQuestionIndex++;
    renderQuizUI(document.getElementById("quiz-container"));
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuizUI(document.getElementById("quiz-container"));
  }
}

function finishQuiz() {
  let score = 0;
  daskesproQuizData.forEach((q, idx) => {
    if (userAnswers[idx] === q.answer) {
      score++;
    }
  });

  const percentage = ((score / daskesproQuizData.length) * 100).toFixed(1);
  const container = document.getElementById("quiz-container");

  container.innerHTML = `
    <div class="card shadow-sm border-0 text-center p-4">
      <h3 class="fw-bold">Kuis Selesai! 🎉</h3>
      <div class="display-3 my-3 text-primary fw-bold">${percentage}%</div>
      <p class="fs-5">Anda menjawab <strong>${score}</strong> dari <strong>${daskesproQuizData.length}</strong> soal dengan benar.</p>
      <div class="d-flex justify-content-center gap-2 mt-3">
        <button class="btn btn-outline-primary" onclick="restartQuiz()">Ulangi Kuis</button>
      </div>
    </div>
  `;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  userAnswers = {};
  initDasKesProQuiz();
}

// Auto-init saat DOM dimuat
document.addEventListener("DOMContentLoaded", initDasKesProQuiz);
