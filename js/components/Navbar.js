class AppNavbar extends HTMLElement {
    constructor() {
        super();
    }

    /**
     * Detects how many folders deep the current page is from the project root
     * and returns the correct relative prefix so every link works from any page.
     */
    getBasePath() {
        const path = window.location.pathname.replace(/\\/g, '/'); // Normalize slashes for Windows

        // Check for 2 levels deep (e.g., /module1-books/Sem-1-Sub/, /module2-notes/Sem-1-Sub/ or /module4-quiz/Quiz/)
        if (
            (path.includes('/module1-books/') && path.includes('-Sub/')) ||
            (path.includes('/module2-notes/') && path.includes('-Sub/')) ||
            (path.includes('/module3-pyqs/') && path.includes('-Sub/'))
        ) {
            return '../../';
        }

        // Check for 1 level deep (e.g., /module1-books/, /module2-notes/, /module4-quiz/)
        if (
            path.includes('/module1-books/') ||
            path.includes('/module2-notes/') ||
            path.includes('/module3-pyqs/') ||
            path.includes('/module4-quiz/')
        ) {
            return '../';
        }

        // Root level
        return './';
    }

    /**
     * Returns a CSS class name if the current page matches the given nav item keyword.
     */
    getActiveClass(keyword) {
        const path = window.location.pathname.toLowerCase();
        switch (keyword) {
            case 'home':
                return (path.endsWith('/') || path.includes('index.html')) ? 'nav-active' : '';
            case 'books':
                return path.includes('/module1-books/') ? 'nav-active' : '';
            case 'notes':
                return path.includes('/module2-notes/') ? 'nav-active' : '';
            case 'pyqs':
                return path.includes('/module3-pyqs/') ? 'nav-active' : '';
            case 'quiz':
                return path.includes('/module4-quiz/') ? 'nav-active' : '';
            default:
                return '';
        }
    }

    connectedCallback() {
        const base = this.getBasePath();

        this.innerHTML = `
<style>
    /* Active nav link indicator */
    .nav-active {
        color: #38BDF8 !important;
        opacity: 1 !important;
        text-shadow: 0 0 8px rgba(56, 189, 248, 0.4);
    }
    .nav-active-bar {
        position: absolute;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%);
        width: 60%;
        height: 2.5px;
        background: linear-gradient(90deg, #38BDF8, #FF3CAC);
        border-radius: 2px;
    }
    /* Sidebar overlay */
    #sidebarOverlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.55);
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        z-index: 998;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
    }
    #sidebarOverlay.active {
        opacity: 1;
        pointer-events: auto;
    }
    /* Mobile bottom nav active */
    .mobile-nav-active p {
        color: #38BDF8 !important;
        opacity: 1 !important;
    }
    /* Sidebar link hover */
    .sidebar-link {
        transition: all 0.2s ease;
    }
    .sidebar-link:hover {
        color: #38BDF8 !important;
        transform: translateX(6px);
    }

    /* ===== Premium Login Button ===== */
    @keyframes loginGlow {
        0%, 100% { box-shadow: 0 0 5px rgba(56,189,248,0.4), 0 0 15px rgba(56,189,248,0.15); }
        50% { box-shadow: 0 0 12px rgba(56,189,248,0.6), 0 0 30px rgba(56,189,248,0.25); }
    }
    @keyframes shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
    }
    .login-btn-premium {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 28px;
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.8px;
        color: #0f0f10;
        background: linear-gradient(135deg, #38BDF8, #22d3ee, #38BDF8);
        background-size: 200% auto;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.3s ease;
        animation: loginGlow 2.5s ease-in-out infinite, shimmer 3s linear infinite;
    }
    .login-btn-premium:hover {
        transform: translateY(-2px) scale(1.04);
        box-shadow: 0 0 20px rgba(56,189,248,0.5), 0 4px 15px rgba(0,0,0,0.3);
    }
    .login-btn-premium:active {
        transform: translateY(0) scale(0.98);
    }
    .login-btn-premium svg {
        width: 16px;
        height: 16px;
        fill: #0f0f10;
    }

    /* ===== Premium Logout Button ===== */
    @keyframes logoutPulse {
        0%, 100% { box-shadow: 0 0 5px rgba(255,60,172,0.3), 0 0 12px rgba(255,60,172,0.1); }
        50% { box-shadow: 0 0 10px rgba(255,60,172,0.5), 0 0 25px rgba(255,60,172,0.2); }
    }
    .logout-btn-premium {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 24px;
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.5px;
        color: #fff;
        background: linear-gradient(135deg, #FF3CAC, #e02d97);
        border: 1px solid rgba(255,60,172,0.4);
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.3s ease;
        animation: logoutPulse 2.5s ease-in-out infinite;
    }
    .logout-btn-premium:hover {
        transform: translateY(-2px) scale(1.04);
        background: linear-gradient(135deg, #e02d97, #c4247e);
        box-shadow: 0 0 20px rgba(255,60,172,0.4), 0 4px 15px rgba(0,0,0,0.3);
    }
    .logout-btn-premium:active {
        transform: translateY(0) scale(0.98);
    }
    .logout-btn-premium svg {
        width: 16px;
        height: 16px;
        fill: #fff;
    }
</style>

<!-- Sidebar Overlay -->
<div id="sidebarOverlay"></div>

<!-- SIDEBAR -->
<div id="sidebar" class="fixed top-0 left-0 h-full w-64 bg-black text-white transform -translate-x-full transition-all duration-300 z-[999]">
    <div class="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-black-700 bg-black">
        <a href="${base}index.html" class="text-2xl font-bold hover:text-[#38BDF8] transition-colors">EduExam Hub</a>
        <svg id="closeSidebar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 mr-0 ml-auto w-8 cursor-pointer">
            <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"></path>
        </svg>
    </div>
    <div class="px-5 py-6 space-y-6 bg-black">
        <a href="${base}index.html" class="sidebar-link flex items-center gap-3 text-lg"><i class="ri-home-4-fill text-xl"></i><b>Home</b></a>
        <a href="${base}module1-books/Notes.html" data-protected="Books" class="sidebar-link flex items-center gap-3 text-lg"><i class="ri-book-fill text-xl"></i><b>Books</b></a>
        <a href="${base}module2-notes/Notes.html" data-protected="Notes" class="sidebar-link flex items-center gap-3 text-lg"><i class="ri-file-text-fill text-xl"></i><b>Notes</b></a>
        <a href="${base}module3-pyqs/Notes.html" data-protected="PYQ's" class="sidebar-link flex items-center gap-3 text-lg ${this.getActiveClass('pyqs')}"><i class="ri-file-paper-2-fill text-xl"></i><b>PYQ's</b></a>
        <a href="${base}module4-quiz/Quiz/index.html" data-protected="Quiz" class="sidebar-link flex items-center gap-3 text-lg"><i class="ri-question-answer-fill text-xl"></i><b>Quiz</b></a>
        <a href="#" class="sidebar-link flex items-center gap-3 text-lg"><i class="ri-user-3-fill text-xl"></i><b>Contact</b></a>
        <a href="#" class="sidebar-link flex items-center gap-3 text-lg"><i class="ri-feedback-fill text-xl"></i><b>Feedback</b></a>
    </div>
</div>

<!-- Nav Bar Start -->
<nav class="xl:px-16 md:px-8 px-6 py-3 bg-opacity-80 md:bg-opacity-100 md:dark:bg-opacity-100 dark:bg-opacity-80 md:backdrop-blur-none md:backdrop-filter-none backdrop-filter backdrop-blur-[4px] bg-white dark:bg-[#0f0f10] border-gray-100 dark:border-gray-900 border-b z-10 sticky top-0">
    <div class="left-0 absolute top-0 h-40 -z-50 blur-[75px] opacity-1 safari_only w-full to-blue-500 via-transparent bg-gradient-to-br from-pink-400"></div>

    <div class="2xl:max-w-[1280px] md:max-w-3xl lg:max-w-7xl mx-auto flex items-center justify-between gap-8">
        <div class="lg:hidden">
            <nav class="fixed top-0 left-0 z-[998] mb-4" style="transform: translateX(4px); opacity: 1;">
                <svg id="openSidebar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8 top-[14px] absolute left-4 cursor-pointer text-black dark:text-white">
                    <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"></path>
                </svg>
            </nav>
        </div>

        <div class="mx-auto flex justify-center flex-1 lg:flex-none">
            <a class="flex items-center" href="${base}index.html">
                <h2 class="font-extrabold text-center cursor-pointer text-[24px] leading-[30.24px] md:mt-1 text-white">
                    <span style="font-size:3rem; font-weight:700; color:#38BDF8; font-family: 'Times New Roman', Times, serif; text-shadow: 0 0 0.9px #38BDF8;">E</span>duExam 
                    <span style="color: #38BDF8;">H</span>ub
                </h2>
            </a>
        </div>

        <div class="hidden flex-1 items-center justify-end capitalize sm:items-stretch lg:mr-8 lg:inline-flex lg:px-8">
            <div class="hidden sm:block">
                <div class="flex flex-row items-center space-x-2">
                    <a class="flex flex-row z-10 flex-shrink-0 items-center lg:space-x-2 relative" href="${base}module1-books/Notes.html" data-protected="Books">
                        <div><i style="color: #38BDF8; font-size: 1.6rem;" class='bx bx-book'></i></div>
                        <div class="sm:px-3 text-center sm:py-2 text-[14px] sm:text-[18px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 dark:text-white/60 text-black/60 duration-300 dark:hover:text-white hover:text-black font-bold cursor-pointer ${this.getActiveClass('books')}">Books</div>
                        ${this.getActiveClass('books') ? '<span class="nav-active-bar"></span>' : ''}
                    </a>
                    
                    <a class="flex flex-row z-10 flex-shrink-0 items-center lg:space-x-2 relative" href="${base}module2-notes/Notes.html" data-protected="Notes">
                        <div><i style="color: #38BDF8; font-size: 1.6rem;" class='bx bx-edit'></i></div>
                        <div class="sm:px-3 text-center sm:py-2 text-[14px] sm:text-[18px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 dark:text-white/60 text-black/60 duration-300 dark:hover:text-white hover:text-black font-bold cursor-pointer ${this.getActiveClass('notes')}">Notes</div>
                        ${this.getActiveClass('notes') ? '<span class="nav-active-bar"></span>' : ''}
                    </a>
                    
                    <a class="flex flex-row z-10 flex-shrink-0 items-center lg:space-x-2 relative" href="${base}module3-pyqs/Notes.html" data-protected="PYQ's">
                        <div><i style="color: #38BDF8; font-size: 1.6rem;" class='bx bx-file'></i></div>
                        <div class="sm:px-3 text-center sm:py-2 text-[14px] sm:text-[18px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 dark:text-white/60 text-black/60 duration-300 dark:hover:text-white hover:text-black font-bold cursor-pointer ${this.getActiveClass('pyqs')}">PYQ's</div>
                        ${this.getActiveClass('pyqs') ? '<span class="nav-active-bar"></span>' : ''}
                    </a>

                    <a class="flex flex-row z-10 flex-shrink-0 items-center lg:space-x-2 relative" href="${base}module4-quiz/Quiz/index.html" data-protected="Quiz">
                        <div>
                            <svg width="25.6" height="25.6" fill="#38BDF8" viewBox="0 0 24 24"><path d="M11 14h2v2h-2z"></path><path d="M20 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h3v2c0 .36.19.69.51.87a1.002 1.002 0 0 0 1-.01L13.27 19h6.72c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 14h-7c-.18 0-.36.05-.51.14L9 19.23V18c0-.55-.45-1-1-1H4V5h16z"></path><path d="M10.94 8.44c.57-.57 1.55-.57 2.12 0A1.499 1.499 0 0 1 12 11c-.55 0-1 .45-1 1v1h2v-.14c.55-.16 1.06-.46 1.47-.88.66-.66 1.03-1.54 1.03-2.47s-.36-1.81-1.03-2.47c-1.32-1.32-3.63-1.32-4.95 0-.66.66-1.03 1.54-1.03 2.47h2c0-.4.16-.78.44-1.06Z"></path></svg>
                        </div>
                        <div class="sm:px-3 text-center sm:py-2 text-[14px] sm:text-[18px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 dark:text-white/60 text-black/60 duration-300 dark:hover:text-white hover:text-black font-bold cursor-pointer ${this.getActiveClass('quiz')}">Quiz</div>
                        ${this.getActiveClass('quiz') ? '<span class="nav-active-bar"></span>' : ''}
                    </a>

                    <div class="flex flex-row z-10 flex-shrink-0 items-center lg:space-x-2">
                        <div class="btn-box ml-4" id="authButtonContainer">
                            <!-- Auth button will be injected here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>

<!-- Mobile Bottom Nav -->
<div class="fixed left-0 z-10 bottom-0 w-full bg-gray-50 dark:bg-[#1b0717] md:hidden"> 
    <div class="flex pt-3 bottom-0 cursor-pointer flex-col items-center justify-around rounded-t-md bg-gray-50 dark:bg-[#1b0717] px-2 text-black dark:text-white"> 
        <div class="z-10 flex list-none justify-between space-x-8 text-sm sm:space-x-16 sm:px-4">
            <a class="flex flex-col w-1/4 items-center text-center align-middle ${this.getActiveClass('books') ? 'mobile-nav-active' : ''}" href="${base}module1-books/Notes.html" data-protected="Books">
                <svg width="24" height="24" fill="#38BDF8" viewBox="0 0 24 24"><path d="M8 6h9v2H8z"></path><path d="M20 2H6C4.35 2 3 3.35 3 5v14c0 1.65 1.35 3 3 3h15v-2H6c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1m-6 14H6c-.35 0-.69.07-1 .18V5c0-.55.45-1 1-1h13v12z"></path></svg>
                <p class="mt-1 text-center font-medium cursor-pointer sm:px-3 text-center sm:py-2 text-[14px] sm:text-[16px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 dark:text-white/60 text-black/60 duration-300 dark:hover:text-white hover:text-black text-[14px]">Books</p>
            </a>
            <a class="flex flex-col w-1/4 items-center text-center align-middle ${this.getActiveClass('notes') ? 'mobile-nav-active' : ''}" href="${base}module2-notes/Notes.html" data-protected="Notes">
                <svg width="24" height="24" fill="#38BDF8" viewBox="0 0 24 24"><path d="M5 21h14c1.1 0 2-.9 2-2v-7h-2v7H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2"></path><path d="M7 13v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l9-9a.996.996 0 0 0 0-1.41l-3-3a.996.996 0 0 0-1.41 0l-9.01 8.99A1 1 0 0 0 7 13m10-7.59L18.59 7 17.5 8.09 15.91 6.5zm-8 8 5.5-5.5 1.59 1.59-5.5 5.5H9z"></path></svg>
                <p class="mt-1 text-center font-medium cursor-pointer sm:px-3 text-center sm:py-2 text-[14px] sm:text-[16px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 dark:text-white/60 text-black/60 duration-300 dark:hover:text-white hover:text-black text-[14px]">Notes</p>
            </a>
            <a class="flex flex-col w-1/4 items-center text-center align-middle ${this.getActiveClass('pyqs') ? 'mobile-nav-active' : ''}" href="${base}module3-pyqs/Notes.html" data-protected="PYQ's">
                <svg width="24" height="24" fill="#38BDF8" viewBox="0 0 24 24"><path d="m19.94 7.68-.03-.09a.8.8 0 0 0-.2-.29l-5-5c-.09-.09-.19-.15-.29-.2l-.09-.03a.8.8 0 0 0-.26-.05c-.02 0-.04-.01-.06-.01H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12s-.01-.04-.01-.06c0-.09-.02-.17-.05-.26ZM6 20V4h7v4c0 .55.45 1 1 1h4v11z"></path><path d="M8 11h8v2H8zM8 15h8v2H8zM8 7h3v2H8z"></path></svg>
                <p class="mt-1 text-center font-medium cursor-pointer sm:px-3 text-center sm:py-2 text-[14px] sm:text-[16px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 dark:text-white/60 text-black/60 duration-300 dark:hover:text-white hover:text-black text-[14px]">PYQ's</p>
            </a>
            <a class="flex flex-col w-1/4 items-center text-center align-middle ${this.getActiveClass('quiz') ? 'mobile-nav-active' : ''}" href="${base}module4-quiz/Quiz/index.html" data-protected="Quiz">
                <svg width="24" height="24" fill="#38BDF8" viewBox="0 0 24 24"><path d="M11 14h2v2h-2z"></path><path d="M20 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h3v2c0 .36.19.69.51.87a1.002 1.002 0 0 0 1-.01L13.27 19h6.72c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 14h-7c-.18 0-.36.05-.51.14L9 19.23V18c0-.55-.45-1-1-1H4V5h16z"></path><path d="M10.94 8.44c.57-.57 1.55-.57 2.12 0A1.499 1.499 0 0 1 12 11c-.55 0-1 .45-1 1v1h2v-.14c.55-.16 1.06-.46 1.47-.88.66-.66 1.03-1.54 1.03-2.47s-.36-1.81-1.03-2.47c-1.32-1.32-3.63-1.32-4.95 0-.66.66-1.03 1.54-1.03 2.47h2c0-.4.16-.78.44-1.06Z"></path></svg>
                <p class="mt-1 text-center font-medium cursor-pointer sm:px-3 text-center sm:py-2 text-[14px] sm:text-[16px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 dark:text-white/60 text-black/60 duration-300 dark:hover:text-white hover:text-black text-[14px]">Quiz</p>
            </a>
        </div>
    </div>
</div>
        `;

        // --- Sidebar functionality ---
        const sidebar = this.querySelector("#sidebar");
        const overlay = this.querySelector("#sidebarOverlay");
        const openBtn = this.querySelector("#openSidebar");
        const closeBtn = this.querySelector("#closeSidebar");

        const openSidebar = () => {
            if (sidebar) {
                sidebar.classList.remove("-translate-x-full");
                sidebar.classList.add("translate-x-0");
            }
            if (overlay) overlay.classList.add("active");
        };

        const closeSidebar = () => {
            if (sidebar) {
                sidebar.classList.add("-translate-x-full");
                sidebar.classList.remove("translate-x-0");
            }
            if (overlay) overlay.classList.remove("active");
        };

        if (openBtn) openBtn.addEventListener("click", openSidebar);
        if (closeBtn) closeBtn.addEventListener("click", closeSidebar);
        if (overlay) overlay.addEventListener("click", closeSidebar);

        // Close sidebar on Escape key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeSidebar();
        });

        // --- Auth Button ---
        this.renderAuthButton();

        // --- Login Modal for Protected Pages ---
        this.setupProtectedLinks();
    }

    /**
     * Intercept clicks on protected nav links (Books, Notes, PYQs, Quiz).
     * If user is NOT logged in, show login popup instead of navigating.
     */
    setupProtectedLinks() {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        if (isLoggedIn) return; // Already logged in, no interception needed

        const base = this.getBasePath();

        // Dynamically load LoginModal.js if not already loaded
        if (!customElements.get('login-modal')) {
            const script = document.createElement('script');
            script.src = base + 'js/components/LoginModal.js';
            document.head.appendChild(script);
        }

        // Create the login-modal element if it doesn't exist on the page
        // Small delay to ensure the script has loaded
        setTimeout(() => {
            if (!document.querySelector('login-modal')) {
                const modal = document.createElement('login-modal');
                document.body.appendChild(modal);
            }
        }, 100);

        // Mark all protected links with data attributes
        const protectedLinks = this.querySelectorAll('[data-protected]');
        protectedLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (localStorage.getItem("isLoggedIn") === "true") return; // Allow if logged in during session
                e.preventDefault();
                const pageName = link.getAttribute('data-protected');
                const targetUrl = link.getAttribute('href');
                const modal = document.querySelector('login-modal');
                if (modal) {
                    modal.show(pageName, targetUrl, base);
                }
            });
        });
    }

    renderAuthButton() {
        const authContainer = this.querySelector("#authButtonContainer");
        if (!authContainer) return;

        const base = this.getBasePath();
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

        if (isLoggedIn) {
            authContainer.innerHTML = `
                <button id="logoutBtn" class="logout-btn-premium">
                    <svg viewBox="0 0 24 24"><path d="M16 13v-2H7V8l-5 4 5 4v-3z"/><path d="M20 3h-9c-1.1 0-2 .9-2 2v4h2V5h9v14h-9v-4H9v4c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>
                    Logout
                </button>
            `;
            this.querySelector("#logoutBtn").addEventListener("click", () => {
                localStorage.removeItem("isLoggedIn");
                window.location.href = base + "index.html";
            });
        } else {
            authContainer.innerHTML = `
                <a href="${base}login.html" class="login-btn-premium">
                    <svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z"/></svg>
                    LOGIN
                </a>
            `;
        }
    }
}

customElements.define('app-navbar', AppNavbar);
