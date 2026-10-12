// Bank Soal Materi Epidemiologi Penyakit Menular (40 Soal)
const quizData = [
  // --- ISPA & PNEUMONIA (Soal 1-5) ---
  {
    id: 1,
    topic: "ISPA & Pneumonia",
    question: "Penyebab utama (etiologi) pneumonia pada anak balita dari golongan bakteri yang paling sering ditemukan adalah...",
    options: [
      "Streptococcus pneumoniae dan Haemophilus influenzae tipe b",
      "Rhinovirus dan Coronavirus",
      "Bacillus anthracis dan Leptospira",
      "Mycobacterium tuberculosis dan Salmonella"
    ],
    answer: 0,
    explanation: "Pneumonia paling sering disebabkan oleh infeksi bakteri Streptococcus pneumoniae dan Haemophilus influenzae tipe b (Hib)."
  },
  {
    id: 2,
    topic: "ISPA & Pneumonia",
    question: "Sebagian besar kasus ISPA bagian atas (seperti batuk dan pilek) disebabkan oleh...",
    options: [
      "Jamur Candida",
      "Infeksi Virus (Rhinovirus, Adenovirus)",
      "Bakteri Gram Negatif",
      "Parasit Protozoa"
    ],
    answer: 1,
    explanation: "ISPA bagian atas umumnya disebabkan oleh berbagai jenis virus seperti Rhinovirus, Adenovirus, dan Coronavirus."
  },
  {
    id: 3,
    topic: "ISPA & Pneumonia",
    question: "Manakah faktor risiko lingkungan dalam rumah yang dapat meningkatkan kejadian ISPA pada balita?",
    options: [
      "Penggunaan pendingin ruangan (AC) secara terus-menerus",
      "Lantai rumah yang dilapisi keramik",
      "Kelembaban tinggi, ventilasi buruk, dan paparan asap rokok",
      "Penggunaan penerangan lampu LED"
    ],
    answer: 2,
    explanation: "Sirkulasi udara buruk, kelembaban ruangan tinggi, serta asap rokok di dalam rumah merupakan faktor risiko utama ISPA."
  },
  {
    id: 4,
    topic: "ISPA & Pneumonia",
    question: "Pemberian nutrisi yang sangat berperan penting dalam meningkatkan imunitas bayi terhadap risiko pneumonia di 6 bulan pertama adalah...",
    options: [
      "Susu formula tinggi protein",
      "ASI Eksklusif",
      "Bubur saring instan",
      "Air seduhan herbal"
    ],
    answer: 1,
    explanation: "ASI eksklusif memberikan antibodi alami yang efektif melindungi bayi dari risiko pneumonia dan ISPA berat."
  },
  {
    id: 5,
    topic: "ISPA & Pneumonia",
    question: "Vaksin dasar yang wajib diberikan pada bayi untuk mencegah pneumonia akibat bakteri Hib adalah...",
    options: [
      "Vaksin BCG",
      "Vaksin DPT-HB-Hib",
      "Vaksin Polio",
      "Vaksin Hepatitis A"
    ],
    answer: 1,
    explanation: "Imunisasi DPT-HB-Hib melindungi anak dari penyakit difteri, pertusis, tetanus, hepatitis B, serta infeksi Hib/pneumonia."
  },

  // --- EBOLA (Soal 6-9) ---
  {
    id: 6,
    topic: "Ebola",
    question: "Virus Ebola tergolong dalam kelompok virus RNA dari famili...",
    options: [
      "Coronaviridae",
      "Filoviridae",
      "Orthomyxoviridae",
      "Flaviviridae"
    ],
    answer: 1,
    explanation: "Virus Ebola merupakan anggota dari famili Filoviridae (genus Ebolavirus) yang berbentuk benang/filamen."
  },
  {
    id: 7,
    topic: "Ebola",
    question: "Faktor budaya yang menjadi salah satu penyebab utama meluasnya penularan wabah Ebola di masyarakat adalah...",
    options: [
      "Tradisi memandikan dan memeluk jenazah penderita Ebola saat pemakaman",
      "Kebiasaan makan bersama dalam satu wadah besar",
      "Penggunaan pakaian tradisional berukuran longgar",
      "Upacara tarian adat di area terbuka"
    ],
    answer: 0,
    explanation: "Kontak langsung dengan cairan tubuh jenazah penderita Ebola saat prosesi pemakaman sangat berisiko menularkan virus."
  },
  {
    id: 8,
    topic: "Ebola",
    question: "Alat Pelindung Diri (APD) bagi petugas medis yang merawat pasien terkonfirmasi Ebola harus berskala...",
    options: [
      "Cukup masker kain dan celemek standar",
      "APD lengkap (hazmat suit, goggle, sarung tangan ganda, boots)",
      "Masker bedah dan sarung tangan steril",
      "Cukup pelindung wajah (face shield) dan jas laboratorium"
    ],
    answer: 1,
    explanation: "Karena penularan Ebola lewat cairan tubuh sangat masif, petugas medis wajib memakai APD lengkap tertutup tanpa celah."
  },
  {
    id: 9,
    topic: "Ebola",
    question: "Subspesies virus Ebola yang tercatat pernah menyebabkan wabah tingkat kematian tinggi pada manusia adalah...",
    options: [
      "Reston ebolavirus",
      "Zaire ebolavirus",
      "Bombali ebolavirus",
      "Marburg ebolavirus"
    ],
    answer: 1,
    explanation: "Zaire ebolavirus adalah spesies paling mematikan dengan angka fatalitas kasus (CFR) mencapai 90%."
  },

  // --- MERS-CoV (Soal 10-13) ---
  {
    id: 10,
    topic: "MERS-CoV",
    question: "Hewan reservoir utama yang menularkan MERS-CoV (Middle East Respiratory Syndrome) ke manusia adalah...",
    options: [
      "Babi peternakan",
      "Unggas air",
      "Unta dromedaris",
      "Tikus liar"
    ],
    answer: 2,
    explanation: "Unta dromedaris (berpunuk satu) merupakan host reservoir utama MERS-CoV di kawasan Timur Tengah."
  },
  {
    id: 11,
    topic: "MERS-CoV",
    question: "Reseptor spesifik pada sel manusia yang digunakan MERS-CoV untuk menginfeksi sel paru-paru adalah...",
    options: [
      "ACE2",
      "DPP4 (Dipeptidyl Peptidase 4 / CD26)",
      "Hemagglutinin",
      "Neuraminidase"
    ],
    answer: 1,
    explanation: "MERS-CoV menempel dan masuk ke dalam sel inang melalui ikatan dengan reseptor DPP4 (CD26)."
  },
  {
    id: 12,
    topic: "MERS-CoV",
    question: "Kelompok populasi yang berisiko mengalami komplikasi paling berat akibat MERS-CoV adalah...",
    options: [
      "Anak-anak usia sekolah",
      "Lansia dengan penyakit komorbid (seperti diabetes atau ginjal)",
      "Remaja yang aktif berolahraga",
      "Ibu hamil trimester pertama"
    ],
    answer: 1,
    explanation: "Lansia dan penderita komorbiditas seperti diabetes, hipertensi, dan penyakit ginjal memiliki risiko kematian sangat tinggi."
  },
  {
    id: 13,
    topic: "MERS-CoV",
    question: "Salah satu upaya pencegahan infeksi MERS-CoV saat berada di area endemik atau pasar hewan adalah...",
    options: [
      "Mengonsumsi susu unta mentah langsung dari peternakan",
      "Menghindari kontak langsung dengan unta dan mencuci tangan pakai sabun",
      "Memakai pakaian tebal berwujud kain wol",
      "Menyentuh mata dan hidung secara berkala"
    ],
    answer: 1,
    explanation: "Menjaga kebersihan tangan serta menghindari kontak langsung dengan unta dan produk unta mentah sangat direkomendasikan."
  },

  // --- SARS (Soal 14-17) ---
  {
    id: 14,
    topic: "SARS",
    question: "Virus SARS-CoV-1 pertama kali diidentifikasi memicu wabah global pada tahun...",
    options: [
      "1998",
      "2002-2003",
      "2009",
      "2019"
    ],
    answer: 1,
    explanation: "Wabah SARS (Severe Acute Respiratory Syndrome) pertama kali merebak pada akhir 2002 hingga pertengahan 2003."
  },
  {
    id: 15,
    topic: "SARS",
    question: "Hewan yang diduga kuat menjadi perantara transmisi SARS-CoV-1 dari kelelawar ke manusia adalah...",
    options: [
      "Musang (Civet Cat)",
      "Babi hutan",
      "Ular piton",
      "Burung unta"
    ],
    answer: 0,
    explanation: "Musang atau civet cat di pasar hewan liar bertindak sebagai host perantara sebelum menular ke manusia."
  },
  {
    id: 16,
    topic: "SARS",
    question: "Reseptor tempat menempelnya protein Spike dari SARS-CoV-1 pada jaringan paru-paru manusia adalah...",
    options: [
      "ACE2 (Angiotensin-Converting Enzyme 2)",
      "CD4",
      "DPP4",
      "Integrin alpha-v"
    ],
    answer: 0,
    explanation: "Baik SARS-CoV-1 maupun SARS-CoV-2 menggunakan reseptor ACE2 sebagai pintu masuk ke sel tubuh manusia."
  },
  {
    id: 17,
    topic: "SARS",
    question: "Pengendalian utama yang terbukti memutus rantai wabah SARS di fasilitas kesehatan adalah...",
    options: [
      "Isolasi ketat penderita dan pelacakan kontak erat (contact tracing)",
      "Pemberian antibiotik dosis tinggi pada seluruh populasi",
      "Penutupan total seluruh peternakan ayam",
      "Vaksinasi massal secara spontan"
    ],
    answer: 0,
    explanation: "Isolasi cepat penderita, pelacakan kontak, serta prosedur kontrol infeksi di rumah sakit berhasil menghentikan wabah SARS."
  },

  // --- COVID-19 (Soal 18-22) ---
  {
    id: 18,
    topic: "COVID-19",
    question: "Penyebab penyakit COVID-19 adalah virus RNA untai tunggal positif yang dinamakan...",
    options: [
      "SARS-CoV-2",
      "MERS-CoV",
      "Influenza A H1N1",
      "EBV Virus"
    ],
    answer: 0,
    explanation: "COVID-19 disebabkan oleh SARS-CoV-2 dari genus Betacoronavirus."
  },
  {
    id: 19,
    topic: "COVID-19",
    question: "Transmisi utama virus SARS-CoV-2 antar manusia terjadi melalui...",
    options: [
      "Gigitan serangga vektor",
      "Percikan droplet pernapasan dan aerosol di ruang tertutup",
      "Konsumsi makanan matang berkuah",
      "Sengatan matahari"
    ],
    answer: 1,
    explanation: "COVID-19 menular terutama lewat droplet saat batuk, bersin, atau berbicara serta transmisi aerosol di ruangan ber-AC rapat."
  },
  {
    id: 20,
    topic: "COVID-19",
    question: "Penerapan protokol kesehatan GERMAS untuk menekan laju COVID-19 dikenal dengan konsep...",
    options: [
      "4M / 5M (Memakai masker, mencuci tangan, menjaga jarak, dll.)",
      "3R (Reuse, Reduce, Recycle)",
      "Pencegahan Sekunder Terpadu",
      "Isolasi Mandiri Seumur Hidup"
    ],
    answer: 0,
    explanation: "Protokol 5M merupakan panduan utama pencegahan transmisi COVID-19 di lingkungan masyarakat."
  },
  {
    id: 21,
    topic: "COVID-19",
    question: "Vaksinasi COVID-19 bertujuan utama untuk...",
    options: [
      "Menghilangkan virus dari muka bumi secara instan",
      "Merangsang pembentukan antibodi dan mencegah keparahan/kematian",
      "Menggantikan fungsi sel darah putih",
      "Menyembuhkan penyakit kronis lainnya"
    ],
    answer: 1,
    explanation: "Vaksin melatih sistem imun sehingga saat terinfeksi, gejala yang dialami jauh lebih ringan dan mencegah risiko kematian."
  },
  {
    id: 22,
    topic: "COVID-19",
    question: "Salah satu komorbiditas yang meningkatkan risiko komplikasi severe pada pasien COVID-19 adalah...",
    options: [
      "Miopia (rabun jauh)",
      "Diabetes Melitus dan Hipertensi",
      "Ketombe berlebih",
      "Alergi dingin ringan"
    ],
    answer: 1,
    explanation: "Penyakit kardiovaskular, diabetes, dan hipertensi merupakan komorbid yang memperburuk kondisi klinis COVID-19."
  },

  // --- FLU BURUNG (Soal 23-27) ---
  {
    id: 23,
    topic: "Flu Burung",
    question: "Subtipe virus Flu Burung (Avian Influenza) tergolong Highly Pathogenic Avian Influenza (HPAI) yang sering menginfeksi manusia adalah...",
    options: [
      "H5N1",
      "H1N1",
      "H3N2",
      "H2N2"
    ],
    answer: 0,
    explanation: "H5N1 adalah subtipe virus influenza A ganas yang dapat melompat dari unggas ke manusia."
  },
  {
    id: 24,
    topic: "Flu Burung",
    question: "Penularan utama virus Flu Burung ke manusia paling sering terjadi akibat...",
    options: [
      "Mengonsumsi telur matang sempurna",
      "Kontak langsung dengan unggas sakit/mati mendadak atau kotorannya",
      "Mendidihkan daging ayam sebelum dikonsumsi",
      "Mendengarkan kicauan burung di dalam sangkar"
    ],
    answer: 1,
    explanation: "Paparan sekret, kotoran, atau kontak fisik dengan unggas yang terinfeksi menjadi jalur penularan terbesar."
  },
  {
    id: 25,
    topic: "Flu Burung",
    question: "Langkah keamanan pangan yang benar dalam memproses daging unggas agar terhindar dari virus H5N1 adalah...",
    options: [
      "Memasak daging unggas hingga matang sempurna (suhu panas cukup)",
      "Mencuci daging ayam dengan deterjen",
      "Mengonsumsi daging setengah matang agar nutrisi tidak hilang",
      "Membiarkan daging di suhu ruangan selama dua hari"
    ],
    answer: 0,
    explanation: "Virus H5N1 mati pada proses pemasakan dengan suhu yang cukup tinggi sampai matang sempurna."
  },
  {
    id: 26,
    topic: "Flu Burung",
    question: "APD minimal yang wajib dipakai oleh petugas pemusnahan (depopulasi) unggas adalah...",
    options: [
      "Masker kain biasa dan sandal jepit",
      "Masker N95, kacamata goggle, sarung tangan nitril, dan boots",
      "Cukup menggunakan jas hujan plastik",
      "Sarung tangan kain biasa tanpa masker"
    ],
    answer: 1,
    explanation: "Petugas depopulasi berisiko tinggi terpapar aerosol kotoran unggas sehingga memerlukan N95, goggle, dan sepatu boots."
  },
  {
    id: 27,
    topic: "Flu Burung",
    question: "Salah satu tempat dengan tingkat risiko penularan virus influenza unggas yang tinggi di perkotaan adalah...",
    options: [
      "Pasar unggas basah (Wet Poultry Market)",
      "Taman kota tertutup",
      "Perpustakaan umum",
      "Stasiun kereta api"
    ],
    answer: 0,
    explanation: "Pasar unggas basah merupakan titik temu unggas hidup dari berbagai daerah yang memperbesar potensi transmisi virus."
  },

  // --- FLU BABI (Soal 28-31) ---
  {
    id: 28,
    topic: "Flu Babi",
    question: "Pandemi Flu Babi yang merebak secara global pada tahun 2009 disebabkan oleh virus Influenza subtipe...",
    options: [
      "H1N1 pandemic 2009 (pdm09)",
      "H5N1",
      "H7N9",
      "H3N8"
    ],
    answer: 0,
    explanation: "Pandemi flu 2009 disebabkan oleh virus Influenza A subtipe H1N1 yang mengandung materi genetik kombinasi babi, burung, dan manusia."
  },
  {
    id: 29,
    topic: "Flu Babi",
    question: "Pekerja yang paling rentan terpapar penularan Flu Babi secara okupasional adalah...",
    options: [
      "Peternak babi dan pekerja Rumah Potong Hewan (RPH) babi",
      "Supir angkutan umum",
      "Petani padi di sawah",
      "Karyawan toko pakaian"
    ],
    answer: 0,
    explanation: "Pekerja yang berinteraksi langsung dengan ternak babi berisiko tinggi tertular droplet flu dari babi."
  },
  {
    id: 30,
    topic: "Flu Babi",
    question: "Tindakan biosekuriti yang penting di kandang ternak babi untuk mencegah persebaran virus adalah...",
    options: [
      "Pembersihan rutin kandang, pembatasan tamu, dan disinfeksi kendaraan",
      "Membiarkan babi berkeliaran di pemukiman warga",
      "Mencampur ternak babi dengan semua jenis burung liar",
      "Menumpuk kotoran babi tanpa pengolahan"
    ],
    answer: 0,
    explanation: "Penerapan biosekuriti ketat mencegah masuk dan menyebarnya agen patogen di lingkungan peternakan."
  },
  {
    id: 31,
    topic: "Flu Babi",
    question: "Gejala klinis Flu Babi pada manusia umumnya menyerupai...",
    options: [
      "Gejala Influenza Like Illness (demam, batuk, nyeri tenggorokan, pegal)",
      "Ruam gatal di seluruh permukaan kulit tanpa demam",
      "Kehilangan pendengaran mendadak",
      "Pembengkakan pada persendian lutut"
    ],
    answer: 0,
    explanation: "Flu babi menampilkan gejala flu biasa (ILI) seperti demam, batuk, pilek, serta lesu."
  },

  // --- LEPTOSPIROSIS (Soal 32-36) ---
  {
    id: 32,
    topic: "Leptospirosis",
    question: "Bakteri penyebab Leptospirosis adalah bakteri berbentuk spiral dari genus...",
    options: [
      "Leptospira",
      "Borrelia",
      "Treponema",
      "Spirillum"
    ],
    answer: 0,
    explanation: "Leptospirosis disebabkan oleh bakteri spirochaeta dari genus Leptospira."
  },
  {
    id: 33,
    topic: "Leptospirosis",
    question: "Pintu masuk (portal of entry) utama bakteri Leptospira ke dalam tubuh manusia adalah...",
    options: [
      "Luka lecet di kulit atau membran mukosa yang terpapar air terkontaminasi",
      "Rambut kepala yang basah",
      "Hirupan udara kering di pegunungan",
      "Gigitan nyamuk Anopheles"
    ],
    answer: 0,
    explanation: "Bakteri masuk melalui luka terbuka di kulit atau selaput lendir saat kontak dengan air/tanah yang tercemar urine tikus."
  },
  {
    id: 34,
    topic: "Leptospirosis",
    question: "Waktu terjadinya peningkatan kasus Leptospirosis secara drastis biasanya bertepatan dengan...",
    options: [
      "Musim kemarau panjang",
      "Bencana banjir dan musim hujan",
      "Musim panen buah-buahan",
      "Gelombang panas pantai"
    ],
    answer: 1,
    explanation: "Banjir menyebabkan urine tikus yang terinfeksi bercampur dengan air genangan dan terpapar ke warga."
  },
  {
    id: 35,
    topic: "Leptospirosis",
    question: "Bentuk APD sederhana yang sangat efektif dipakai warga saat membersihkan area bekas banjir adalah...",
    options: [
      "Sepatu boots karet dan sarung tangan pelindung",
      "Sandal jepit kulit",
      "Kacamata hitam",
      "Kaos kaki wol"
    ],
    answer: 0,
    explanation: "Penggunaan sepatu boots karet mencegah kulit kaki yang lecet berhubungan langsung dengan air genangan banjir."
  },
  {
    id: 36,
    topic: "Leptospirosis",
    question: "Organ tempat berkembang biak dan bersembunyinya bakteri Leptospira pada tubuh tikus adalah...",
    options: [
      "Tubulus Ginjal",
      "Hati",
      "Paru-paru",
      "Jantung"
    ],
    answer: 0,
    explanation: "Bakteri Leptospira hidup di ginjal tikus dan terus-menerus dikeluarkan bersama dengan urinnya."
  },

  // --- ANTRAKS (Soal 37-40) ---
  {
    id: 37,
    topic: "Antraks",
    question: "Bakteri Bacillus anthracis penyebab antraks memiliki kemampuan bertahan puluhan tahun di tanah karena bentuk...",
    options: [
      "Kista",
      "Endospora (spora)",
      "Kapsul mukoid",
      "Biofilm cair"
    ],
    answer: 1,
    explanation: "Saat terpapar udara, Bacillus anthracis membentuk spora yang sangat tahan terhadap panas, kering, dan disinfektan."
  },
  {
    id: 38,
    topic: "Antraks",
    question: "Mengapa bangkai hewan yang mati akibat Antraks DILARANG KERAS disembelih atau dibedah?",
    options: [
      "Darah yang keluar dan terpapar udara akan memicu bakteri membentuk spora di tanah",
      "Aroma daging akan merusak kualitas tanah di sekitarnya",
      "Tulang hewan akan menjadi keras dan sulit dihancurkan",
      "Dagingnya tidak bisa diolah menjadi pupuk"
    ],
    answer: 0,
    explanation: "Pembukaan bangkai menyebabkan darah terinfeksi bereaksi dengan oksigen udara dan membentuk spora antraks yang mencemari tanah."
  },
  {
    id: 39,
    topic: "Antraks",
    question: "Tipe manifestasi klinis Antraks yang paling sering dijumpai pada manusia akibat kontak kulit dengan hewan sakit adalah...",
    options: [
      "Antraks Kulit (Cutaneous Anthrax) dengan eschar hitam",
      "Antraks Pencernaan",
      "Antraks Inhalasi",
      "Antraks Meningeal"
    ],
    answer: 0,
    explanation: "Antraks kulit mencakup sekitar 95% kasus, ditandai dengan lesi/keropeng berwarna hitam khas (black eschar)."
  },
  {
    id: 40,
    topic: "Antraks",
    question: "Penanganan bangkai ternak yang terkonfirmasi mati akibat Antraks yang benar adalah...",
    options: [
      "Dibuang ke aliran sungai terdekat",
      "Dibakar hingga hangus atau dikubur dalam minimal 2 meter dan disiram formalin/semen",
      "Diberikan kepada hewan peliharaan lain",
      "Dibiarkan membusuk di padang rumput"
    ],
    answer: 1,
    explanation: "Bangkai harus dikubur dalam (minimal 2 meter) disertai pemberian kapur/semen atau dibakar habis untuk mematikan spora."
  }
];

// State Management
let currentQuizData = [];
let currentIndex = 0;
let userAnswers = [];

// Algoritma Pengacak Array (Fisher-Yates)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function initQuiz() {
  currentQuizData = shuffleArray(quizData);
  currentIndex = 0;
  userAnswers = new Array(currentQuizData.length).fill(null);
  
  const totalNumEl = document.getElementById("quiz-total-num");
  const resultCard = document.getElementById("quiz-result-card");
  
  if (totalNumEl) totalNumEl.textContent = currentQuizData.length;
  if (resultCard) resultCard.classList.add("hidden");
  
  renderPalette();
  renderQuestion();
}

function renderPalette() {
  const numberPalette = document.getElementById("quiz-number-palette");
  if (!numberPalette) return;
  numberPalette.innerHTML = "";

  currentQuizData.forEach((_, idx) => {
    const pBtn = document.createElement("button");
    pBtn.type = "button";
    pBtn.textContent = idx + 1;
    pBtn.style.cssText = "width: 32px; height: 32px; padding: 0; font-size: 0.8rem; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; cursor: pointer;";
    
    if (idx === currentIndex) {
      pBtn.style.border = "2px solid var(--accent-blue)";
      pBtn.style.fontWeight = "bold";
    }
    
    if (userAnswers[idx] !== null) {
      const isCorrect = userAnswers[idx] === currentQuizData[idx].answer;
      pBtn.style.backgroundColor = isCorrect ? "#10b981" : "#ef4444";
      pBtn.style.color = "#ffffff";
      pBtn.style.border = "none";
    } else {
      pBtn.style.backgroundColor = "#ffffff";
      pBtn.style.color = "var(--text-color)";
      pBtn.style.border = "1px solid var(--border-color)";
    }

    pBtn.onclick = () => {
      currentIndex = idx;
      renderQuestion();
    };

    numberPalette.appendChild(pBtn);
  });
}

function renderQuestion() {
  resetQuizState();
  renderPalette();

  const item = currentQuizData[currentIndex];

  const currentNumEl = document.getElementById("quiz-current-num");
  const topicTag = document.getElementById("quiz-topic-tag");
  const questionText = document.getElementById("quiz-question");
  const progressFill = document.getElementById("quiz-progress-fill");
  const prevButton = document.getElementById("quiz-prev-btn");
  const nextButton = document.getElementById("quiz-next-btn");
  const optionsGrid = document.getElementById("quiz-options");

  if (currentNumEl) currentNumEl.textContent = currentIndex + 1;
  if (topicTag) topicTag.textContent = item.topic;
  if (questionText) questionText.textContent = item.question;

  const answeredCount = userAnswers.filter(a => a !== null).length;
  const pct = (answeredCount / currentQuizData.length) * 100;
  if (progressFill) progressFill.style.width = `${pct}%`;

  if (prevButton) {
    if (currentIndex > 0) prevButton.classList.remove("hidden");
    else prevButton.classList.add("hidden");
    prevButton.onclick = () => {
      if (currentIndex > 0) { currentIndex--; renderQuestion(); }
    };
  }

  if (nextButton) {
    nextButton.textContent = (currentIndex === currentQuizData.length - 1) ? "Lihat Hasil Akhir 🎉" : "Soal Selanjutnya \u2192";
    nextButton.onclick = () => {
      if (currentIndex < currentQuizData.length - 1) {
        currentIndex++;
        renderQuestion();
      } else {
        renderResult();
      }
    };
  }

  if (optionsGrid) {
    item.options.forEach((optText, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-opt-btn";
      btn.innerHTML = `<span style="font-weight: 700; color: var(--text-muted);">${String.fromCharCode(65 + idx)}.</span> <span>${optText}</span>`;
      
      if (userAnswers[currentIndex] !== null) {
        btn.disabled = true;
        if (idx === item.answer) {
          btn.classList.add("is-correct");
        }
        if (userAnswers[currentIndex] === idx && idx !== item.answer) {
          btn.classList.add("is-wrong");
        }
      } else {
        btn.onclick = () => handleSelectOption(idx);
      }

      optionsGrid.appendChild(btn);
    });
  }

  if (userAnswers[currentIndex] !== null) {
    showFeedback(userAnswers[currentIndex] === item.answer, item.explanation);
  }
}

function resetQuizState() {
  const feedbackBox = document.getElementById("quiz-feedback");
  const optionsGrid = document.getElementById("quiz-options");

  if (feedbackBox) {
    feedbackBox.className = "info-box hidden";
    feedbackBox.innerHTML = "";
  }
  if (optionsGrid) optionsGrid.innerHTML = "";
}

function handleSelectOption(chosenIdx) {
  userAnswers[currentIndex] = chosenIdx;
  renderQuestion();
}

function showFeedback(isCorrect, explanation) {
  const feedbackBox = document.getElementById("quiz-feedback");
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

function renderResult() {
  const mainContainer = document.getElementById("quiz-main-container");
  const resultCard = document.getElementById("quiz-result-card");
  const finalScoreVal = document.getElementById("quiz-final-score-val");
  const finalDetailEl = document.getElementById("quiz-final-detail");
  const restartBtn = document.getElementById("quiz-restart-btn");

  if (mainContainer) mainContainer.classList.add("hidden");
  if (resultCard) resultCard.classList.remove("hidden");

  let correctCount = 0;
  userAnswers.forEach((ans, idx) => {
    if (ans === currentQuizData[idx].answer) correctCount++;
  });

  const percentage = Math.round((correctCount / currentQuizData.length) * 100);

  if (finalScoreVal) finalScoreVal.textContent = percentage;
  if (finalDetailEl) {
    finalDetailEl.innerHTML = `Kamu berhasil menjawab <strong>${correctCount} dari ${currentQuizData.length} soal</strong> dengan benar.`;
  }

  if (restartBtn) {
    restartBtn.onclick = () => {
      if (resultCard) resultCard.classList.add("hidden");
      const startScreen = document.getElementById("quiz-start-screen");
      if (startScreen) startScreen.classList.remove("hidden");
    };
  }
}
