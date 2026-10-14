// Bank Soal Materi Ergonomi & Lingkungan Kerja (40 Soal)
const ergonomiQuizData = [
  // --- ERGONOMI DASAR & PRINSIP (Soal 1-5) ---
  {
    id: 1,
    topic: "Ergonomi Dasar",
    question: "Secara etimologis, kata 'Ergonomi' berasal dari bahasa Yunani, yaitu ergon dan nomos yang berarti...",
    options: [
      "Manusia dan kerja",
      "Kerja dan aturan",
      "Kesehatan dan keselamatan",
      "Lingkungan dan fisik"
    ],
    answer: 1,
    explanation: "Ergonomi berasal dari kata 'ergon' yang berarti kerja dan 'nomos' yang berarti aturan atau hukum."
  },
  {
    id: 2,
    topic: "Ergonomi Dasar",
    question: "Aspek utama ergonomi yang mempelajari bagaimana otak memproses informasi dan beban tugas agar tidak menyebabkan stres adalah...",
    options: [
      "Aspek Fisik",
      "Aspek Biologis",
      "Aspek Kognitif",
      "Aspek Psikososial"
    ],
    answer: 2,
    explanation: "Ergonomi kognitif berfokus pada proses mental manusia seperti persepsi, memori, penalaran, dan pemrosesan informasi."
  },
  {
    id: 3,
    topic: "Ergonomi Dasar",
    question: "Manakah yang BUKAN merupakan manfaat utama dari penerapan ergonomi di tempat kerja?",
    options: [
      "Mencegah penyakit akibat kerja (PAK) dan cedera otot",
      "Membuat pekerja tidak cepat lelah",
      "Meningkatkan produktivitas kerja",
      "Menghilangkan kebutuhan akan pelatihan K3 sepenuhnya"
    ],
    answer: 3,
    explanation: "Penerapan ergonomi meningkatkan efisiensi dan keamanan, tetapi pelatihan K3 tetap wajib dan tidak bisa dihilangkan."
  },
  {
    id: 4,
    topic: "Ergonomi Perkantoran",
    question: "Posisi monitor yang ergonomis saat bekerja di depan komputer adalah diletakkan...",
    options: [
      "Lebih tinggi dari kepala agar leher tertarik ke atas",
      "Sejajar dengan mata dengan jarak sekitar 50 cm",
      "Sangat dekat dengan mata kurang dari 10 cm",
      "Di sebelah kanan bawah tanpa perlu menyelaraskan pandangan"
    ],
    answer: 1,
    explanation: "Jarak pandang ideal monitor adalah sepanjang lengan (~50 cm) dengan bagian atas layar sejajar atau sedikit di bawah garis mata."
  },
  {
    id: 5,
    topic: "Manual Handling",
    question: "Teknik pengangkatan barang secara manual yang benar untuk mencegah cedera punggung adalah...",
    options: [
      "Membungkukkan badan dengan lutut tetap lurus",
      "Mengangkat beban sejauh mungkin dari tubuh",
      "Menekuk lutut dan menjaga beban tetap dekat dengan tubuh",
      "Memutar pinggang saat mengangkat beban berat"
    ],
    answer: 2,
    explanation: "Mengangkat beban harus memanfaatkan kekuatan otot kaki (menekuk lutut) dan posisi beban sedekat mungkin dengan sumbu tubuh."
  },

  // --- HIGIENE INDUSTRI & BAHAYA LINGKUNGAN (Soal 6-12) ---
  {
    id: 6,
    topic: "Higiene Industri",
    question: "Konsep Higiene Industri (HI) mencakup 4 tahapan utama secara berurutan, yaitu...",
    options: [
      "Evaluasi, Rekognisi, Antisipasi, Pengendalian",
      "Antisipasi, Rekognisi, Evaluasi, Pengendalian",
      "Pengendalian, Monitoring, Evaluasi, Rekognisi",
      "Rekognisi, Antisipasi, Pengendalian, Evaluasi"
    ],
    answer: 1,
    explanation: "Tahapan dasar Higiene Industri dilakukan berurutan: AREP (Antisipasi -> Rekognisi -> Evaluasi -> Pengendalian)."
  },
  {
    id: 7,
    topic: "Faktor Bahaya K3",
    question: "Berikut ini yang termasuk dalam kelompok faktor bahaya fisik di lingkungan kerja adalah...",
    options: [
      "Aerosol, gas, dan uap kimia",
      "Kebisingan, getaran, penerangan, dan iklim kerja",
      "Bakteri, virus, jamur, dan protozoa",
      "Postur statis dan gerakan berulang"
    ],
    answer: 1,
    explanation: "Bahaya fisik mencakup energi potensial yang mengenai pekerja seperti suara bising, getaran, radiasi, suhu, dan pencahayaan."
  },
  {
    id: 8,
    topic: "Faktor Kebisingan",
    question: "Nilai Ambang Batas (NAB) untuk kebisingan di lingkungan kerja berdasarkan Permenaker No. 5 Tahun 2018 untuk waktu pemaparan 8 jam per hari adalah...",
    options: [
      "75 dB(A)",
      "80 dB(A)",
      "85 dB(A)",
      "90 dB(A)"
    ],
    answer: 2,
    explanation: "NAB kebisingan untuk waktu paparan 8 jam/hari adalah 85 dB(A)."
  },
  {
    id: 9,
    topic: "Faktor Getaran",
    question: "Penyakit Hand-Arm Vibration Syndrome (HAVS) atau white finger merupakan dampak kesehatan akibat paparan...",
    options: [
      "Radiasi ultraviolet",
      "Kebisingan impulsif",
      "Getaran pada lengan dan tangan",
      "Tekanan panas ekstrem"
    ],
    answer: 2,
    explanation: "HAVS terjadi akibat penggunaan alat bergetar frekuensi tinggi dalam jangka panjang pada tangan dan lengan."
  },
  {
    id: 10,
    topic: "Pengukuran K3",
    question: "Alat yang digunakan untuk mengukur tingkat intensitas pencahayaan di suatu ruangan kerja dinamakan...",
    options: [
      "Sound Level Meter",
      "Luxmeter",
      "WBGT Meter",
      "Dosimeter"
    ],
    answer: 1,
    explanation: "Luxmeter digunakan untuk mengukur intensitas cahaya (satuan Lux)."
  },
  {
    id: 11,
    topic: "Iklim Kerja",
    question: "Menurut Permenaker No. 5 Tahun 2018, standar suhu ruangan yang nyaman untuk tempat kerja administratif adalah...",
    options: [
      "18°C - 20°C",
      "20°C - 22°C",
      "23°C - 26°C",
      "27°C - 30°C"
    ],
    answer: 2,
    explanation: "Standar kenyamanan suhu ruangan kerja berada pada kisaran 23°C hingga 26°C."
  },
  {
    id: 12,
    topic: "Radiasi Lingkungan",
    question: "Efek radiasi mengion yang timbul tergantung pada dosis dan frekuensi paparan, seperti eritema pada kulit dan katarak mata, dinamakan efek...",
    options: [
      "Stokastik",
      "Non-stokastik (Deterministik)",
      "Genetik",
      "Karsinogenik"
    ],
    answer: 1,
    explanation: "Efek deterministik/non-stokastik memiliki ambang batas tertentu di mana keparahannya berbanding lurus dengan besarnya dosis radiasi."
  },

  // --- PAK, CTD & STRES KERJA (Soal 13-17) ---
  {
    id: 13,
    topic: "Penyakit Akibat Kerja",
    question: "Berdasarkan Perpres No. 7 Tahun 2019, penyakit akibat kerja (PAK) yang disebabkan oleh infeksi bakteri akibat kontak dengan hewan ternak atau susu unpasteurisasi adalah...",
    options: [
      "Anthrax",
      "Brucellosis",
      "Leptospirosis",
      "Tetanus"
    ],
    answer: 1,
    explanation: "Brucellosis ditularkan dari kontak dengan cairan hewan ternak terinfeksi atau produk susu yang belum dipasteurisasi."
  },
  {
    id: 14,
    topic: "Ergonomi Perkantoran",
    question: "Faktor risiko ergonomi di perkantoran yang memicu Cumulative Trauma Disorders (CTDs) meliputi hal-hal berikut, KECUALI...",
    options: [
      "Repetition (pengulangan)",
      "Postur janggal",
      "Penyinaran alami",
      "Pressure berlebihan dan lama"
    ],
    answer: 2,
    explanation: "Penyinaran alami bukan pemicu langsung CTDs. Pemicu utama CTDs adalah gerakan berulang, postur janggal, dan penekanan mekanis berlebih."
  },
  {
    id: 15,
    topic: "Psikososial Kerja",
    question: "Kondisi ketegangan psikologis akibat tuntutan tugas yang sulit, konflik peran, atau beban kerja berlebihan disebut...",
    options: [
      "Burnout",
      "Stres kerja",
      "Depresi klinis",
      "Ansietas"
    ],
    answer: 1,
    explanation: "Stres kerja terjadi akibat ketidakseimbangan antara tuntutan pekerjaan dan kemampuan individu untuk mengatasinya."
  },
  {
    id: 16,
    topic: "Pengendalian Risiko",
    question: "Dalam hirarki pengendalian risiko K3, tindakan mengganti bahan atau mesin berbahaya dengan yang lebih aman disebut...",
    options: [
      "Eliminasi",
      "Substitusi",
      "Perancangan (Engineering Control)",
      "Administrasi"
    ],
    answer: 1,
    explanation: "Substitusi berarti mengganti bahan, proses, atau peralatan yang berbahaya dengan alternatif yang lebih aman."
  },
  {
    id: 17,
    topic: "Investigasi Lingkungan",
    question: "Metode pemetaan bahaya visual di tempat kerja untuk mengidentifikasi lokasi, jenis bahaya, dan tingkat risikonya dinamakan...",
    options: [
      "Job Safety Analysis (JSA)",
      "Hazard Mapping",
      "Safety Patrol",
      "Risk Assessment Matrix"
    ],
    answer: 1,
    explanation: "Hazard Mapping adalah peta visual lokasi kerja yang menandai titik-titik potensi bahaya."
  },

  // --- PERATURAN & INVESTIGASI LINGKUNGAN (Soal 18-20) ---
  {
    id: 18,
    topic: "Regulasi K3",
    question: "Pengukuran lingkungan kerja eksternal menurut Permenaker No. 5 Tahun 2018 dilakukan secara berkala paling sedikit...",
    options: [
      "1 bulan sekali",
      "3 bulan sekali",
      "6 bulan sekali",
      "1 tahun sekali"
    ],
    answer: 3,
    explanation: "Pengukuran lingkungan kerja rutin/berkala minimal dilakukan 1 (satu) tahun sekali."
  },
  {
    id: 19,
    topic: "Regulasi K3",
    question: "Pengukuran lingkungan kerja khusus dilakukan apabila...",
    options: [
      "Terjadi kecelakaan kerja atau ada laporan dugaan pajanan di atas NAB",
      "Perusahaan baru berdiri selama 1 bulan",
      "Terjadi pergantian jajaran manajemen",
      "Dilakukan inspeksi rutin harian"
    ],
    answer: 0,
    explanation: "Pengukuran khusus dipicu oleh adanya kecelakaan, keluhan kesehatan, atau indikasi paparan melebihi NAB."
  },
  {
    id: 20,
    topic: "Dokumentasi K3",
    question: "Prinsip dasar dokumentasi dalam investigasi lingkungan kerja harus memenuhi syarat-syarat berikut, KECUALI...",
    options: [
      "Objektif dan faktual",
      "Spesifik dan detail",
      "Rapi dan terstruktur",
      "Mengutamakan asumsi dan opini pribadi"
    ],
    answer: 3,
    explanation: "Dokumentasi K3 harus didasarkan pada data faktual dan bukti lapangan, bukan asumsi subjektif."
  },

  // --- HOUSEKEEPING & 5R (Soal 21-27) ---
  {
    id: 21,
    topic: "Housekeeping 5R",
    question: "Housekeeping berasal dari kata house dan keep yang dalam istilah K3 lingkungan kerja berarti...",
    options: [
      "Pembangunan rumah dan gedung",
      "Ketatarumahtanggaan/menjaga dan merawat area kerja tetap bersih, aman, dan tertib",
      "Pembersihan fasilitas kantor khusus oleh tim cleaning service",
      "Renovasi tempat kerja berkala"
    ],
    answer: 1,
    explanation: "Housekeeping dalam K3 merujuk pada manajemen kebersihan, kerapian, dan ketertiban area kerja secara menyeluruh."
  },
  {
    id: 22,
    topic: "Housekeeping 5R",
    question: "Budaya industri 5R yang berasal dari Jepang (5S) secara berurutan adalah...",
    options: [
      "Ringkas, Rapi, Resik, Rawat, Rajin",
      "Rapi, Ringkas, Resik, Rajin, Rawat",
      "Resik, Ringkas, Rapi, Rawat, Rajin",
      "Ringkas, Resik, Rapi, Rajin, Rawat"
    ],
    answer: 0,
    explanation: "Urutan 5R adalah Ringkas (Seiri), Rapi (Seiton), Resik (Seiso), Rawat (Seiketsu), dan Rajin (Shitsuke)."
  },
  {
    id: 23,
    topic: "Housekeeping 5R",
    question: "Prinsip utama dari langkah 'RINGKAS' (Seiri) dalam budaya 5R adalah...",
    options: [
      "Membersihkan semua kotoran dan debu di area kerja",
      "Memisahkan dan menyingkirkan barang-barang yang tidak diperlukan dari tempat kerja",
      "Menata barang agar mudah ditemukan dengan cepat",
      "Memelihara kebiasaan dan disiplin kerja"
    ],
    answer: 1,
    explanation: "Seiri (Ringkas) menitikberatkan pada pemilihan barang antara yang diperlukan dan yang harus dibuang/disimpan."
  },
  {
    id: 24,
    topic: "Housekeeping 5R",
    question: "Prinsip utama dari langkah 'RAPI' (Seiton) dalam budaya 5R adalah...",
    options: [
      "Menghilangkan sumber kotoran dan debu",
      "Menata dan meletakkan barang pada tempat yang pasti agar mudah ditemukan",
      "Membuang barang yang rusak atau kadaluarsa",
      "Membuat aturan kerja secara tertulis"
    ],
    answer: 1,
    explanation: "Seiton (Rapi) menetapkan tata letak barang agar mudah diakses, siap pakai, dan efisien."
  },
  {
    id: 25,
    topic: "Housekeeping 5R",
    question: "Dua pola pengelompokan barang dalam langkah 'RAPI' (Seiton) adalah...",
    options: [
      "Primer dan Sekunder",
      "Uniform dan Fungsional",
      "Fisik dan Kimia",
      "Internal dan Eksternal"
    ],
    answer: 1,
    explanation: "Penataan barang dilakukan berdasarkan keseragaman jenis/bentuk (uniform) atau berdasarkan alur/fungsi penggunaan (fungsional)."
  },
  {
    id: 26,
    topic: "Housekeeping 5R",
    question: "Menurut konsep 5R, kegiatan 'RESIK' (Seiso) tidak hanya sekadar membersihkan, tetapi juga berarti...",
    options: [
      "Mengatur jadwal lembur",
      "Menginspeksi/memeriksa kondisi mesin dan peralatan kerja sejak dini",
      "Membeli peralatan kerja baru",
      "Memisahkan barang berguna dan tidak berguna"
    ],
    answer: 1,
    explanation: "Pembersihan (Seiso) berfungsi sekaligus sebagai sarana inspeksi untuk mendeteksi keausan, kebocoran, atau kerusakan alat."
  },
  {
    id: 27,
    topic: "Housekeeping 5R",
    question: "Tahap pembiasaan diri dan pembentukan disiplin kerja karyawan untuk menjalankan standar 5R secara konsisten disebut...",
    options: [
      "Ringkas (Seiri)",
      "Rapi (Seiton)",
      "Resik (Seiso)",
      "Rajin (Shitsuke)"
    ],
    answer: 3,
    explanation: "Shitsuke (Rajin) adalah pembiasaan diri dan disiplin untuk menjaga keberlanjutan budaya 5R."
  },

  // --- SLIPS, TRIPS, FALLS & BAHAYA KIMIA (Soal 28-33) ---
  {
    id: 28,
    topic: "Keselamatan Fisik",
    question: "Dua jenis insiden jatuh (falls) yang terjadi di tempat kerja menurut dampaknya adalah...",
    options: [
      "Fall on same level (frekuensi tinggi, keparahan rendah) dan Fall from elevations (frekuensi rendah, keparahan tinggi)",
      "Trip dan Slip",
      "Minor fall dan Major fall",
      "Physical fall dan Mechanical fall"
    ],
    answer: 0,
    explanation: "Jatuh di bidang datar frekuensinya tinggi dengan keparahan rendah, sedangkan jatuh dari ketinggian frekuensinya rendah namun berdampak fatal."
  },
  {
    id: 29,
    topic: "Keselamatan Fisik",
    question: "Tindakan pencegahan terpeleset (slips) dan tersandung (trips) pada tangga di tempat kerja dapat dilakukan dengan...",
    options: [
      "Meletakkan kabel melintang di anak tangga",
      "Memasang non-slip tape (pita anti-selip) dan berpegangan pada handrail",
      "Mematikan lampu tangga saat jam kerja",
      "Menumpuk kardus bekas di bordes tangga"
    ],
    answer: 1,
    explanation: "Pemasangan pita anti-selip dan penggunaan pegangan tangan (handrail) mengurangi risiko terpeleset dan tersandung di tangga."
  },
  {
    id: 30,
    topic: "Keselamatan Fisik",
    question: "Jika seseorang terjatuh, langkah yang tepat untuk mengurangi risiko cedera serius adalah...",
    options: [
      "Menahan benturan dengan telapak tangan secara lurus dan kaku",
      "Menggulingkan diri, mengendurkan tubuh, serta menekuk siku dan lutut",
      "Menahan kepala dengan posisi leher kaku",
      "Melompat lebih jauh ke arah samping"
    ],
    answer: 1,
    explanation: "Mengendurkan otot dan menggulingkan badan menyebarkan gaya benturan sehingga mengurangi risiko patah tulang."
  },
  {
    id: 31,
    topic: "Bahan Kimia",
    question: "Pada label NFPA 704 (Sistem Ketahanan Bahan Kimia), warna BIRU menunjukkan tingkatan bahaya...",
    options: [
      "Kemudahan Terbakar (Flammability)",
      "Reaktivitas (Instability)",
      "Bahaya Kesehatan (Health Hazard)",
      "Bahaya Khusus (Special Hazard)"
    ],
    answer: 2,
    explanation: "Simbol belah ketupat NFPA 704: Biru = Kesehatan, Merah = Kebakaran, Kuning = Reaktivitas, Putih = Khusus."
  },
  {
    id: 32,
    topic: "Bahan Kimia",
    question: "Pada simbol NFPA 704, angka '4' pada kotak warna Merah menandakan bahan kimia tersebut...",
    options: [
      "Tidak dapat terbakar sama sekali",
      "Sangat mudah terbakar (gas atau cairan dengan titik nyala sangat rendah)",
      "Reaktif terhadap air",
      "Menyebabkan iritasi ringan"
    ],
    answer: 1,
    explanation: "Angka 4 pada kolom merah menunjukkan tingkat bahaya tertinggi untuk sifat kemudahan terbakar (flammability)."
  },
  {
    id: 33,
    topic: "Ventilasi Industri",
    question: "Jenis ventilasi di tempat kerja yang berfungsi menarik/menghisap kontaminan udara langsung dari sumbernya sebelum menyebar dinamakan...",
    options: [
      "Ventilasi Alami",
      "Local Exhaust Ventilation (LEV) / Ventilasi Lokal",
      "Air Conditioning (AC)",
      "General Ventilation"
    ],
    answer: 1,
    explanation: "LEV menangkap dan menghisap kontaminan berbahaya tepat di dekat titik sumbernya sebelum mengontaminasi udara ruangan."
  },

  // --- FASILITAS & REGULASI K3 LINGKUNGAN (Soal 34-40) ---
  {
    id: 34,
    topic: "Fasilitas Kerja",
    question: "Berdasarkan Permenaker No. 5 Tahun 2018, setiap pekerja di dalam ruangan kerja harus mendapatkan ruang udara minimal sebesar...",
    options: [
      "2 meter kubik",
      "5 meter kubik",
      "10 meter kubik",
      "15 meter kubik"
    ],
    answer: 2,
    explanation: "Persyaratan kesehatan lingkungan kerja menetapkan ruang udara minimal 10 m³ per pekerja agar sirkulasi dan kecukupan oksigen terjaga."
  },
  {
    id: 35,
    topic: "Fasilitas Kerja",
    question: "Rasio kebutuhan jamban (toilet) untuk tempat kerja tetap dengan jumlah pekerja 1 - 15 orang adalah...",
    options: [
      "1 jamban",
      "2 jamban",
      "3 jamban",
      "4 jamban"
    ],
    answer: 0,
    explanation: "Sesuai Permenaker No. 5 Tahun 2018, rasio toilet untuk 1 sampai 15 pekerja minimal tersedia 1 jamban."
  },
  {
    id: 36,
    topic: "Fasilitas Kerja",
    question: "Ketentuan tinggi ruangan dari lantai sampai daerah langit-langit yang diperhitungkan dalam ruang udara tempat kerja paling sedikit...",
    options: [
      "1,5 meter",
      "2 meter",
      "2,5 meter",
      "3 meter"
    ],
    answer: 3,
    explanation: "Dalam perhitungan kubikasi ruang udara kerja, batas maksimal tinggi ceiling yang dihitung adalah 3 meter."
  },
  {
    id: 37,
    topic: "Psikososial Kerja",
    question: "Dalam manajemen stres kerja, penyesuaian peran kerja dan pemberian kejelasan tanggung jawab merupakan bentuk pengendalian...",
    options: [
      "Medis",
      "Organisasional / Manajemen",
      "Individu",
      "Biologis"
    ],
    answer: 1,
    explanation: "Kejelasan deskripsi tugas dan struktur organisasi merupakan tindakan intervensi manajemen/organisasi."
  },
  {
    id: 38,
    topic: "Konsep Dasar K3",
    question: "Suatu kejadian di tempat kerja yang berpotensi menyebabkan kerugian atau cedera tetapi belum sampai menimbulkan kerugian fisik maupun material disebut...",
    options: [
      "Kecelakaan Kerja (Accident)",
      "Nearmiss / Hampir Celaka",
      "Penyakit Akibat Kerja (PAK)",
      "Unsafe Act"
    ],
    answer: 1,
    explanation: "Nearmiss adalah kejadian nyaris celaka yang tidak menimbulkan cedera atau kerusakan material tetapi berpotensi memicunya."
  },
  {
    id: 39,
    topic: "Konsep Dasar K3",
    question: "Sumber hazard internal di tempat kerja berasal dari...",
    options: [
      "Kondisi lingkungan fisik dan kimia",
      "Faktor manusia/SDM (kondisi fisik dan psikis pekerja)",
      "Desain mesin yang tidak ergonomis",
      "Suasana psikososial lingkungan kantor"
    ],
    answer: 1,
    explanation: "Hazard internal bersumber langsung dari dalam diri pekerja itu sendiri, seperti kondisi stamina, kompetensi, dan tingkat kelelahan."
  },
  {
    id: 40,
    topic: "Personil K3",
    question: "Berdasarkan Permenaker No. 5 Tahun 2018, personil K3 yang berwenang melakukan pengukuran dan pengendalian lingkungan kerja dengan kualifikasi pendidikan minimal D3 dan pengalaman kerja minimal 1 tahun di bidangnya adalah...",
    options: [
      "Ahli K3 Muda Lingkungan Kerja",
      "Ahli K3 Madya Lingkungan Kerja",
      "Ahli K3 Utama Lingkungan Kerja",
      "Pengawas Ketenagakerjaan Utama"
    ],
    answer: 0,
    explanation: "Persyaratan kualifikasi Ahli K3 Muda Lingkungan Kerja meliputi jenjang pendidikan D3 dengan pengalaman kerja di bidang K3 minimal 1 tahun."
  }
];

// State Management Spesifik Ergonomi
let currentErgonomiQuizData = [];
let currentErgonomiIndex = 0;
let userErgonomiAnswers = [];

// Algoritma Pengacak Array (Fisher-Yates)
function shuffleErgonomiArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function initErgonomiQuiz() {
  currentErgonomiQuizData = shuffleErgonomiArray(ergonomiQuizData);
  currentErgonomiIndex = 0;
  userErgonomiAnswers = new Array(currentErgonomiQuizData.length).fill(null);
  
  const totalNumEl = document.getElementById("quiz-total-num-ergonomi");
  const resultCard = document.getElementById("quiz-result-card-ergonomi");
  
  if (totalNumEl) totalNumEl.textContent = currentErgonomiQuizData.length;
  if (resultCard) resultCard.classList.add("hidden");
  
  renderErgonomiPalette();
  renderErgonomiQuestion();
}

function renderErgonomiPalette() {
  const numberPalette = document.getElementById("quiz-number-palette-ergonomi");
  if (!numberPalette) return;
  numberPalette.innerHTML = "";

  currentErgonomiQuizData.forEach((_, idx) => {
    const pBtn = document.createElement("button");
    pBtn.type = "button";
    pBtn.textContent = idx + 1;
    pBtn.style.cssText = "width: 32px; height: 32px; padding: 0; font-size: 0.8rem; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; cursor: pointer;";
    
    if (idx === currentErgonomiIndex) {
      pBtn.style.border = "2px solid var(--accent-blue, #2563eb)";
      pBtn.style.fontWeight = "bold";
    }
    
    if (userErgonomiAnswers[idx] !== null) {
      const isCorrect = userErgonomiAnswers[idx] === currentErgonomiQuizData[idx].answer;
      pBtn.style.backgroundColor = isCorrect ? "#10b981" : "#ef4444";
      pBtn.style.color = "#ffffff";
      pBtn.style.border = "none";
    } else {
      pBtn.style.backgroundColor = "#ffffff";
      pBtn.style.color = "var(--text-color, #1e293b)";
      pBtn.style.border = "1px solid var(--border-color, #e2e8f0)";
    }

    pBtn.onclick = () => {
      currentErgonomiIndex = idx;
      renderErgonomiQuestion();
    };

    numberPalette.appendChild(pBtn);
  });
}

function renderErgonomiQuestion() {
  resetErgonomiQuizState();
  renderErgonomiPalette();

  const item = currentErgonomiQuizData[currentErgonomiIndex];

  const currentNumEl = document.getElementById("quiz-current-num-ergonomi");
  const topicTag = document.getElementById("quiz-topic-tag-ergonomi");
  const questionText = document.getElementById("quiz-question-ergonomi");
  const progressFill = document.getElementById("quiz-progress-fill-ergonomi");
  const prevButton = document.getElementById("quiz-prev-btn-ergonomi");
  const nextButton = document.getElementById("quiz-next-btn-ergonomi");
  const optionsGrid = document.getElementById("quiz-options-ergonomi");

  if (currentNumEl) currentNumEl.textContent = currentErgonomiIndex + 1;
  if (topicTag) topicTag.textContent = item.topic;
  if (questionText) questionText.textContent = item.question;

  const answeredCount = userErgonomiAnswers.filter(a => a !== null).length;
  const pct = (answeredCount / currentErgonomiQuizData.length) * 100;
  if (progressFill) progressFill.style.width = `${pct}%`;

  if (prevButton) {
    if (currentErgonomiIndex > 0) prevButton.classList.remove("hidden");
    else prevButton.classList.add("hidden");
    prevButton.onclick = () => {
      if (currentErgonomiIndex > 0) { currentErgonomiIndex--; renderErgonomiQuestion(); }
    };
  }

  if (nextButton) {
    nextButton.textContent = (currentErgonomiIndex === currentErgonomiQuizData.length - 1) ? "Lihat Hasil Akhir 🎉" : "Soal Selanjutnya \u2192";
    nextButton.onclick = () => {
      if (currentErgonomiIndex < currentErgonomiQuizData.length - 1) {
        currentErgonomiIndex++;
        renderErgonomiQuestion();
      } else {
        renderErgonomiResult();
      }
    };
  }

  if (optionsGrid) {
    item.options.forEach((optText, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-opt-btn";
      btn.innerHTML = `<span style="font-weight: 700; color: var(--text-muted, #64748b);">${String.fromCharCode(65 + idx)}.</span> <span>${optText}</span>`;
      
      if (userErgonomiAnswers[currentErgonomiIndex] !== null) {
        btn.disabled = true;
        if (idx === item.answer) {
          btn.classList.add("is-correct");
        }
        if (userErgonomiAnswers[currentErgonomiIndex] === idx && idx !== item.answer) {
          btn.classList.add("is-wrong");
        }
      } else {
        btn.onclick = () => handleSelectErgonomiOption(idx);
      }

      optionsGrid.appendChild(btn);
    });
  }

  if (userErgonomiAnswers[currentErgonomiIndex] !== null) {
    showErgonomiFeedback(userErgonomiAnswers[currentErgonomiIndex] === item.answer, item.explanation);
  }
}

function resetErgonomiQuizState() {
  const feedbackBox = document.getElementById("quiz-feedback-ergonomi");
  const optionsGrid = document.getElementById("quiz-options-ergonomi");

  if (feedbackBox) {
    feedbackBox.className = "info-box hidden";
    feedbackBox.innerHTML = "";
  }
  if (optionsGrid) optionsGrid.innerHTML = "";
}

function handleSelectErgonomiOption(chosenIdx) {
  userErgonomiAnswers[currentErgonomiIndex] = chosenIdx;
  renderErgonomiQuestion();
}

function showErgonomiFeedback(isCorrect, explanation) {
  const feedbackBox = document.getElementById("quiz-feedback-ergonomi");
  if (!feedbackBox) return;

  if (isCorrect) {
    feedbackBox.className = "info-box";
    feedbackBox.style.cssText = "background-color: var(--success-bg, #d1fae5); border-left: 4px solid var(--secondary-color, #10b981); color: #065f46;";
    feedbackBox.innerHTML = `<strong>Jawaban Benar!</strong> ${explanation}`;
  } else {
    feedbackBox.className = "info-box";
    feedbackBox.style.cssText = "background-color: var(--danger-bg, #fee2e2); border-left: 4px solid var(--danger-color, #ef4444); color: #991b1b;";
    feedbackBox.innerHTML = `<strong>Kurang Tepat.</strong> ${explanation}`;
  }
  feedbackBox.classList.remove("hidden");
}

function renderErgonomiResult() {
  const mainContainer = document.getElementById("quiz-main-container-ergonomi");
  const resultCard = document.getElementById("quiz-result-card-ergonomi");
  const finalScoreVal = document.getElementById("quiz-final-score-val-ergonomi");
  const finalDetailEl = document.getElementById("quiz-final-detail-ergonomi");
  const restartBtn = document.getElementById("quiz-restart-btn-ergonomi");

  if (mainContainer) mainContainer.classList.add("hidden");
  if (resultCard) resultCard.classList.remove("hidden");

  let correctCount = 0;
  userErgonomiAnswers.forEach((ans, idx) => {
    if (ans === currentErgonomiQuizData[idx].answer) correctCount++;
  });

  const percentage = Math.round((correctCount / currentErgonomiQuizData.length) * 100);

  if (finalScoreVal) finalScoreVal.textContent = percentage;
  if (finalDetailEl) {
    finalDetailEl.innerHTML = `Kamu berhasil menjawab <strong>${correctCount} dari ${currentErgonomiQuizData.length} soal</strong> dengan benar.`;
  }

  if (restartBtn) {
    restartBtn.onclick = () => {
      if (resultCard) resultCard.classList.add("hidden");
      const startScreen = document.getElementById("quiz-start-screen-ergonomi");
      if (startScreen) startScreen.classList.remove("hidden");
    };
  }
}
