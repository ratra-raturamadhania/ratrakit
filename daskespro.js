// ==========================================
// BANK SOAL DASAR KESEHATAN REPRODUKSI (40 SOAL)
// ==========================================

const daskesproQuizData = [
    {
        topic: "Ruang Lingkup & Konsep DasKesPro",
        question: "Pada tahun berapakah istilah 'kesehatan reproduksi' mulai populer secara internasional dalam Konferensi ICPD di Kairo?",
        options: [
            "1987",
            "1990",
            "1994",
            "2009"
        ],
        correct: 2,
        explanation: "Istilah 'kesehatan reproduksi' mulai populer pada tahun 1994 saat Konferensi Internasional tentang Kependudukan dan Pembangunan (ICPD) di Kairo."
    },
    {
        topic: "Ruang Lingkup & Konsep DasKesPro",
        question: "Undang-Undang Republik Indonesia Nomor berapakah yang mengatur tentang definisi kesehatan reproduksi pada Pasal 71?",
        options: [
            "UU No. 36 Tahun 2009",
            "UU No. 52 Tahun 2009",
            "UU No. 17 Tahun 2023",
            "UU No. 16 Tahun 2019"
        ],
        correct: 0,
        explanation: "Pasal 71 UU No. 36 Tahun 2009 mengatur pengertian dan cakupan kesehatan reproduksi di Indonesia."
    },
    {
        topic: "Ruang Lingkup & Konsep DasKesPro",
        question: "Prinsip dasar kesehatan reproduksi yang menjamin kesetaraan hak dan peran antara laki-laki dan perempuan disebut...",
        options: [
            "Universalitas",
            "Keadilan Gender",
            "Partisipasi Subjektif",
            "Kemandirian Fisiologis"
        ],
        correct: 1,
        explanation: "Keadilan dan kesetaraan gender menjamin hak serta tanggung jawab yang sama antara laki-laki dan perempuan dalam kesehatan reproduksi."
    },
    {
        topic: "Kesehatan Reproduksi Remaja & PKPR",
        question: "Berapa batasan usia remaja menurut Permenkes RI No. 25 Tahun 2014?",
        options: [
            "10 – 19 Tahun",
            "10 – 18 Tahun",
            "12 – 21 Tahun",
            "15 – 24 Tahun"
        ],
        correct: 1,
        explanation: "Permenkes RI No. 25 Tahun 2014 mendefinisikan remaja pada rentang usia 10–18 tahun (sedangkan WHO menetapkan 10–19 tahun)."
    },
    {
        topic: "Kesehatan Reproduksi Remaja & PKPR",
        question: "Tahun berapakah program Pelayanan Kesehatan Peduli Remaja (PKPR) pertama kali diperkenalkan di Indonesia?",
        options: [
            "1997",
            "2003",
            "2014",
            "2019"
        ],
        correct: 1,
        explanation: "Program PKPR pertama kali diinisiasi pada tahun 2003 dan diperkuat melalui penerbitan Standar Nasional PKPR pada tahun 2014."
    },
    {
        topic: "Kesehatan Reproduksi Remaja & PKPR",
        question: "Berikut yang BUKAN merupakan salah satu dari 5 Standar Nasional PKPR adalah...",
        options: [
            "Sumber Daya Manusia (SDM) kesehatan",
            "Jejaring dan Kerjasama Lintas Sektor",
            "Pemberian Alat Kontrasepsi Bebas bagi Remaja Belum Menikah",
            "Sarana dan Prasarana Kesehatan Remaja"
        ],
        correct: 2,
        explanation: "5 Standar PKPR mencakup SDM kesehatan, sarana prasarana, remaja sebagai pengguna, jejaring/kerjasama lintas sektor, dan manajemen faskes."
    },
    {
        topic: "Kesehatan Reproduksi Remaja & PKPR",
        question: "Pihak mana sajakah yang dapat memberikan layanan konseling kesehatan reproduksi remaja dalam skema PKPR?",
        options: [
            "Tenaga Kesehatan saja",
            "Guru BK saja",
            "Tenaga Kesehatan, Guru terlatih, dan Konselor Sebaya",
            "Orang tua murid saja"
        ],
        correct: 2,
        explanation: "Konseling PKPR dilaksanakan oleh tenaga kesehatan, guru yang telah dilatih khusus, serta konselor sebaya."
    },
    {
        topic: "Kesehatan Reproduksi Remaja & PKPR",
        question: "Peraturan Pemerintah nomor berapa yang memuat ketentuan khusus upaya kesehatan sistem reproduksi anak usia sekolah dan remaja?",
        options: [
            "PP No. 61 Tahun 2014",
            "PP No. 28 Tahun 2024",
            "Permenkes No. 21 Tahun 2021",
            "UU No. 17 Tahun 2023"
        ],
        correct: 1,
        explanation: "PP No. 28 Tahun 2024 memuat ketentuan khusus terkait pelaksanaan pelayanan kesehatan sistem reproduksi bagi anak sekolah dan remaja."
    },
    {
        topic: "Permasalahan Kespro Remaja & Perkawinan Dini",
        question: "Berdasarkan UU No. 16 Tahun 2019, batas usia minimal perkawinan untuk pria dan wanita di Indonesia adalah...",
        options: [
            "16 Tahun",
            "17 Tahun",
            "18 Tahun",
            "19 Tahun"
        ],
        correct: 3,
        explanation: "UU No. 16 Tahun 2019 menaikkan batas minimal usia pernikahan bagi perempuan menjadi 19 tahun, menyamakan batas usia laki-laki."
    },
    {
        topic: "Permasalahan Kespro Remaja & Perkawinan Dini",
        question: "Provinsi di Indonesia yang mencatatkan proporsi pernikahan anak usia dini (10–14 tahun) tertinggi periode 2020–2022 adalah...",
        options: [
            "Papua Barat",
            "Jawa Timur",
            "Sulawesi Barat",
            "DKI Jakarta"
        ],
        correct: 1,
        explanation: "Data kependudukan mencatatkan Jawa Timur berada pada urutan tertinggi untuk persentase pernikahan anak usia 10–14 tahun periode 2020–2022."
    },
    {
        topic: "Permasalahan Kespro Remaja & Perkawinan Dini",
        question: "Infeksi Menular Seksual (IMS) yang menjadi faktor etiologi utama terjadinya kanker serviks pada wanita adalah...",
        options: [
            "Neisseria gonorrhoeae",
            "Human Papillomavirus (HPV)",
            "Chlamydia trachomatis",
            "Treponema pallidum"
        ],
        correct: 1,
        explanation: "Infeksi persisten strain HPV risiko tinggi (terutama tipe 16 dan 18) merupakan penyebab utama terjadinya kanker serviks."
    },
    {
        topic: "Permasalahan Kespro Remaja & Perkawinan Dini",
        question: "Mengapa remaja perempuan secara biologis lebih rentan terhadap komplikasi Infeksi Menular Seksual (IMS)?",
        options: [
            "Anatomi serviks yang masih berkembang (ektopi serviks) dan faktor hormonal",
            "Sistem imunitas tubuh belum terbentuk sama sekali",
            "Tingkat keasaman (pH) vagina yang terlalu tinggi",
            "Volume darah menstruasi yang sedikit"
        ],
        correct: 0,
        explanation: "Ektropion/ektopi serviks pada remaja belum matang sempurna sehingga sel epitel kolumnar lebih terpapar oleh patogen IMS."
    },
    {
        topic: "Kependudukan & Keluarga Berencana (KB)",
        question: "Lembaga Keluarga Berencana Nasional (LKBN) bertransformasi menjadi BKKBN melalui Keppres No. 8 pada tahun...",
        options: [
            "1957",
            "1967",
            "1970",
            "2009"
        ],
        correct: 2,
        explanation: "BKKBN resmi dibentuk melalui Keppres No. 8 Tahun 1970 sebagai lembaga pengelola program KB nasional."
    },
    {
        topic: "Kependudukan & Keluarga Berencana (KB)",
        question: "Sistem informasi pencatatan dan pelaporan pelayanan KB digital yang diterapkan secara terintegrasi oleh BKKBN adalah...",
        options: [
            "e-Puskesmas",
            "SIGA (Sistem Informasi Keluarga)",
            "SIMKES",
            "SIKLINIK"
        ],
        correct: 1,
        explanation: "SIGA merupakan portal sistem pendataan dan pelaporan operasional pelayanan KB digital berbasis lapangan."
    },
    {
        topic: "Kependudukan & Keluarga Berencana (KB)",
        question: "Kelompok metode kontrasepsi berikut yang dikategorikan sebagai Metode Kontrasepsi Jangka Panjang (MKJP) adalah...",
        options: [
            "Kondom dan Pil KB",
            "Suntik 3 Bulan dan MAL",
            "IUD (AKDR), Implan, MOW (Tubektomi), dan MOP (Vasektomi)",
            "Diafragma dan Spermisida"
        ],
        correct: 2,
        explanation: "MKJP memberikan perlindungan kontrasepsi jangka panjang efektivitas tinggi (3 tahun hingga permanen/sterilisasi)."
    },
    {
        topic: "Kependudukan & Keluarga Berencana (KB)",
        question: "Langkah-langkah konseling KB terstandar yang terdiri dari 6 tahapan dikenal dengan rumus...",
        options: [
            "BAKSOKU",
            "SATU TUJU",
            "10 T",
            "GURIK MASS"
        ],
        correct: 1,
        explanation: "SATU TUJU merupakan akronim konseling KB: Sapa, Tanya, Uraikan, Bantu tentukan, Jelaskan, dan Ulangi kunjungan."
    },
    {
        topic: "Kependudukan & Keluarga Berencana (KB)",
        question: "Pasangan Usia Subur (PUS) yang belum pernah mengalami kehamilan setelah 12 bulan berhubungan intim secara teratur tanpa kontrasepsi disebut...",
        options: [
            "Infertilitas Sekunder",
            "Infertilitas Primer",
            "Unmet Need KB",
            "Amenorea Sekunder"
        ],
        correct: 1,
        explanation: "Infertilitas primer merujuk pada kondisi belum pernah hamil sama sekali setelah 1 tahun berhubungan seksual teratur tanpa pelindung."
    },
    {
        topic: "Safe Motherhood & Kesehatan Maternal",
        question: "Sebutkan 4 Pilar Utama dalam strategi Safe Motherhood menurut WHO (1994)!",
        options: [
            "KB, Asuhan Antenatal (ANC), Persalinan Bersih & Aman, Pelayanan Obstetri Esensial",
            "Gizi, Sanitasi, Imunisasi, Pendidikan Kesehatan",
            "Posyandu, Puskesmas, Rumah Sakit, PONEK",
            "Remaja, Catin, Ibu Hamil, Ibu Nifas"
        ],
        correct: 0,
        explanation: "Empat pilar Safe Motherhood meliputi KB, Asuhan Antenatal (ANC), Persalinan Bersih dan Aman, serta Pelayanan Obstetri Esensial."
    },
    {
        topic: "Safe Motherhood & Kesehatan Maternal",
        question: "Batasan risiko kehamilan '4 Terlalu' mencakup faktor-faktor berikut, KECUALI...",
        options: [
            "Terlalu Muda (<20 tahun)",
            "Terlalu Tua (>35 tahun)",
            "Terlalu Luas (Luas wilayah tempat tinggal)",
            "Terlalu Banyak (>4 anak)"
        ],
        correct: 2,
        explanation: "'4 Terlalu' terdiri dari: Terlalu Muda (<20 thn), Terlalu Tua (>35 thn), Terlalu Dekat (<2 thn), dan Terlalu Banyak (>4 anak)."
    },
    {
        topic: "Safe Motherhood & Kesehatan Maternal",
        question: "Berdasarkan standar ANC Terpadu Kemenkes RI terbaru, jumlah minimal kontak pemeriksaan kehamilan adalah...",
        options: [
            "4 kali",
            "6 kali (Trimester I: 1x, Trimester II: 2x, Trimester III: 3x)",
            "8 kali",
            "12 kali"
        ],
        correct: 1,
        explanation: "Standar ANC Terpadu mensyaratkan minimal 6 kali kunjungan selama masa kehamilan, dengan minimal 2 kali pemeriksaan dokter."
    },
    {
        topic: "Safe Motherhood & Kesehatan Maternal",
        question: "Perbedaan mendasar antara Maternal Mortality Ratio (MMR Rasio) dan Maternal Mortality Rate (MMR Rate) terletak pada pembaginya, yaitu...",
        options: [
            "MMR Rasio menggunakan pembagi Jumlah Kelahiran Hidup; MMR Rate menggunakan Jumlah Wanita Usia Subur (WUS)",
            "MMR Rasio dihitung per 1.000 penduduk; MMR Rate per 100.000 penduduk",
            "MMR Rasio khusus ibu usia muda; MMR Rate untuk semua usia ibu",
            "Tidak ada perbedaan sama sekali"
        ],
        correct: 0,
        explanation: "MMR Rasio dihitung per 100.000 Kelahiran Hidup (KH), sedangkan MMR Rate membandingkan kematian ibu dengan total populasi WUS (per 1.000 WUS)."
    },
    {
        topic: "Safe Motherhood & Kesehatan Maternal",
        question: "Etiologi utama Perdarahan Postpartum (PPH) dirumuskan dalam prinsip '4T', yaitu...",
        options: [
            "Tonus, Tissue, Trauma, Thrombin",
            "Tekanan, Tensi, Tempat, Waktu",
            "Toksisitas, Trauma, Tetanus, Trombosis",
            "Tumor, TBC, Typhus, Toksoplasma"
        ],
        correct: 0,
        explanation: "4T melambangkan: Tonus (Atonia uteri), Tissue (Retensio plasenta), Trauma (Laserasi jalan lahir), dan Thrombin (Koagulopati)."
    },
    {
        topic: "Safe Motherhood & Kesehatan Maternal",
        question: "Inovasi program pendampingan ibu hamil risiko tinggi secara terpadu di Kabupaten Banyumas dikenal dengan nama...",
        options: [
            "Jampersal",
            "KIRANA",
            "EMAS",
            "SIJARIEMAS"
        ],
        correct: 1,
        explanation: "Program KIRANA (Kawal Ibu Hamil Risiko Tinggi Terintegrasi dan Terpadu) merupakan inovasi rujukan maternal lokal di Kabupaten Banyumas."
    },
    {
        topic: "Safe Motherhood & Kesehatan Maternal",
        question: "Komponen kesiapan rujukan kebidanan 'BAKSOKU' untuk huruf 'K' pertama merujuk pada...",
        options: [
            "Keuangan",
            "Keluarga",
            "Kendaraan",
            "Keterampilan Klinik"
        ],
        correct: 2,
        explanation: "BAKSOKU: Bidan, Alat, Keluarga, Surat, Obat, Kendaraan, dan Uang."
    },
    {
        topic: "Kehamilan, Nutrisi, & Edukasi Kespro",
        question: "Rentang usia kehamilan fisiologis pada Trimester II berada pada usia gestasi...",
        options: [
            "0 – 13 minggu",
            "14 – 27 minggu",
            "28 – 40 minggu",
            "12 – 24 minggu"
        ],
        correct: 1,
        explanation: "Trimester I (0–13 minggu), Trimester II (14–27 minggu), Trimester III (28–40 minggu)."
    },
    {
        topic: "Kehamilan, Nutrisi, & Edukasi Kespro",
        question: "Hormon glikoprotein yang dihasilkan oleh trofoblas pada awal kehamilan untuk mempertahankan korpus luteum adalah...",
        options: [
            "Estrogen",
            "Progesteron",
            "human Chorionic Gonadotropin (hCG)",
            "Human Placental Lactogen (hPL)"
        ],
        correct: 2,
        explanation: "hCG disekresikan sejak awal implantasi untuk merangsang korpus luteum terus memproduksi progesteron."
    },
    {
        topic: "Kehamilan, Nutrisi, & Edukasi Kespro",
        question: "Kondisi penurunan kadar hemoglobin relatif pada ibu hamil akibat ekspansi volume plasma yang lebih besar dibanding eritrosit dinamakan...",
        options: [
            "Hemodilusi Fisiologis",
            "Hemolisis Patologis",
            "Leukositosis Fisiologis",
            "Trombositopenia Gestasional"
        ],
        correct: 0,
        explanation: "Peningkatan volume plasma darah memicu hemodilusi fisiologis yang menyebabkan penurunan konsentrasi Hb secara relatif."
    },
    {
        topic: "Kehamilan, Nutrisi, & Edukasi Kespro",
        question: "Menurut Angka Kecukupan Gizi (AKG 2019), tambahan kebutuhan energi harian bagi ibu hamil Trimester II & III adalah...",
        options: [
            "+180 kkal/hari",
            "+300 kkal/hari",
            "+450 kkal/hari",
            "+500 kkal/hari"
        ],
        correct: 1,
        explanation: "Sesuai AKG 2019, tambahan energi Trimester I sebesar +180 kkal/hari, sedangkan Trimester II & III sebesar +300 kkal/hari."
    },
    {
        topic: "Kehamilan, Nutrisi, & Edukasi Kespro",
        question: "Berapa tambahan asupan Protein harian yang direkomendasikan untuk ibu hamil Trimester III berdasarkan AKG 2019?",
        options: [
            "+1 gram/hari",
            "+10 gram/hari",
            "+30 gram/hari",
            "+40 gram/hari"
        ],
        correct: 2,
        explanation: "Tambahan protein bertahap: Trimester I (+1g), Trimester II (+10g), dan Trimester III (+30g/hari)."
    },
    {
        topic: "Kehamilan, Nutrisi, & Edukasi Kespro",
        question: "Suplementasi mikronutrien vital sebelum konsepsi dan awal kehamilan untuk mencegah Neural Tube Defects (NTD) adalah...",
        options: [
            "Asam Folat",
            "Kalsium",
            "Vitamin C",
            "Seng (Zinc)"
        ],
        correct: 0,
        explanation: "Asam folat sangat penting untuk proses penutupan bumbung saraf janin pada awal kehamilan."
    },
    {
        topic: "Kehamilan, Nutrisi, & Edukasi Kespro",
        question: "Rekomendasi model pelayanan Antenatal Care (ANC) terbaru dari WHO menetapkan minimal...",
        options: [
            "4 kali kontak",
            "6 kali kontak",
            "8 kali kontak",
            "10 kali kontak"
        ],
        correct: 2,
        explanation: "WHO ANC Model merekomendasikan minimal 8 kali kontak pelayanan selama masa kehamilan."
    },
    {
        topic: "Kehamilan, Nutrisi, & Edukasi Kespro",
        question: "Metode komunikasi edukasi kesehatan dengan meminta pasien menjelaskan kembali informasi menggunakan bahasanya sendiri dinamakan...",
        options: [
            "One-Way Presentation",
            "Teach-Back Method",
            "Peer Educator",
            "Motivational Interviewing"
        ],
        correct: 1,
        explanation: "Teach-Back Method dilakukan dengan meminta ibu menceritakan kembali pemahamannya untuk memastikan efektivitas komunikasi."
    },
    {
        topic: "Kehamilan, Nutrisi, & Edukasi Kespro",
        question: "Obat pilihan utama (gold standard) untuk penanganan serta pencegahan kejang pada kasus Preeklampsia Berat / Eklampsia adalah...",
        options: [
            "Diazepam",
            "Magnesium Sulfat (MgSO4)",
            "Nifedipin",
            "Oksitosin"
        ],
        correct: 1,
        explanation: "MgSO4 merupakan lini pertama antikonvulsan pencegah dan penangan kejang eklampsia di fasilitas layanan kesehatan."
    },
    {
        topic: "Kehamilan, Nutrisi, & Edukasi Kespro",
        question: "Berdasarkan estimasi data BPS, proporsi populasi usia remaja (10–19 tahun) di Indonesia mencapai sekitar...",
        options: [
            "20 Juta jiwa",
            "32 Juta jiwa",
            "44 Juta jiwa",
            "60 Juta jiwa"
        ],
        correct: 2,
        explanation: "Populasi remaja Indonesia berkisar 44 juta jiwa (sekitar 15,3% dari total penduduk)."
    },
    {
        topic: "Kehamilan, Nutrisi, & Edukasi Kespro",
        question: "Kebiasaan mengonsumsi teh segera setelah makan pada ibu hamil dapat memicu anemia karena kandungan tanin dalam teh...",
        options: [
            "Merusak eritrosit di intravascular",
            "Menghambat absorpsi zat besi (Fe) non-heme di usus",
            "Menghancurkan asam folat dalam lambung",
            "Mempercepat ekskresi kalsium melalui urin"
        ],
        correct: 1,
        explanation: "Senyawa tanin mengikat zat besi non-heme membentuk ikatan kompleks yang tidak dapat diserap oleh usus."
    },
    {
        topic: "Kehamilan, Nutrisi, & Edukasi Kespro",
        question: "Kematian ibu yang disebabkan komplikasi obstetri langsung terjadi lebih dari 42 hari tetapi kurang dari 1 tahun pascapersalinan disebut...",
        options: [
            "Direct Maternal Death",
            "Late Maternal Death",
            "Perinatal Mortality",
            "Non-Obstetric Death"
        ],
        correct: 1,
        explanation: "Kematian maternal akhir (Late Maternal Death) dicatat jika terjadi antara hari ke-43 hingga kurang dari 1 tahun pascapersalinan."
    },
    {
        topic: "Kehamilan, Nutrisi, & Edukasi Kespro",
        question: "Angka kelahiran total / Total Fertility Rate (TFR) sasaran untuk mencapai Replacement Level kependudukan adalah...",
        options: [
            "1.8",
            "2.1",
            "2.4",
            "3.0"
        ],
        correct: 1,
        explanation: "TFR 2,1 anak per wanita merupakan ambang tingkat penggantian (replacement level) kependudukan."
    },
    {
        topic: "Kehamilan, Nutrisi, & Edukasi Kespro",
        question: "Tanda bahaya kehamilan Trimester III yang memerlukan penanganan darurat segera meliputi...",
        options: [
            "Nyeri punggung bawah dan sering buang air kecil",
            "Perdarahan per vaginam, sakit kepala hebat disertai gangguan penglihatan, serta gerakan janin berkurang",
            "Mual di pagi hari dan pembesaran payudara",
            "Garis hitam di perut (linea nigra)"
        ],
        correct: 1,
        explanation: "Perdarahan, pusing berat/pandangan kabur (tanda preeklampsia), serta penurunan gerak janin adalah tanda bahaya cito."
    },
    {
        topic: "Kehamilan, Nutrisi, & Edukasi Kespro",
        question: "Program Kampung KB (Kampung Keluarga Berkualitas) dicanangkan pertama kali secara nasional pada tahun...",
        options: [
            "2009",
            "2012",
            "2016",
            "2022"
        ],
        correct: 2,
        explanation: "Kampung KB secara resmi dicanangkan pertama kali oleh Presiden RI pada Januari 2016."
    },
    {
        topic: "Kehamilan, Nutrisi, & Edukasi Kespro",
        question: "Fasilitas kesehatan tingkat Rumah Sakit yang menyediakan Pelayanan Obstetrik Neonatal Emergensi Komprehensif selama 24 jam disebut...",
        options: [
            "PONED",
            "PONEK",
            "Poskesdes",
            "Puskesmas Pembantu"
        ],
        correct: 1,
        explanation: "PONEK diselenggarakan di Rumah Sakit rujukan 24 jam, sedangkan PONED diselenggarakan di Puskesmas rawat inap."
    }
];

// STATE MANAJEMEN KUIS DASKESPRO
let currentDaskesproIndex = 0;
let userDaskesproAnswers = new Array(daskesproQuizData.length).fill(null);

function initDaskesproQuiz() {
    currentDaskesproIndex = 0;
    userDaskesproAnswers = new Array(daskesproQuizData.length).fill(null);
    renderDaskesproPalette();
    showDaskesproQuestion(0);
}

function renderDaskesproPalette() {
    const paletteGrid = document.getElementById("quiz-number-palette-daskespro");
    if (!paletteGrid) return;

    paletteGrid.innerHTML = "";
    daskesproQuizData.forEach((_, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "palette-btn";
        btn.innerText = idx + 1;
        btn.onclick = () => showDaskesproQuestion(idx);
        paletteGrid.appendChild(btn);
    });
    updateDaskesproPaletteStatus();
}

function updateDaskesproPaletteStatus() {
    const paletteBtns = document.querySelectorAll("#quiz-number-palette-daskespro .palette-btn");
    paletteBtns.forEach((btn, idx) => {
        btn.classList.remove("active", "answered");
        if (idx === currentDaskesproIndex) {
            btn.classList.add("active");
        }
        if (userDaskesproAnswers[idx] !== null) {
            btn.classList.add("answered");
        }
    });
}

function showDaskesproQuestion(index) {
    currentDaskesproIndex = index;
    const qData = daskesproQuizData[index];

    // Elemen UI
    document.getElementById("quiz-topic-tag-daskespro").innerText = qData.topic;
    document.getElementById("quiz-current-num-daskespro").innerText = index + 1;
    document.getElementById("quiz-total-num-daskespro").innerText = daskesproQuizData.length;
    document.getElementById("quiz-question-daskespro").innerText = qData.question;

    // Update Progress Bar
    const progressFill = document.getElementById("quiz-progress-fill-daskespro");
    if (progressFill) {
        const percent = ((index + 1) / daskesproQuizData.length) * 100;
        progressFill.style.width = percent + "%";
    }

    // Render Pilihan
    const optionsContainer = document.getElementById("quiz-options-daskespro");
    optionsContainer.innerHTML = "";

    qData.options.forEach((optText, optIdx) => {
        const optBtn = document.createElement("button");
        optBtn.type = "button";
        optBtn.className = "option-btn";
        optBtn.innerText = optText;

        // Cek status jawaban
        if (userDaskesproAnswers[index] !== null) {
            optBtn.disabled = true;
            if (optIdx === qData.correct) {
                optBtn.classList.add("correct");
            }
            if (userDaskesproAnswers[index] === optIdx && optIdx !== qData.correct) {
                optBtn.classList.add("wrong");
            }
        } else {
            optBtn.onclick = () => selectDaskesproAnswer(optIdx);
        }

        optionsContainer.appendChild(optBtn);
    });

    // Render Pembahasan
    const feedbackBox = document.getElementById("quiz-feedback-daskespro");
    if (userDaskesproAnswers[index] !== null) {
        feedbackBox.classList.remove("hidden");
        feedbackBox.innerHTML = `<strong>Pembahasan:</strong> ${qData.explanation}`;
    } else {
        feedbackBox.classList.add("hidden");
    }

    // Navigasi
    const prevBtn = document.getElementById("quiz-prev-btn-daskespro");
    const nextBtn = document.getElementById("quiz-next-btn-daskespro");

    if (index === 0) {
        prevBtn.classList.add("hidden");
    } else {
        prevBtn.classList.remove("hidden");
        prevBtn.onclick = () => showDaskesproQuestion(index - 1);
    }

    if (index === daskesproQuizData.length - 1) {
        nextBtn.innerText = "Selesaikan Kuis";
        nextBtn.onclick = finishDaskesproQuiz;
    } else {
        nextBtn.innerText = "Soal Selanjutnya \u2192";
        nextBtn.onclick = () => showDaskesproQuestion(index + 1);
    }

    updateDaskesproPaletteStatus();
}

function selectDaskesproAnswer(selectedOptIdx) {
    userDaskesproAnswers[currentDaskesproIndex] = selectedOptIdx;
    showDaskesproQuestion(currentDaskesproIndex);
}

function finishDaskesproQuiz() {
    let score = 0;
    userDaskesproAnswers.forEach((ans, idx) => {
        if (ans === daskesproQuizData[idx].correct) {
            score += 2.5; // Total 40 Soal = Skor 100
        }
    });

    document.getElementById("quiz-main-container-daskespro").classList.add("hidden");
    const resultCard = document.getElementById("quiz-result-card-daskespro");
    resultCard.classList.remove("hidden");

    document.getElementById("quiz-final-score-val-daskespro").innerText = Math.round(score);
    document.getElementById("quiz-final-detail-daskespro").innerText = `Kamu berhasil menjawab ${userDaskesproAnswers.filter((a, i) => a === daskesproQuizData[i].correct).length} dari 40 soal dengan benar.`;
}
