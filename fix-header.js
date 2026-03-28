const fs = require('fs');

const clearHeaderCSS = `
/* --- FIX NOISY HEADER BAR --- */
.desktop-nav ul li {
    border: none !important;
    padding: 0 !important;
    margin: 0 !important;
}
.desktop-nav ul li a {
    border: none !important;
    white-space: nowrap !important; /* Prevent squishing text into 2 lines */
    padding: 10px 15px !important;
    background: transparent !important;
    display: inline-block;
}
.desktop-nav ul li::after,
.desktop-nav ul li::before {
    display: none !important; /* Remove any injected pipes | or shapes */
}
.main-header .desktop-nav ul li:not(:last-child) {
    border: none !important; /* Force absolutely no thick dividers */
}
.header-lang-switcher {
    background: #fff !important;
    background-image: none !important;
    border: 1px solid #ddd !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05) !important;
}
.header-left .header-lang-switcher::before,
.header-left .header-lang-switcher::after {
    display: none !important; /* Remove dark gradients */
}
.main-header.new-design-header {
    background: #ffffff !important;
    box-shadow: 0 5px 20px rgba(0,0,0,0.05) !important;
}
.new-header-container {
    gap: 20px !important;
}
`;

fs.appendFileSync('style.css', clearHeaderCSS, 'utf8');
console.log('Appended fixes to style.css');
