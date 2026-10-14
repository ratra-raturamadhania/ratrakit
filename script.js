// ==========================================
// DARK MODE MANAGEMENT
// ==========================================
function initTheme() {
    const savedTheme = localStorage.getItem("ratrakit-theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("ratrakit-theme", newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const btn = document.getElementById("themeToggleBtn");
    if (btn) {
        btn.innerHTML = theme === "dark" ? "☀️" : "🌙";
    }
}

// Inisialisasi tema saat DOM siap
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    generateZTables();
});

// ==========================================
// RENDER TABEL Z SECARA OTOMATIS
// ==========================================
function generateZTables() {
    const posTable = document.getElementById('posZTable');
    const negTable = document.getElementById('negZTable');
    
    if (posTable && posTable.children.length === 0) {
        posTable.innerHTML = buildTableHTML(false);
    }
    if (negTable && negTable.children.length === 0) {
        negTable.innerHTML = buildTableHTML(true);
    }
}

function buildTableHTML(isNegative) {
    let html = '<thead><tr><th>z</th>';
    for (let c = 0; c <= 9; c++) {
        html += `<th>0.0${c}</th>`;
    }
    html += '</tr></thead><tbody>';

    const rows = isNegative ? 
        Array.from({length: 35}, (_, i) => -3.4 + i * 0.1) : 
        Array.from({length: 35}, (_, i) => i * 0.1);

    rows.forEach(rVal => {
        const rowLabel = rVal.toFixed(1);
        html += `<tr><td><strong>${rowLabel}</strong></td>`;
        for (let c = 0; c <= 9; c++) {
            const z = isNegative ? (rVal - c * 0.01) : (rVal + c * 0.01);
            const prob = cumulativeStdNormal(z);
            html += `<td>${prob.toFixed(4)}</td>`;
        }
        html += '</tr>';
    });
    html += '</tbody>';
    return html;
}

// ==========================================
// KALKULATOR Z-SCORE & BELL CURVE
// ==========================================
function calculateZ() {
    generateZTables();
    const zInput = document.getElementById('zInput');
    if (!zInput) return;
    
    const z = parseFloat(zInput.value);
    if (isNaN(z)) return;

    const probLeft = cumulativeStdNormal(z);
    const probRight = 1 - probLeft;
    const twoTail = 2 * (1 - cumulativeStdNormal(Math.abs(z)));

    const outZ = document.getElementById('outZ');
    const outProbLeft = document.getElementById('outProbLeft');
    const outProbRight = document.getElementById('outProbRight');
    const outTwoTail = document.getElementById('outTwoTail');

    if (outZ) outZ.textContent = z.toFixed(2);
    if (outProbLeft) outProbLeft.textContent = probLeft.toFixed(4) + ` (${(probLeft * 100).toFixed(2)}%)`;
    if (outProbRight) outProbRight.textContent = probRight.toFixed(4) + ` (${(probRight * 100).toFixed(2)}%)`;
    if (outTwoTail) outTwoTail.textContent = twoTail.toFixed(4) + ` (${(twoTail * 100).toFixed(2)}%)`;

    drawBellCurve(z);
}

function cumulativeStdNormal(z) {
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989423 * Math.exp(-z * z / 2);
    let p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    if (z > 0) p = 1 - p;
    return p;
}

function drawBellCurve(z) {
    const canvas = document.getElementById('bellCurve');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    const margin = 40;
    const plotWidth = width - 2 * margin;
    const plotHeight = height - 2 * margin;

    ctx.beginPath();
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 2;
    ctx.moveTo(margin, height - margin);
    ctx.lineTo(width - margin, height - margin);
    ctx.stroke();

    function zToX(val) { return margin + ((val + 4) / 8) * plotWidth; }
    function stdNormalPDF(x) { return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI); }

    const maxY = stdNormalPDF(0);

    ctx.beginPath();
    ctx.fillStyle = 'rgba(16, 185, 129, 0.35)';
    ctx.moveTo(margin, height - margin);

    for (let px = -4; px <= z; px += 0.05) {
        const x = zToX(px);
        const y = height - margin - (stdNormalPDF(px) / maxY) * plotHeight;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(zToX(z), height - margin);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 3;
    for (let px = -4; px <= 4; px += 0.05) {
        const x = zToX(px);
        const y = height - margin - (stdNormalPDF(px) / maxY) * plotHeight;
        if (px === -4) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();

    const zX = zToX(z);
    ctx.beginPath();
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.moveTo(zX, margin);
    ctx.lineTo(zX, height - margin);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#ef4444';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText(`Z = ${z}`, zX - 15, margin - 10);
}

function switchTable(type) {
    const posWrapper = document.getElementById('posTableWrapper');
    const negWrapper = document.getElementById('negTableWrapper');
    const btnPos = document.getElementById('btn-pos-table');
    const btnNeg = document.getElementById('btn-neg-table');

    if (type === 'positive') {
        if (posWrapper) posWrapper.style.display = 'block';
        if (negWrapper) negWrapper.style.display = 'none';
        if (btnPos) btnPos.classList.add('active');
        if (btnNeg) btnNeg.classList.remove('active');
    } else {
        if (posWrapper) posWrapper.style.display = 'none';
        if (negWrapper) negWrapper.style.display = 'block';
        if (btnPos) btnPos.classList.remove('active');
        if (btnNeg) btnNeg.classList.add('active');
    }
}

// ==========================================
// FILTER PENCARIAN BERANDA
// ==========================================
function filterFeatures() {
    const input = document.getElementById('heroSearchInput');
    if (!input) return;
    
    const query = input.value.toLowerCase();
    const cards = document.querySelectorAll('.feature-card');

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (text.includes(query)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// ==========================================
// GENERATOR CITASI
// ==========================================
function generateCitation() {
    const author = document.getElementById('citAuthor').value.trim();
    const year = document.getElementById('citYear').value.trim();
    const title = document.getElementById('citTitle').value.trim();
    const journal = document.getElementById('citJournal').value.trim();
    const style = document.getElementById('citStyle').value;
    const resultBox = document.getElementById('citResultBox');
    const outputText = document.getElementById('citOutputText');

    if (!author || !title) {
        alert('Mohon isi minimal Nama Penulis dan Judul!');
        return;
    }

    let result = '';

    if (style === 'apa') {
        const formattedYear = year ? `(${year})` : '(n.d.)';
        const formattedJournal = journal ? `<em>${journal}</em>.` : '';
        result = `${author} ${formattedYear}. <i>${title}</i>. ${formattedJournal}`;
    } else if (style === 'vancouver') {
        const vanAuthor = author.replace(/,/g, '');
        const formattedYear = year ? `${year}.` : '';
        const formattedJournal = journal ? `${journal}.` : '';
        result = `${vanAuthor}. ${title}. ${formattedJournal} ${formattedYear}`;
    }

    outputText.innerHTML = result;
    resultBox.classList.remove('hidden');
}

function copyCitation() {
    const outputText = document.getElementById('citOutputText');
    const textToCopy = outputText.innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Citasi berhasil disalin ke clipboard!');
    }).catch(err => {
        alert('Gagal menyalin citasi.');
    });
}

// ==========================================
// DROPDOWN MENU
// ==========================================
function toggleDropdown(event) {
    event.stopPropagation();
    const dropdown = document.getElementById('toolsDropdown');
    if (dropdown) dropdown.classList.toggle('show');
}

window.addEventListener('click', () => {
    const dropdown = document.getElementById('toolsDropdown');
    if (dropdown && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    }
});
