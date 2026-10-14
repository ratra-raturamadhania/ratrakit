// ==========================================
// BANK SOAL GIZI KESEHATAN MASYARAKAT (40 SOAL)
// ==========================================

const giziQuizData = [
    {
        topic: "Ruang Lingkup & Transisi Epidemiologi Gizi",
        question: "Menurut Kerangka Konseptual UNICEF (1990), yang termasuk dalam penyebab langsung (immediate causes) dari masalah kurang gizi (malnutrition) adalah...",
        options: [
            "Akses pangan rumah tangga dan pelayanan kesehatan",
            "Asupan makanan yang tidak adekuat dan penyakit infeksi",
            "Pola pengasuhan anak dan sanitasi lingkungan",
            "Struktur ekonomi dan kebijakan politik"
        ],
        correct: 1,
        explanation: "Penyebab langsung (immediate causes) masalah gizi adalah asupan makanan (inadequate dietary intake) dan penyakit (disease). Akses pangan, pola asuh, dan pelayanan kesehatan merupakan penyebab tidak langsung (underlying causes)."
    },
    {
        topic: "Ruang Lingkup & Transisi Epidemiologi Gizi",
        question: "Tahapan ke-4 dalam Kerangka Transisi Gizi menurut Popkin (Popkin Framework) ditandai dengan...",
        options: [
            "Pola berburu dan meramu dengan diet tinggi serat",
            "Kelaparan akibat ketergantungan pada pertanian tunggal",
            "Konsumsi tinggi gula, garam, lemak jenuh, serta Ultra-Processed Foods (UPFs) yang memicu PTM",
            "Perubahan perilaku masyarakat menuju kesadaran nutrisi seimbang"
        ],
        correct: 2,
        explanation: "Pola 4 (Non-Communicable Disease/NCD) ditandai tingginya konsumsi gula, garam, lemak jenuh, UPFs, dan gaya hidup sedentari yang memicu penyakit tidak menular."
    },
    {
        topic: "Ruang Lingkup & Transisi Epidemiologi Gizi",
        question: "Fenomena Double Burden of Malnutrition (DBM) di Indonesia ditandai oleh...",
        options: [
            "Terjadinya penurunan angka stunting secara drastis tanpa adanya kasus obesitas",
            "Berakhirnya penyakit menular dan munculnya penyakit degeneratif secara bergantian",
            "Masalah kekurangan gizi (stunting, anemia) dan kelebihan gizi (overweight/obesitas) terjadi bersamaan dalam populasi atau rumah tangga",
            "Peningkatan gizi buruk hanya di daerah perdesaan"
        ],
        correct: 2,
        explanation: "DBM (Double Burden of Malnutrition) adalah kondisi di mana kekurangan gizi (seperti stunting/anemia) dan kelebihan gizi (overweight/obesitas) terjadi secara bersamaan dalam populasi bahkan di dalam satu rumah tangga yang sama."
    },
    {
        topic: "Ruang Lingkup & Transisi Epidemiologi Gizi",
        question: "Berdasarkan konsep teori H.L. Blum, empat faktor utama yang memengaruhi status gizi dan kesehatan masyarakat adalah...",
        options: [
            "Genetik, Pendapatan, Pekerjaan, dan Pendidikan",
            "Lingkungan, Perilaku, Pelayanan Kesehatan, dan Herediter/Keturunan",
            "Pola Makan, Olahraga, Istirahat, dan Pekerjaan",
            "Sanitasi, Imunisasi, Posyandu, dan Puskesmas"
        ],
        correct: 1,
        explanation: "Konsep H.L. Blum menyatakan kesehatan dan status gizi dipengaruhi oleh 4 faktor utama: Lingkungan, Perilaku, Pelayanan Kesehatan, dan Penduduk/Herediter."
    },
    {
        topic: "Ruang Lingkup & Transisi Epidemiologi Gizi",
        question: "Yang merupakan ciri utama dari cabang Gizi Masyarakat (Community Nutrition) dibandingkan Gizi Perorangan (Clinical Nutrition) adalah...",
        options: [
            "Berfokus pada aspek kuratif dan rehabilitatif",
            "Melibatkan profesi dokter secara dominan",
            "Berfokus pada aspek preventif dan promotif serta kerja sama lintas sektor yang luas",
            "Hanya ditujukan untuk penanganan pasien di rumah sakit"
        ],
        correct: 2,
        explanation: "Gizi masyarakat mengutamakan tindakan preventif & promotif serta membutuhkan kolaborasi lintas sektor yang kuat, berbeda dengan gizi klinis yang berfokus pada kuratif & rehabilitatif."
    },
    {
        topic: "Gizi Bayi & Balita",
        question: "Rekomendasi WHO/UNICEF mengenai pemberian ASI Eksklusif adalah...",
        options: [
            "Memberikan ASI ditambah air putih hingga bayi berusia 6 bulan",
            "Memberikan hanya ASI tanpa makanan/minuman lain (kecuali obat/vitamin sesuai indikasi) dari lahir hingga berusia 6 bulan",
            "Memberikan ASI bersama bubur susu sejak usia 4 bulan",
            "Memberikan ASI eksklusif hingga usia 12 bulan tanpa MPASI"
        ],
        correct: 1,
        explanation: "ASI Eksklusif berarti hanya memberikan ASI saja tanpa tambahan makanan atau minuman lain (termasuk air putih) selama 0–6 bulan pertama."
    },
    {
        topic: "Gizi Bayi & Balita",
        question: "Kapasitas lambung bayi baru lahir pada hari ke-1 sangat terbatas, yaitu setara dengan ukuran...",
        options: [
            "Buah aprikot (45–60 ml)",
            "Telur ayam (80–150 ml)",
            "Buah cherry (5–7 ml)",
            "Buah kemiri (22–27 ml)"
        ],
        correct: 2,
        explanation: "Pada hari ke-1 lahir, ukuran lambung bayi baru lahir sangat kecil, yaitu sebesar buah cherry dengan kapasitas sekitar 5–7 ml (sekitar 0,5 sendok makan)."
    },
    {
        topic: "Gizi Bayi & Balita",
        question: "Syarat utama pemberian makanan pendamping ASI (MPASI) yang tepat menurut WHO meliputi 4 pilar, yaitu...",
        options: [
            "Murah, Banyak, Cepat, dan Enak",
            "Tepat waktu (Timely), Adekuat (Adequate), Aman (Safe), dan Responsif (Responsively fed)",
            "Organik, Impor, Halus, dan Manis",
            "Padat, Tinggi Serat, Tanpa Lemak, dan Instan"
        ],
        correct: 1,
        explanation: "Empat syarat prinsip MPASI WHO adalah Tepat Waktu (mulai usia 6 bulan), Adekuat (memenuhi energi & zat gizi), Aman (higiene terpelihara), dan Diberikan secara Responsif."
    },
    {
        topic: "Gizi Bayi & Balita",
        question: "Tekstur dan frekuensi pemberian MPASI yang direkomendasikan untuk bayi usia 6–8 bulan adalah...",
        options: [
            "Makanan keluarga, 3–4 kali makan utama",
            "Makanan cincang halus/finger food, 3–4 kali makan utama",
            "Makanan lumat/kental (mashed), 2–3 kali makan utama ditambah ASI",
            "Cairan encer/kuah sayur, 1–2 kali makan utama"
        ],
        correct: 2,
        explanation: "Bayi usia 6–8 bulan diberikan MPASI tekstur lumat/kental (mashed) sebanyak 2–3 kali makan per hari di samping pemberian ASI."
    },
    {
        topic: "Gizi Bayi & Balita",
        question: "Kondisi malnutrisi akut pada balita yang ditandai dengan berat badan sangat rendah dibanding tinggi badannya (BB/TB < -2 SD) disebut...",
        options: [
            "Stunting",
            "Wasting (Gizi Kurang Akut)",
            "KEK",
            "Kwashiorkor"
        ],
        correct: 1,
        explanation: "Wasting (gizi kurang akut) ditandai dengan nilai Indeks Berat Badan menurut Tinggi Badan (BB/TB) berada di bawah -2 Standar Deviasi (-2 SD)."
    },
    {
        topic: "Gizi Bayi & Balita",
        question: "Untuk mencegah terjadinya stunting pada masa MPASI, komponen zat gizi makro yang paling ditekankan untuk ditingkatkan adalah...",
        options: [
            "Serat kasar dari sayuran hijau",
            "Karbohidrat sederhana dari gula murni",
            "Protein hewani (seperti telur, ikan, daging, ayam)",
            "Lemak jenuh tinggi"
        ],
        correct: 2,
        explanation: "Penekanan pemberian protein hewani pada MPASI sangat krusial untuk memicu asam amino esensial yang mendukung pertumbuhan linier anak dan mencegah stunting."
    },
    {
        topic: "Gizi Bayi & Balita",
        question: "Perilaku Responsive Feeding yang benar saat memberi makan balita adalah...",
        options: [
            "Memaksa anak menghabiskan makanan di piring",
            "Menggunakan gawai/gadget agar anak mau diam dan makan",
            "Mengenali sinyal lapar-kenyang anak serta menciptakan suasana makan yang positif",
            "Mengganti makanan utama dengan camilan manis jika anak menolak suapan pertama"
        ],
        correct: 2,
        explanation: "Responsive feeding menekankan pentingnya peka terhadap tanda lapar dan kenyang anak, bersabar, serta tidak memaksa atau menakut-nakuti anak."
    },
    {
        topic: "Gizi Anak Usia Sekolah & Remaja",
        question: "Periode usia 5–19 tahun dalam siklus kehidupan sering disebut sebagai Second Window of Opportunity karena...",
        options: [
            "Merupakan masa transisi sebelum masuk lansia",
            "Merupakan kesempatan kedua untuk mengejar keterlambatan pertumbuhan (catch-up growth) dan membentuk kebiasaan hidup sehat",
            "Merupakan periode di mana kebutuhan energi mulai menurun",
            "Terjadi penurunan aktivitas fisik secara alamiah"
        ],
        correct: 1,
        explanation: "Periode usia 5–19 tahun dianggap sebagai second window of opportunity untuk memperbaiki status gizi, mendukung pertumbuhan fisik cepat (pubertal growth spurt), dan menanamkan pola hidup sehat."
    },
    {
        topic: "Gizi Anak Usia Sekolah & Remaja",
        question: "Fenomena peningkatan lemak tubuh alamiah pada anak-anak sebelum memasuki masa percepatan pertumbuhan pubertas disebut...",
        options: [
            "Growth Spurt",
            "Adiposity Rebound",
            "Menarche",
            "Sarkopenia"
        ],
        correct: 1,
        explanation: "Adiposity rebound adalah periode peningkatan persentase lemak tubuh secara alamiah pada anak sebagai persiapan metabolisme memasuki masa pubertas."
    },
    {
        topic: "Gizi Anak Usia Sekolah & Remaja",
        question: "Kadar Hemoglobin (Hb) pada remaja putri usia 15–18 tahun dikategorikan mengalami anemia jika konsentrasinya di bawah...",
        options: [
            "13,3 g/dL",
            "12,0 g/dL",
            "11,0 g/dL",
            "10,5 g/dL"
        ],
        correct: 1,
        explanation: "Berdasarkan standar Kemenkes, batas ambang anemia untuk remaja putri usia 15–18 tahun adalah jika konsentrasi hemoglobin < 12,0 g/dL."
    },
    {
        topic: "Gizi Anak Usia Sekolah & Remaja",
        question: "Gejala khas anemia pada remaja yang sering dikenal dengan istilah '5L' meliputi...",
        options: [
            "Lapar, Layu, Lemah, Lezat, Lelah",
            "Lemah, Lesu, Letih, Lunglai, Lelah (disertai pusing)",
            "Lemah, Lelah, Lupa, Lari, Lunglai",
            "Lesu, Lelah, Luap, Luntur, Loyo"
        ],
        correct: 1,
        explanation: "Gejala utama anemia adalah 5L: Lemah, Lesu, Letih, Lunglai, dan Lelah (yang sering disertai sakit kepala atau pusing)."
    },
    {
        topic: "Gizi Anak Usia Sekolah & Remaja",
        question: "Ukuran Lingkar Lengan Atas (LiLA) pada Wanita Usia Subur (WUS) atau remaja putri yang mengindikasikan risiko Kekurangan Energi Kronis (KEK) adalah...",
        options: [
            "< 25,0 cm",
            "< 23,5 cm",
            "< 21,0 cm",
            "< 18,5 cm"
        ],
        correct: 1,
        explanation: "Risiko KEK pada WUS/remaja putri ditandai dengan ukuran LiLA < 23,5 cm, yang menunjukkan kekurangan cadangan energi dan massa otot jangka panjang."
    },
    {
        topic: "Gizi Anak Usia Sekolah & Remaja",
        question: "Gangguan perilaku makan yang ditandai dengan pembatasan asupan makanan secara ekstrem akibat rasa takut berlebih terhadap kenaikan berat badan dan distorsi citra tubuh disebut...",
        options: [
            "Bulimia Nervosa",
            "Binge Eating Disorder",
            "Anoreksia Nervosa",
            "Adiposity Rebound"
        ],
        correct: 2,
        explanation: "Anoreksia nervosa adalah gangguan makan akibat diet ekstrem dan ketakutan berlebih terhadap berat badan, yang menyebabkan penurunan berat badan drastis dan gangguan organ."
    },
    {
        topic: "Gizi Anak Usia Sekolah & Remaja",
        question: "Mengapa remaja putri memiliki risiko anemia defisiensi besi yang lebih tinggi dibandingkan remaja laki-laki?",
        options: [
            "Karena remaja putri membutuhkan energi lebih sedikit",
            "Karena remaja putri mengalami kehilangan zat besi rutin setiap bulan melalui menstruasi dan adanya pertumbuhan cepat",
            "Karena remaja putri tidak membutuhkan konsumsi protein hewani",
            "Karena remaja putri mengalami metabolisme basal yang lebih tinggi"
        ],
        correct: 1,
        explanation: "Kebutuhan zat besi remaja putri meningkat pesat untuk mendukung pertumbuhan jaringan serta menggantikan darah yang hilang secara rutin saat menstruasi."
    },
    {
        topic: "Gizi Anak Usia Sekolah & Remaja",
        question: "Upaya pencegahan anemia pada remaja putri di sekolah yang dicanangkan pemerintah melalui program kesehatan masyarakat adalah...",
        options: [
            "Pemberian makanan tambahan berupa biscuit instan setiap hari",
            "Pemberian Tablet Tambah Darah (TTD) berkala secara rutin",
            "Pemberian vitamin C dosis tinggi tanpa zat besi",
            "Melarang aktivitas fisik di sekolah"
        ],
        correct: 1,
        explanation: "Program penanggulangan anemia pada remaja putri dilakukan melalui edukasi gizi dan suplementasi Tablet Tambah Darah (TTD) secara rutin."
    },
    {
        topic: "Gizi Ibu Hamil & Menyusui",
        question: "Tambahan energi yang dibutuhkan oleh ibu hamil pada Trimester II dan Trimester III menurut AKG 2019 adalah sebesar...",
        options: [
            "+180 kkal/hari",
            "+300 kkal/hari",
            "+500 kkal/hari",
            "+750 kkal/hari"
        ],
        correct: 1,
        explanation: "Menurut AKG 2019, tambahan energi ibu hamil Trimester I adalah +180 kkal/hari, sedangkan pada Trimester II dan Trimester III adalah +300 kkal/hari."
    },
    {
        topic: "Gizi Ibu Hamil & Menyusui",
        question: "Kekurangan asam folat (folate deficiency) pada awal masa kehamilan (organogenesis) berisiko tinggi menyebabkan cacat lahir bawaan berupa...",
        options: [
            "Stunting dan Wasting",
            "Neural Tube Defects (NTDs) seperti Spina Bifida dan Anensefali",
            "Ricketsia dan Osteomalasia",
            "Scurvy"
        ],
        correct: 1,
        explanation: "Defisiensi asam folat pada masa awal kehamilan dapat memicu kegagalan penutupan bumbung saraf yang menyebabkan cacat bawaan Neural Tube Defects (seperti spina bifida dan anensefali)."
    },
    {
        topic: "Gizi Ibu Hamil & Menyusui",
        question: "Rekomendasi minimal pemberian Tablet Tambah Darah (TTD) bagi ibu hamil selama masa kehamilan menurut standar program Kemenkes adalah...",
        options: [
            "Minimal 30 tablet",
            "Minimal 60 tablet",
            "Minimal 90 tablet",
            "Minimal 120 tablet"
        ],
        correct: 2,
        explanation: "Ibu hamil dianjurkan untuk mengonsumsi minimal 90 tablet tambah darah (yang mengandung 60 mg besi elemental dan 400 mcg asam folat) selama masa kehamilan."
    },
    {
        topic: "Gizi Ibu Hamil & Menyusui",
        question: "Tambahan asupan cairan yang direkomendasikan untuk ibu menyusui di luar kebutuhan harian normal adalah sekitar...",
        options: [
            "+200 mL/hari",
            "+500 mL/hari",
            "+800 mL/hari",
            "+1500 mL/hari"
        ],
        correct: 2,
        explanation: "Ibu menyusui membutuhkan tambahan cairan sekitar +800 mL/hari untuk mendukung pembentukan dan produksi ASI."
    },
    {
        topic: "Gizi Ibu Hamil & Menyusui",
        question: "Tambahan energi rata-rata yang diperlukan oleh ibu menyusui pada 6 bulan pertama (0–6 bulan) adalah sebesar...",
        options: [
            "+180 kkal/hari",
            "+330 kkal/hari",
            "+400 kkal/hari",
            "+600 kkal/hari"
        ],
        correct: 1,
        explanation: "Untuk memproduksi ASI eksklusif selama 0–6 bulan pertama, ibu menyusui membutuhkan tambahan energi sekitar +330 kkal/hari."
    },
    {
        topic: "Gizi Ibu Hamil & Menyusui",
        question: "Zat gizi yang sangat membantu meningkatkan penyerapan zat besi non-heme dari bahan makanan nabati adalah...",
        options: [
            "Kalsium",
            "Vitamin C",
            "Vitamin D",
            "Natrium"
        ],
        correct: 1,
        explanation: "Vitamin C mempermudah reduksi besi feri menjadi fero sehingga meningkatkan efisiensi penyerapan zat besi di saluran pencernaan."
    },
    {
        topic: "Gizi Ibu Hamil & Menyusui",
        question: "Salah satu mitos keliru dalam masyarakat terkait ibu pascapersalinan/menyusui yang dapat merugikan status gizi ibu adalah...",
        options: [
            "Mewajibkan ibu menyusui minum air putih yang cukup",
            "Melarang ibu menyusui mengonsumsi ikan dan telur karena dianggap membuat ASI amis atau luka amis",
            "Mengonsumsi sayuran hijau berkuah",
            "Menambah porsi lauk pauk berprotein"
        ],
        correct: 1,
        explanation: "Pantang mengonsumsi ikan/telur karena dianggap 'amis' adalah mitos yang keliru; padahal bahan pangan tersebut merupakan sumber protein tinggi yang diperlukan untuk penyembuhan luka dan kualitas ASI."
    },
    {
        topic: "Gizi Usia Dewasa & Gizi Kerja",
        question: "Komponen pengeluaran energi harian (Total Energy Expenditure/TEE) terbesar pada individu dewasa sehat diukur dari...",
        options: [
            "Thermic Effect of Food (TEF)",
            "Basal Metabolic Rate (BMR)",
            "Physical Activity (PA)",
            "Aktivitas otak"
        ],
        correct: 1,
        explanation: "BMR (Basal Metabolic Rate) menyumbang porsi terbesar dari total pengeluaran energi harian (TEE), yaitu sekitar 60–75%."
    },
    {
        topic: "Gizi Usia Dewasa & Gizi Kerja",
        question: "Laju metabolisme basal (BMR) pada orang dewasa cenderung mengalami penurunan seiring bertambahnya usia, yaitu sekitar...",
        options: [
            "10% per tahun",
            "3–8% per dekade setelah usia 30 tahun",
            "15% per dekade",
            "Tidak mengalami perubahan"
        ],
        correct: 1,
        explanation: "Setelah usia 30 tahun, massa otot polos (lean body mass) menurun sekitar 3–8% per dekade, yang berdampak langsung pada penurunan BMR."
    },
    {
        topic: "Gizi Usia Dewasa & Gizi Kerja",
        question: "Batas aman batasan konsumsi Gula, Garam, dan Lemak (GGL) per orang per hari yang direkomendasikan oleh Kemenkes RI (Anjuran G4-G1-L5) adalah...",
        options: [
            "Gula 4 sdm (50g), Garam 1 sdt (5g), Lemak 5 sdm (67g)",
            "Gula 1 sdm, Garam 4 sdt, Lemak 2 sdm",
            "Gula 10 sdm, Garam 3 sdt, Lemak 8 sdm",
            "Gula 2 sdm, Garam 2 sdt, Lemak 2 sdm"
        ],
        correct: 0,
        explanation: "Anjuran Kemenkes RI untuk pembatasan GGL harian adalah G4-G1-L5: Gula maksimal 4 sendok makan (50g), Garam maksimal 1 sendok teh (5g), dan Lemak maksimal 5 sendok makan (67g)."
    },
    {
        topic: "Gizi Usia Dewasa & Gizi Kerja",
        question: "Kriteria Obesitas Sentral berdasarkan ukuran lingkar perut menurut Kemenkes RI adalah...",
        options: [
            "Laki-laki > 80 cm dan Perempuan > 70 cm",
            "Laki-laki > 90 cm dan Perempuan > 80 cm",
            "Laki-laki > 100 cm dan Perempuan > 90 cm",
            "Laki-laki > 85 cm dan Perempuan > 85 cm"
        ],
        correct: 1,
        explanation: "Obesitas sentral diukur dari lingkar perut dengan ambang batas berisiko yaitu > 90 cm untuk laki-laki dan > 80 cm untuk perempuan."
    },
    {
        topic: "Gizi Usia Dewasa & Gizi Kerja",
        question: "Bagi pekerja di lingkungan kerja yang panas (heat stress), potensi bahaya gizi utama yang dapat menurunkan fokus dan produktivitas adalah...",
        options: [
            "Defisiensi Vitamin C",
            "Dehidrasi dan kehilangan elektrolit",
            "Kekurangan asupan karbohidrat kompleks",
            "Kenaikan BMR yang drastis"
        ],
        correct: 1,
        explanation: "Lingkungan kerja panas menyebabkan pengeluaran keringat berlebih (1–2 liter per jam) sehingga pekerja berisiko tinggi mengalami dehidrasi dan ketidakseimbangan elektrolit."
    },
    {
        topic: "Gizi Usia Dewasa & Gizi Kerja",
        question: "Penyediaan makanan di tempat kerja sebaiknya dirancang untuk memenuhi kebutuhan energi harian pekerja sebesar...",
        options: [
            "10–15% TEE",
            "30–50% TEE (1 kali makan utama + 1 kudapan)",
            "80–100% TEE",
            "Hanya 5% TEE"
        ],
        correct: 1,
        explanation: "Makanan yang disediakan di kantin/tempat kerja idealnya memenuhi 30–50% dari total kebutuhan energi harian pekerja (terdiri dari 1 kali makan utama ± 30–35% dan kudapan ± 10–15%)."
    },
    {
        topic: "Gizi Usia Dewasa & Gizi Kerja",
        question: "Dampak fisiologis dari gangguan ritme sirkadian pada pekerja shift malam (night shift) terkait risiko metabolik adalah...",
        options: [
            "Peningkatan sensitivitas insulin",
            "Penurunan toleransi glukosa dan peningkatan risiko obesitas serta gangguan pencernaan",
            "Penurunan berat badan drastis",
            "Peningkatan massa otot"
        ],
        correct: 1,
        explanation: "Kerja shift malam mengganggu ritme sirkadian tubuh, yang menurunkan toleransi glukosa, memicu dislipidemia, serta meningkatkan risiko obesitas dan penyakit kardiometabolik."
    },
    {
        topic: "Gizi Lansia",
        question: "Penurunan massa dan kekuatan otot secara bertahap akibat proses penuaan pada lansia dikenal dengan istilah...",
        options: [
            "Osteoporosis",
            "Sarkopenia",
            "Presbiopi",
            "Dispepsia"
        ],
        correct: 1,
        explanation: "Sarkopenia adalah kondisi penurunan massa, kekuatan, dan fungsi otot yang umum terjadi pada proses penuaan lansia."
    },
    {
        topic: "Gizi Lansia",
        question: "Meskipun BMR dan kebutuhan energi lansia menurun, kebutuhan zat gizi mikro yang memerlukan perhatian khusus untuk ditingkatkan guna menjaga densitas tulang adalah...",
        options: [
            "Natrium dan Kalium",
            "Kalsium dan Vitamin D",
            "Zat Besi dan Vitamin A",
            "Lemak Jenuh dan Seng"
        ],
        correct: 1,
        explanation: "Lansia mengalami penurunan penyerapan kalsium dan penurunan sintesis vitamin D di kulit, sehingga membutuhkan asupan Kalsium dan Vitamin D yang cukup untuk mencegah osteoporosis dan fraktur tulang."
    },
    {
        topic: "Gizi Lansia",
        question: "Salah satu penyebab lansia rentan mengalami defisiensi Vitamin B12 adalah...",
        options: [
            "Penurunan asam lambung (gastric acid) yang mengganggu pelepasan B12 dari makanan",
            "Peningkatan konsumsi serat yang berlebihan",
            "Tingginya paparan sinar matahari",
            "Kelebihan asupan air putih"
        ],
        correct: 0,
        explanation: "Penurunan sekresi asam lambung dan faktor intrinsik pada saluran cerna lansia menyebabkan proses absorpsi Vitamin B12 dari bahan makanan menjadi kurang efisien."
    },
    {
        topic: "Gizi Lansia",
        question: "Mengapa lansia sering mengalami kondisi dehidrasi tanpa disadari?",
        options: [
            "Karena fungsi ginjal lansia meningkat tajam",
            "Karena terjadinya penurunan sensitivitas rasa haus (impaired sense of thirst) akibat penuaan",
            "Karena lansia tidak membutuhkan air untuk metabolisme",
            "Karena lansia selalu berkeringat berlebih"
        ],
        correct: 1,
        explanation: "Proses penuaan menurunkan respons dan sensitivitas pusat haus di otak, sehingga lansia jarang merasa haus meskipun tubuhnya sudah membutuhkan cairan."
    },
    {
        topic: "Gizi Lansia",
        question: "Anjuran porsi proporsi zat gizi makro dari total energi harian untuk lansia adalah...",
        options: [
            "Protein 50%, Lemak 40%, Karbohidrat 10%",
            "Karbohidrat 50–65%, Protein 10–20%, Lemak 20–25%",
            "Lemak 60%, Karbohidrat 30%, Protein 10%",
            "Karbohidrat 80%, Protein 5%, Lemak 15%"
        ],
        correct: 1,
        explanation: "Pedoman gizi lansia menganjurkan kecukupan karbohidrat kompleks (50–65%), protein adekuat untuk mencegah sarkopenia (10–20%), serta lemak sedang (20–25%)."
    },
    {
        topic: "Gizi Lansia",
        question: "Faktor fisiologis pencernaan yang sering menjadi hambatan lansia dalam mengonsumsi makanan berserat tinggi atau daging adalah...",
        options: [
            "Peningkatan kapasitas lambung",
            "Kehilangan gigi (tanggal) serta penurunan produksi air liur dan kemampuan mengunyah",
            "Peningkatan peristaltik usus",
            "Peningkatan tajam daya kecap"
        ],
        correct: 1,
        explanation: "Masalah kesehatan gigi/mulut (gigi ompong), penurunan produksi saliva, dan lemahnya otot mengunyah menyebabkan lansia sering kesulitan mengonsumsi makanan padat atau berserat keras."
    }
];

// STATE MANAJEMEN KUIS GIZI
let currentGiziIndex = 0;
let userGiziAnswers = new Array(giziQuizData.length).fill(null);

function initGiziQuiz() {
    currentGiziIndex = 0;
    userGiziAnswers = new Array(giziQuizData.length).fill(null);
    renderGiziPalette();
    showGiziQuestion(0);
}

function renderGiziPalette() {
    const paletteGrid = document.getElementById("quiz-number-palette-gizi");
    if (!paletteGrid) return;

    paletteGrid.innerHTML = "";
    giziQuizData.forEach((_, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "palette-btn";
        btn.innerText = idx + 1;
        btn.onclick = () => showGiziQuestion(idx);
        paletteGrid.appendChild(btn);
    });
    updateGiziPaletteStatus();
}

function updateGiziPaletteStatus() {
    const paletteBtns = document.querySelectorAll("#quiz-number-palette-gizi .palette-btn");
    paletteBtns.forEach((btn, idx) => {
        btn.classList.remove("active", "answered");
        if (idx === currentGiziIndex) {
            btn.classList.add("active");
        }
        if (userGiziAnswers[idx] !== null) {
            btn.classList.add("answered");
        }
    });
}

function showGiziQuestion(index) {
    currentGiziIndex = index;
    const qData = giziQuizData[index];

    // Elemen UI
    document.getElementById("quiz-topic-tag-gizi").innerText = qData.topic;
    document.getElementById("quiz-current-num-gizi").innerText = index + 1;
    document.getElementById("quiz-total-num-gizi").innerText = giziQuizData.length;
    document.getElementById("quiz-question-gizi").innerText = qData.question;

    // Update Progress Bar
    const progressFill = document.getElementById("quiz-progress-fill-gizi");
    if (progressFill) {
        const percent = ((index + 1) / giziQuizData.length) * 100;
        progressFill.style.width = percent + "%";
    }

    // Render Pilihan
    const optionsContainer = document.getElementById("quiz-options-gizi");
    optionsContainer.innerHTML = "";

    qData.options.forEach((optText, optIdx) => {
        const optBtn = document.createElement("button");
        optBtn.type = "button";
        optBtn.className = "option-btn";
        optBtn.innerText = optText;

        // Cek status jawaban
        if (userGiziAnswers[index] !== null) {
            optBtn.disabled = true;
            if (optIdx === qData.correct) {
                optBtn.classList.add("correct");
            }
            if (userGiziAnswers[index] === optIdx && optIdx !== qData.correct) {
                optBtn.classList.add("wrong");
            }
        } else {
            optBtn.onclick = () => selectGiziAnswer(optIdx);
        }

        optionsContainer.appendChild(optBtn);
    });

    // Render Pembahasan
    const feedbackBox = document.getElementById("quiz-feedback-gizi");
    if (userGiziAnswers[index] !== null) {
        feedbackBox.classList.remove("hidden");
        feedbackBox.innerHTML = `<strong>Pembahasan:</strong> ${qData.explanation}`;
    } else {
        feedbackBox.classList.add("hidden");
    }

    // Navigasi
    const prevBtn = document.getElementById("quiz-prev-btn-gizi");
    const nextBtn = document.getElementById("quiz-next-btn-gizi");

    if (index === 0) {
        prevBtn.classList.add("hidden");
    } else {
        prevBtn.classList.remove("hidden");
        prevBtn.onclick = () => showGiziQuestion(index - 1);
    }

    if (index === giziQuizData.length - 1) {
        nextBtn.innerText = "Selesaikan Kuis";
        nextBtn.onclick = finishGiziQuiz;
    } else {
        nextBtn.innerText = "Soal Selanjutnya \u2192";
        nextBtn.onclick = () => showGiziQuestion(index + 1);
    }

    updateGiziPaletteStatus();
}

function selectGiziAnswer(selectedOptIdx) {
    userGiziAnswers[currentGiziIndex] = selectedOptIdx;
    showGiziQuestion(currentGiziIndex);
}

function finishGiziQuiz() {
    let score = 0;
    userGiziAnswers.forEach((ans, idx) => {
        if (ans === giziQuizData[idx].correct) {
            score += 2.5; // Total 40 Soal = Skor 100
        }
    });

    document.getElementById("quiz-main-container-gizi").classList.add("hidden");
    const resultCard = document.getElementById("quiz-result-card-gizi");
    resultCard.classList.remove("hidden");

    document.getElementById("quiz-final-score-val-gizi").innerText = Math.round(score);
    document.getElementById("quiz-final-detail-gizi").innerText = `Kamu berhasil menjawab ${userGiziAnswers.filter((a, i) => a === giziQuizData[i].correct).length} dari 40 soal dengan benar.`;
}
