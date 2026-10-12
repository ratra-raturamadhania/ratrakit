function showQuiz(quizNum) {
    const container = document.getElementById('quizContainer');
    if (!container) return;

    const quizTitles = [
        "Soal 1: Sampling Rata-Rata Hb (Distribusi Z)",
        "Soal 2: Distribusi Tebal Buku (Z-Score)",
        "Soal 3: Kedatangan Pasien RS (Poisson)",
        "Soal 4: Klaim Asuransi Kesehatan (Binomial)",
        "Soal 5: Peluang Gabungan Tabel Kontingensi",
        "Soal 6: Evaluasi Ringkasan 5 Angka & Boxplot"
    ];

    container.innerHTML = `
        <h3 style="color: var(--primary-color); margin-bottom: 0.75rem;">${quizTitles[quizNum - 1]}</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">
            Kadar hemoglobin ibu hamil di Kabupaten A μ = 12 g/dL dan σ = 4 g/dL. Penelitian dilakukan dengan sampel sebanyak 9 orang. Berapa probabilitas dari mereka yang akan mempunyai rata-rata Hb lebih dari 10?
        </p>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
            <input type="text" placeholder="Masukkan jawaban angka..." style="padding: 0.55rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size: 0.875rem;">
            <button class="btn-primary" style="background: var(--secondary-color); padding: 0.55rem 1.1rem;">Cek Jawaban</button>
            <button class="btn-primary" style="background: var(--accent-blue); padding: 0.55rem 1.1rem; color: #ffffff;">Lihat Pembahasan</button>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    showQuiz(1);
});
