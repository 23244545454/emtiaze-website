const fs = require('fs');
const path = require('path');

const files = ['index.html', 'shared.js', 'style.css'];
const replacements = [
    { target: /تسارع الافق/g, replacement: 'تحالف الامتياز' },
    { target: /تسارع الآفاق/g, replacement: 'تحالف الامتياز' },
    { target: /tasaruealafiq/g, replacement: 'allianceofemtiaz' },
    { target: /Tasarue Alafiq/g, replacement: 'Tahaluf Alemtiaz' }
];

files.forEach(file => {
    let p = path.join(__dirname, file);
    if (!fs.existsSync(p)) return;
    
    let content = fs.readFileSync(p, 'utf8');
    replacements.forEach(r => {
        content = content.replace(r.target, r.replacement);
    });
    
    fs.writeFileSync(p, content, 'utf8');
    console.log('Processed', file);
});

// Append Bento Grid CSS to style.css
const bentoCSS = `
/* --- BENTO GRID REDESIGN --- */
.bento-grid-container {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 30px;
    padding: 60px 0;
}
.bento-right-column {
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.bento-bottom-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    flex-grow: 1;
}
.bento-card {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.bento-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 45px rgba(0,0,0,0.2);
}
.bento-large-left {
    height: 100%;
    min-height: 500px;
}
.bento-top-right {
    height: 250px;
}
.bento-square {
    height: 250px;
}
.bento-bg {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    z-index: 1;
}
.bento-bg img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}
.bento-card:hover .bento-bg img {
    transform: scale(1.08); /* Dynamic hover zoom */
}
.bento-gradient-bottom {
    position: absolute;
    bottom: 0; left: 0; width: 100%; height: 70%;
    background: linear-gradient(to top, rgba(0,0,0,0.95), transparent);
    z-index: 2;
}
.bento-content {
    position: absolute;
    bottom: 0; left: 0; width: 100%;
    padding: 30px;
    z-index: 3;
    color: #fff;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.bento-content h3 {
    font-size: 1.6rem;
    font-weight: 800;
    margin-bottom: 10px;
    color: #fff;
}
.bento-content p {
    color: #ddd;
    font-size: 0.95rem;
    margin-bottom: 0;
}
.bento-header i {
    font-size: 2.2rem;
    color: #e31e24;
    margin-bottom: 15px;
}

@media (max-width: 900px) {
    .bento-grid-container {
        grid-template-columns: 1fr;
    }
    .bento-bottom-row {
        grid-template-columns: 1fr;
    }
}
`;
fs.appendFileSync(path.join(__dirname, 'style.css'), bentoCSS, 'utf8');
console.log('Appended Bento CSS');
