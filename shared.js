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
    let homeHref = isInPages ? '../index.html' : 'index.html';
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
    <div class="top-bar">
    <div class="contact-info">
    <span class="email" data-i18n="email">info@allianceofemtiaz.com</span>
    <span class="phone"><span dir="ltr" data-i18n="phone">+966 55 839 1838</span></span>
    </div>
            <div class="top-bar-right">
                <select id="language-selector">
                <option value="en" data-i18n="language_english">English</option>
                <option value="ar" data-i18n="language_arabic">العربية</option>
                </select>
                <div class="social-media">
                <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                </div>
            </div>
        </div>
        <div class="main-header">
        <div class="logo">
        <img src="${logoSrc}" alt="Emtiaze Company Logo">
        <span data-i18n="company_name">Tahaluf Alemtiaz Company Limited</span>
        </div>
        <div class="header-actions">
        <button class="theme-toggle" onclick="toggleTheme()" title="Toggle Theme">
        <svg class="sun-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2"/>
        </svg>
        <svg class="moon-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2"/>
        </svg>
        </button>
        <button class="menu-toggle" onclick="toggleMenu()" aria-label="Toggle Menu">
        <span></span>
        <span></span>
        <span></span>
        </button>
        </div>
        </div>
    `;

    const footerHTML = `
        <div class="footer-top">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section footer-brand">
                        <div class="footer-logo">
                            <img src="${logoSrc}" alt="Emtiaze Company Logo">
                            <span data-i18n="company_name">Tahaluf Alemtiaz Company Limited</span>
                        </div>
                    </div>
                    <div class="footer-section">
                        <h3 data-i18n="important_links">Important Links</h3>
                        <ul class="footer-links">
                            <li><a href="${homeHref}" data-i18n="home">Home</a></li>
                            <li><a href="${aboutHref}" data-i18n="about">About Us</a></li>
                            <li><a href="${servicesHref}" data-i18n="services">Our Services</a></li>
                            <li><a href="${projectsHref}" data-i18n="projects">Our Projects</a></li>
                            <li><a href="${clientsHref}" data-i18n="clients">Clients</a></li>
                            <li><a href="${quoteHref}" data-i18n="quote">Request a Quote</a></li>
                            <li><a href="${contactHref}" data-i18n="contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3 data-i18n="contact_information">Contact Info</h3>
                        <div class="contact-details-footer">
                            <div class="contact-item-footer">
                                <i class="fas fa-map-marker-alt"></i>
                                <div>
                                    <p class="label" data-i18n="address">Address</p>
                                    <p dir="ltr" data-i18n="address">Tabuk, Hay Karim, Abi Al-Qasim Al-Zahri, 47916</p>
                                </div>
                            </div>
                            <div class="contact-item-footer">
                                <i class="fas fa-phone-alt"></i>
                                <div>
                                    <p class="label" data-i18n="phone">Phone</p>
                                    <p dir="ltr">+966 55 839 1838</p>
                                </div>
                            </div>
                            <div class="contact-item-footer">
                                <i class="fas fa-envelope"></i>
                                <div>
                                    <p class="label" data-i18n="email">Email</p>
                                    <p dir="ltr">info@allianceofemtiaz.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-section">
                        <h3 data-i18n="follow_us">Follow Us</h3>
                        <div class="social-media footer-social">
                            <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
                            <a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
                            <a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-content">
                    <p>&copy; 2024 <span data-i18n="company_name">Tahaluf Alemtiaz Company Limited</span>. All rights reserved.</p>
                    <div class="footer-links-bottom">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    const menuHTML = `
        <div class="nav-menu-overlay" id="nav-menu-overlay"></div>
        <div class="nav-menu" id="nav-menu">
            <div class="menu-header">
                <img src="${logoSrc}" alt="Emtiaze Company Logo">
                <span data-i18n="company_name">Tahaluf Alemtiaz Company Limited</span>
            </div>
            <ul class="nav-links">
            <li><a href="${homeHref}" onclick="closeMenu()"><i class="fas fa-home"></i><span data-i18n="home">Home</span></a></li>
            <li><a href="${aboutHref}" onclick="closeMenu()"><i class="fas fa-info-circle"></i><span data-i18n="about">About Us</span></a></li>
            <li><a href="${servicesHref}" onclick="closeMenu()"><i class="fas fa-cogs"></i><span data-i18n="services">Our Services</span></a></li>
            <li><a href="${projectsHref}" onclick="closeMenu()"><i class="fas fa-project-diagram"></i><span data-i18n="projects">Our Projects</span></a></li>
            <li><a href="${clientsHref}" onclick="closeMenu()"><i class="fas fa-users"></i><span data-i18n="clients">Clients</span></a></li>
            <li><a href="${quoteHref}" onclick="closeMenu()"><i class="fas fa-quote-right"></i><span data-i18n="quote">Request Quote</span></a></li>
            <li><a href="${contactHref}" onclick="closeMenu()"><i class="fas fa-envelope"></i><span data-i18n="contact">Contact Us</span></a></li>
            </ul>
        </div>
    `;

    return { headerHTML, footerHTML, menuHTML };
}

// Menu functionality
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    const overlay = document.getElementById('nav-menu-overlay');
    const toggleBtn = document.querySelector('.menu-toggle');

    if (menu && overlay && toggleBtn) {
        const isActive = menu.classList.contains('active');
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        toggleBtn.classList.toggle('active');

        // Prevent body scroll when menu is open
        document.body.style.overflow = isActive ? 'auto' : 'hidden';
    }
}

function closeMenu() {
    const menu = document.getElementById('nav-menu');
    const overlay = document.getElementById('nav-menu-overlay');
    const toggleBtn = document.querySelector('.menu-toggle');

    if (menu && overlay && toggleBtn) {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        toggleBtn.classList.remove('active');
        document.body.style.overflow = 'auto';
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
});
