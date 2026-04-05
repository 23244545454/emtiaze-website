// Theme management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeToggle(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggle(newTheme);
}

function updateThemeToggle(theme) {
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
        toggle.classList.toggle('dark', theme === 'dark');
    }
}

// Shared components for header and footer
function generateSharedHTML() {
    const isInPages = window.location.pathname.includes('/pages/');
    const currentPath = window.location.pathname;
    let homeHref = '/';
    let aboutHref = isInPages ? 'about.html' : 'pages/about.html';
    let servicesHref = isInPages ? 'services.html' : 'pages/services.html';
    let projectsHref = isInPages ? 'projects.html' : 'pages/projects.html';
    let clientsHref = isInPages ? 'clients.html' : 'pages/clients.html';
    let quoteHref = isInPages ? 'quote.html' : 'pages/quote.html';
    let contactHref = isInPages ? 'contact.html' : 'pages/contact.html';
    const logoSrc = isInPages ? '../images/logo.png' : 'images/logo.png';
    const fleetSrc = isInPages ? '../images/fleet.jpg' : 'images/fleet.jpg';

    // Set href to '#' for current page to prevent reload
    if (currentPath === '/' || currentPath === '/index.html') homeHref = '#';
    if (currentPath === '/pages/about.html') aboutHref = '#';
    if (currentPath === '/pages/services.html') servicesHref = '#';
    if (currentPath === '/pages/projects.html') projectsHref = '#';
    if (currentPath === '/pages/clients.html') clientsHref = '#';
    if (currentPath === '/pages/quote.html') quoteHref = '#';
    if (currentPath === '/pages/contact.html') contactHref = '#';

    const headerHTML = `
        <style>
           .new-design-header {
               background: #ffffff !important;
               box-shadow: 0 4px 20px rgba(0,0,0,0.08) !important;
               border-bottom: 1px solid rgba(0,0,0,0.05);
               width: 100% !important;
               position: fixed;
               top: 0;
               left: 0;
               z-index: 2000;
           }
           .new-header-container {
               padding: 10px 40px !important; /* Increased padding for full-width look */
               display: flex;
               justify-content: space-between;
               align-items: center;
               direction: rtl; 
               max-width: none !important; /* Force full width */
               width: 100% !important;
               margin: 0 !important;
           }
           .desktop-nav { background: transparent !important; }
           .desktop-nav ul {
               display: flex;
               align-items: center;
               gap: 30px !important;
               list-style: none;
               margin: 0;
               padding: 0;
               background: transparent !important;
           }
           .desktop-nav ul li {
               margin: 0 !important;
               padding: 0 !important;
           }
           .desktop-nav ul li a {
               color: #111 !important;
               font-weight: 700 !important;
               font-size: 1.05rem !important;
               text-decoration: none !important;
               padding: 8px 0 !important;
               position: relative;
               white-space: nowrap !important;
               font-family: 'Cairo', sans-serif;
           }
           .desktop-nav ul li a:hover {
               color: #e31e24 !important;
           }
           .header-left-actions {
               display: flex;
               align-items: center;
               gap: 15px;
           }
           .header-contact-outline {
               background: #e31e24;
               border: 1px solid #e31e24;
               color: #fff;
               font-weight: 700;
               font-family: 'Cairo', sans-serif;
               font-size: 1rem;
               padding: 10px 25px;
               border-radius: 6px;
               cursor: pointer;
               transition: 0.3s;
           }
           .header-contact-outline:hover {
               background: #c8181f;
               border-color: #c8181f;
           }
           .header-lang-box {
               display: flex;
               align-items: center;
               gap: 8px;
               background: #f8f8f8;
               border: 1px solid #eee;
               padding: 8px 15px;
               border-radius: 6px;
               cursor: pointer;
               font-family: 'Inter', sans-serif;
               font-weight: 700;
               color: #333;
           }
           
           /* Mobile Menu Toggle Styling */
           .mobile-menu-toggle {
               display: none; /* Hide on desktop by default */
               background: none;
               border: none;
               cursor: pointer;
               padding: 5px;
               z-index: 2001;
           }

           /* Responsive Breakpoint */
           @media (max-width: 1100px) {
               .desktop-nav {
                   display: none !important;
               }
               .header-left-actions {
                   display: none !important;
               }
               .mobile-menu-toggle {
                   display: block !important;
               }
               .new-header-container {
                   padding: 10px 20px !important;
               }
           }
        </style>

        <div class="main-header new-design-header">
            <div class="container new-header-container">
                <!-- LOGO ON FAR RIGHT (Start of RTL container) -->
                <div class="logo">
                    <img src="${logoSrc}" alt="Emtiaze Company Logo" style="max-height: 130px;">
                    <span data-i18n="company_name" style="display:none;">Tahaluf Alemtiaz</span>
                </div>
                
                <!-- NAVIGATION LINKS IN CENTER -->
                <nav class="desktop-nav">
                    <ul>
                        <li><a href="${homeHref}" class="active">الصفحة الرئيسية</a></li>
                        <li><a href="#">المقالات</a></li>
                        <li><a href="${contactHref}">اتصل بنا</a></li>
                        <li><a href="${servicesHref}">خدماتنا</a></li>
                        <li><a href="#">رفع طلب</a></li>
                        <li><a href="${projectsHref}">مشاريعنا</a></li>
                        <li><a href="${aboutHref}">من نحن</a></li>
                    </ul>
                </nav>

                <!-- BUTTONS ON FAR LEFT (End of RTL container) -->
                <div class="header-left-actions" dir="ltr"> <!-- LTR here so AR ^ stays left-to-right -->
                    <div class="header-lang-box">
                        <i class="fas fa-chevron-up lang-arrow"></i>
                        <span style="font-size: 1.1rem; margin: 0 5px;">AR</span>
                        <img src="${isInPages ? '../images/saudi_flag.png' : 'images/saudi_flag.png'}" alt="Saudi Flag" style="width: 24px; height: 24px; border-radius: 50%; object-fit: cover;" onerror="this.src='images/logo.png'">
                    </div>
                    <button class="header-contact-outline" onclick="window.location.href='${contactHref}'">التواصل والاستفسار</button>
                </div>
                
                <button class="mobile-menu-toggle" onclick="toggleMenu()">
                    <i class="fas fa-bars" style="color:#111; font-size: 1.8rem;"></i>
                </button>
            </div>
        </div>
    `;

    const footerHTML = `
        <div class="footer-curved-top">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style="width: 100%; height: 120px; display: block;">
                <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="#1b2824"></path>
            </svg>
        </div>
        <div class="new-premium-footer" style="background-color: #1b2824; color: #fff; padding: 60px 0 20px;" dir="rtl">
            <div class="container">
                <div class="footer-grid-layout">
                    
                    <!-- Right Col: Info -->
                    <div class="footer-brand-info text-right">
                        <img src="${isInPages ? '../images/logo_oval.png' : 'images/logo_oval.png'}" alt="Company Logo" style="max-height: 80px; margin-bottom: 20px;" onerror="this.src='${logoSrc}'">
                        <p style="color: #bbb; line-height: 1.8; font-size: 0.95rem;">
                            بدأت شركتنا مسيرتها الناجحة بروح الشغف والالتزام، بهدف تعزيز الإسهام في تقديم خدمات النقل بشكل يعزز ويدعم القطاعات المختلفة.
                        </p>
                    </div>

                    <!-- Center Col 1: Services -->
                    <div class="footer-links-col text-right">
                        <h3 style="font-size: 1.4rem; font-weight: 700; margin-bottom: 25px; color: #fff;">خدماتنا :</h3>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px;"><a href="#" style="color: #fff; text-decoration: none;">بترولي نقليات</a></li>
                            <li style="margin-bottom: 12px;"><a href="#" style="color: #fff; text-decoration: none;">بترولي محطات</a></li>
                            <li style="margin-bottom: 12px;"><a href="#" style="color: #fff; text-decoration: none;">الخدمات اللوجستية</a></li>
                            <li style="margin-bottom: 12px;"><a href="#" style="color: #fff; text-decoration: none;">نقل البضائع</a></li>
                            <li style="margin-bottom: 12px;"><a href="#" style="color: #fff; text-decoration: none;">نقل المحروقات</a></li>
                        </ul>
                    </div>

                    <!-- Center Col 2: Quick Links -->
                    <div class="footer-links-col text-right">
                        <h3 style="font-size: 1.4rem; font-weight: 700; margin-bottom: 25px; color: #fff;">روابط سريعة</h3>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px;"><a href="${homeHref}" style="color: #fff; text-decoration: none;">الصفحة الرئيسية</a></li>
                            <li style="margin-bottom: 12px;"><a href="#" style="color: #fff; text-decoration: none;">المقالات</a></li>
                            <li style="margin-bottom: 12px;"><a href="${contactHref}" style="color: #fff; text-decoration: none;">اتصل بنا</a></li>
                            <li style="margin-bottom: 12px;"><a href="${aboutHref}" style="color: #fff; text-decoration: none;">من نحن</a></li>
                            <li style="margin-bottom: 12px;"><a href="${servicesHref}" style="color: #fff; text-decoration: none;">خدماتنا</a></li>
                            <li style="margin-bottom: 12px;"><a href="${projectsHref}" style="color: #fff; text-decoration: none;">مشاريعنا</a></li>
                            <li style="margin-bottom: 12px;"><a href="${quoteHref}" style="color: #fff; text-decoration: none;">رفع طلب</a></li>
                        </ul>
                    </div>

                    <!-- Left Col: Subscribe & Contact -->
                    <div class="footer-subscribe-col text-right">
                        <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 20px; color: #fff;">تواصل معنا</h3>
                        <div class="subscribe-box" style="display: flex; background: transparent; border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; overflow: hidden; margin-bottom: 25px;">
                            <button style="background: #e31e24; color: #fff; border: none; padding: 0 40px; font-weight: 600; cursor: pointer;">اشتراك</button>
                            <input type="email" placeholder="info@allianceofemtiaz.com" style="flex: 1; background: transparent; border: none; padding: 12px 15px; color: #fff; outline: none; text-align: left;" dir="ltr">
                        </div>
                        <div class="footer-contact-mini" style="font-size: 0.9rem; color: #bbb;">
                            <p style="margin-bottom: 10px;" dir="ltr"><i class="fas fa-map-marker-alt" style="color: #e31e24; margin-right: 8px;"></i> NATCO Middle East, Natco Logistics Services Company, SALAH AL-DIN AL AYOUBI STREET, Al Malaz, Riyadh 11411, Saudi Arabia</p>
                            <p style="margin-bottom: 10px;"><i class="fas fa-envelope" style="color: #e31e24; margin-left: 8px;"></i> info@allianceofemtiaz.com</p>
                            <p dir="ltr" style="text-align: right;"><i class="fas fa-phone-alt" style="color: #e31e24; margin-right: 8px;"></i> +966 55 839 1838</p>
                        </div>
                    </div>
                </div>

                <!-- Footer Bottom Strip -->
                <div class="footer-bottom-strip">
                    <p style="color: #bbb; font-size: 0.9rem; margin: 0;">حقوق النشر &copy; 2025 | جميع الحقوق محفوظة | شركة تحالف الامتياز المحدودة</p>
                    <div class="footer-social-icons" style="display: flex; gap: 15px;">
                        <a href="#" style="color: #bbb; font-size: 1.2rem; display: inline-flex; align-items: center; justify-content: center; width: 45px; height: 45px; border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; text-decoration: none;"><i class="fab fa-whatsapp"></i></a>
                        <a href="#" style="color: #bbb; font-size: 1.2rem; display: inline-flex; align-items: center; justify-content: center; width: 45px; height: 45px; border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; text-decoration: none;"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" style="color: #bbb; font-size: 1.2rem; display: inline-flex; align-items: center; justify-content: center; width: 45px; height: 45px; border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; text-decoration: none;"><i class="fab fa-twitter"></i></a>
                        <a href="#" style="color: #bbb; font-size: 1.2rem; display: inline-flex; align-items: center; justify-content: center; width: 45px; height: 45px; border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; text-decoration: none;"><i class="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `;

    const menuHTML = `
        <div class="nav-menu-overlay" id="nav-menu-overlay" onclick="closeMenu()"></div>
        <div class="nav-menu" id="nav-menu">

            <!-- Header -->
            <div class="nm-header">
                <div class="nm-brand">
                    <img src="${logoSrc}" alt="Logo">
                    <div class="nm-brand-text">
                        <span class="nm-brand-name">شركة تحالف الامتياز</span>
                        <span class="nm-brand-sub">نقل المحروقات والبضائع</span>
                    </div>
                </div>
                <button class="nm-close" onclick="closeMenu()" aria-label="Close">
                    <i class="fas fa-times"></i>
                </button>
            </div>

            <!-- Navigation Links -->
            <nav class="nm-nav">
                <a href="${homeHref}" class="nm-link" onclick="closeMenu()">
                    <div class="nm-link-icon" style="background:rgba(26,58,42,0.12);color:#1a3a2a">
                        <i class="fas fa-home"></i>
                    </div>
                    <div class="nm-link-body">
                        <span class="nm-link-title">الصفحة الرئيسية</span>
                        <span class="nm-link-sub">اكتشف خدماتنا ومشاريعنا</span>
                    </div>
                    <i class="fas fa-chevron-left nm-arrow"></i>
                </a>

                <a href="${aboutHref}" class="nm-link" onclick="closeMenu()">
                    <div class="nm-link-icon" style="background:rgba(227,30,36,0.1);color:#e31e24">
                        <i class="fas fa-building"></i>
                    </div>
                    <div class="nm-link-body">
                        <span class="nm-link-title">من نحن</span>
                        <span class="nm-link-sub">تعرّف على رؤيتنا ومسيرتنا</span>
                    </div>
                    <i class="fas fa-chevron-left nm-arrow"></i>
                </a>

                <a href="${servicesHref}" class="nm-link" onclick="closeMenu()">
                    <div class="nm-link-icon" style="background:rgba(227,30,36,0.1);color:#e31e24">
                        <i class="fas fa-gas-pump"></i>
                    </div>
                    <div class="nm-link-body">
                        <span class="nm-link-title">خدماتنا</span>
                        <span class="nm-link-sub">نقل محروقات • بضائع • لوجستيات</span>
                    </div>
                    <i class="fas fa-chevron-left nm-arrow"></i>
                </a>

                <a href="${projectsHref}" class="nm-link" onclick="closeMenu()">
                    <div class="nm-link-icon" style="background:rgba(26,58,42,0.12);color:#1a3a2a">
                        <i class="fas fa-trophy"></i>
                    </div>
                    <div class="nm-link-body">
                        <span class="nm-link-title">مشاريعنا</span>
                        <span class="nm-link-sub">أبرز إنجازاتنا مع الفعاليات الكبرى</span>
                    </div>
                    <i class="fas fa-chevron-left nm-arrow"></i>
                </a>

                <a href="${contactHref}" class="nm-link" onclick="closeMenu()">
                    <div class="nm-link-icon" style="background:rgba(227,30,36,0.1);color:#e31e24">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="nm-link-body">
                        <span class="nm-link-title">اتصل بنا</span>
                        <span class="nm-link-sub">تواصل مع فريقنا المتخصص</span>
                    </div>
                    <i class="fas fa-chevron-left nm-arrow"></i>
                </a>
            </nav>

            <!-- Language Switcher -->
            <div class="nm-lang-section">
                <span class="nm-lang-label"><i class="fas fa-globe"></i> اللغة / Language</span>
                <div class="nm-lang-toggle">
                    <button class="nm-lang-btn" id="nm-lang-ar" onclick="switchMenuLang('ar')">
                        <img src="${isInPages ? '../images/saudi_flag.png' : 'images/saudi_flag.png'}" alt="AR" onerror="this.style.display='none'">
                        عربي
                    </button>
                    <button class="nm-lang-btn" id="nm-lang-en" onclick="switchMenuLang('en')">
                        🇬🇧 English
                    </button>
                </div>
            </div>

            <!-- CTA Actions -->
            <div class="nm-actions">
                <a href="${quoteHref}" class="nm-btn-quote" onclick="closeMenu()">
                    <i class="fas fa-file-signature"></i>
                    رفع طلب جديد
                    <i class="fas fa-arrow-left nm-btn-arrow"></i>
                </a>
                <a href="https://wa.me/966558391838" target="_blank" class="nm-btn-wa">
                    <i class="fab fa-whatsapp"></i>
                    واتساب فوري
                </a>
            </div>

            <!-- Footer strip -->
            <div class="nm-footer">
                <a href="tel:+966558391838" class="nm-footer-link" dir="ltr">
                    <i class="fas fa-phone-alt"></i> +966 55 839 1838
                </a>
                <span class="nm-footer-dot">|</span>
                <a href="mailto:info@allianceofemtiaz.com" class="nm-footer-link">
                    <i class="fas fa-envelope"></i> بريد إلكتروني
                </a>
            </div>
        </div>
    `;

    return { headerHTML, footerHTML, menuHTML };
}

// Menu functionality
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    const overlay = document.getElementById('nav-menu-overlay');
    const toggleBtn = document.querySelector('.mobile-menu-toggle') || document.querySelector('.menu-toggle');

    if (menu) {
        const isActive = menu.classList.contains('active');
        menu.classList.toggle('active');
        if (overlay) overlay.classList.toggle('active');
        if (toggleBtn) toggleBtn.classList.toggle('active');

        // Prevent body scroll when menu is open
        document.body.style.overflow = isActive ? 'auto' : 'hidden';
    }
}

function closeMenu() {
    const menu = document.getElementById('nav-menu');
    const overlay = document.getElementById('nav-menu-overlay');
    const toggleBtn = document.querySelector('.mobile-menu-toggle') || document.querySelector('.menu-toggle');

    if (menu) {
        menu.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        if (toggleBtn) toggleBtn.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function switchMenuLang(lang) {
    // Call the main translation engine in script.js
    if (typeof updateLanguage === 'function') {
        updateLanguage(lang);
    } else {
        localStorage.setItem('selectedLanguage', lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        const sel = document.querySelector('#language-selector');
        if (sel) sel.value = lang;
    }
    // Highlight active button
    const arBtn = document.getElementById('nm-lang-ar');
    const enBtn = document.getElementById('nm-lang-en');
    if (arBtn && enBtn) {
        arBtn.classList.toggle('active', lang === 'ar');
        enBtn.classList.toggle('active', lang === 'en');
    }
}

// Function to inject header, footer, menu, and fixed navigation
function loadSharedComponents() {
    const { headerHTML, footerHTML, menuHTML, fixedNavHTML } = generateSharedHTML();
    const headerElement = document.getElementById('shared-header');
    const footerElement = document.getElementById('shared-footer');
    const bodyElement = document.body;

    if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }

    // Inject menu after header
    if (headerElement && menuHTML) {
        headerElement.insertAdjacentHTML('afterend', menuHTML);
    }

    // Inject fixed navigation at the end of body
    if (bodyElement && fixedNavHTML) {
        bodyElement.insertAdjacentHTML('beforeend', fixedNavHTML);
    }
}

// Call on DOM load
document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    loadSharedComponents();

    // Close menu when clicking overlay
    document.addEventListener('click', function (e) {
        const overlay = document.getElementById('nav-menu-overlay');
        const menu = document.getElementById('nav-menu');
        const toggleBtn = document.querySelector('.menu-toggle');

        if (e.target === overlay && overlay && menu && toggleBtn) {
            closeMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // Sync lang buttons with stored preference on menu open
    const savedLang = localStorage.getItem('selectedLanguage') || 'ar';
    document.addEventListener('click', function(e) {
        if (e.target && e.target.closest && e.target.closest('.mobile-menu-toggle, .menu-toggle')) {
            setTimeout(() => {
                const currentLang = localStorage.getItem('selectedLanguage') || 'ar';
                const arBtn = document.getElementById('nm-lang-ar');
                const enBtn = document.getElementById('nm-lang-en');
                if (arBtn && enBtn) {
                    arBtn.classList.toggle('active', currentLang === 'ar');
                    enBtn.classList.toggle('active', currentLang === 'en');
                }
            }, 80);
        }
    });
});
