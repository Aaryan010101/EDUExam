/**
 * LoginModal Web Component
 * A premium glassmorphism login popup that intercepts protected page access.
 * Shows when a non-logged-in user tries to access Books, Notes, PYQ, or Quiz.
 */
class LoginModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
<style>
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

    :host {
        position: fixed;
        inset: 0;
        z-index: 99999;
        display: none;
        align-items: center;
        justify-content: center;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    :host(.visible) {
        display: flex;
    }

    /* ===== Backdrop ===== */
    .overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        z-index: 1;
        opacity: 0;
        transition: opacity 0.35s ease;
    }
    :host(.visible) .overlay {
        opacity: 1;
    }

    /* ===== Modal Card ===== */
    .modal-card {
        position: relative;
        z-index: 2;
        width: 100%;
        max-width: 420px;
        margin: 20px;
        background: rgba(15, 15, 20, 0.95);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 24px;
        padding: 40px 36px 36px;
        transform: scale(0.85) translateY(30px);
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        overflow: hidden;
    }
    :host(.visible) .modal-card {
        transform: scale(1) translateY(0);
        opacity: 1;
    }

    /* Gradient border glow */
    .modal-card::before {
        content: '';
        position: absolute;
        inset: -1px;
        border-radius: 24px;
        padding: 1px;
        background: linear-gradient(135deg, rgba(56,189,248,0.4), transparent 40%, transparent 60%, rgba(255,60,172,0.4));
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
    }

    /* Top accent line */
    .modal-card::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 160px;
        height: 2px;
        background: linear-gradient(90deg, transparent, #38BDF8, transparent);
    }

    /* ===== Close Button ===== */
    .close-btn {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 10px;
        color: rgba(255,255,255,0.4);
        cursor: pointer;
        font-size: 18px;
        line-height: 1;
        transition: all 0.25s ease;
    }
    .close-btn:hover {
        background: rgba(255,60,60,0.15);
        border-color: rgba(255,60,60,0.3);
        color: #ff6b6b;
    }

    /* ===== Header ===== */
    .modal-header {
        text-align: center;
        margin-bottom: 8px;
    }
    .lock-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 56px;
        height: 56px;
        border-radius: 16px;
        background: linear-gradient(135deg, rgba(56,189,248,0.15), rgba(255,60,172,0.1));
        border: 1px solid rgba(56,189,248,0.2);
        margin-bottom: 16px;
        font-size: 24px;
    }
    .modal-title {
        font-size: 1.4rem;
        font-weight: 700;
        color: #fff;
        margin-bottom: 6px;
    }
    .modal-subtitle {
        color: rgba(255,255,255,0.4);
        font-size: 0.85rem;
        line-height: 1.5;
    }
    .target-page {
        color: #38BDF8;
        font-weight: 600;
    }

    /* ===== Form ===== */
    .form-group {
        margin-bottom: 16px;
    }
    .form-group label {
        display: block;
        color: rgba(255,255,255,0.55);
        font-size: 0.78rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.7px;
        margin-bottom: 7px;
    }
    .input-wrap {
        position: relative;
    }
    .input-wrap input {
        width: 100%;
        padding: 13px 16px 13px 44px;
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 12px;
        color: #fff;
        font-size: 0.9rem;
        font-family: inherit;
        outline: none;
        transition: all 0.3s ease;
    }
    .input-wrap input::placeholder {
        color: rgba(255,255,255,0.2);
    }
    .input-wrap input:focus {
        border-color: #38BDF8;
        background: rgba(56,189,248,0.04);
        box-shadow: 0 0 0 3px rgba(56,189,248,0.08);
    }
    .input-icon {
        position: absolute;
        left: 14px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 18px;
        color: rgba(255,255,255,0.2);
        transition: color 0.3s;
        pointer-events: none;
    }
    .input-wrap:focus-within .input-icon {
        color: #38BDF8;
    }
    .pass-toggle {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        color: rgba(255,255,255,0.2);
        cursor: pointer;
        font-size: 18px;
        padding: 4px;
        transition: color 0.3s;
    }
    .pass-toggle:hover {
        color: #38BDF8;
    }

    /* ===== Error ===== */
    .error-box {
        background: rgba(255,60,60,0.08);
        border: 1px solid rgba(255,60,60,0.2);
        border-radius: 10px;
        padding: 10px 14px;
        color: #ff6b6b;
        font-size: 0.82rem;
        margin-bottom: 16px;
        display: none;
        align-items: center;
        gap: 8px;
        animation: shake 0.35s ease;
    }
    .error-box.show { display: flex; }
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-6px); }
        50% { transform: translateX(6px); }
        75% { transform: translateX(-3px); }
    }

    /* ===== Submit ===== */
    @keyframes shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
    }
    .submit-btn {
        width: 100%;
        padding: 14px;
        margin-top: 8px;
        background: linear-gradient(135deg, #38BDF8, #22d3ee, #38BDF8);
        background-size: 200% auto;
        border: none;
        border-radius: 12px;
        color: #0a0a0f;
        font-size: 0.95rem;
        font-weight: 700;
        font-family: inherit;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }
    .submit-btn:hover {
        animation: shimmer 2s linear infinite;
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(56,189,248,0.3);
    }
    .submit-btn:active {
        transform: translateY(0);
    }
    .submit-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none !important;
    }
    .submit-btn.loading { color: transparent; }
    .submit-btn.loading::after {
        content: '';
        position: absolute;
        top: 50%; left: 50%;
        width: 20px; height: 20px;
        margin: -10px 0 0 -10px;
        border: 3px solid rgba(10,10,15,0.2);
        border-top-color: #0a0a0f;
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    /* ===== Divider ===== */
    .divider {
        display: flex;
        align-items: center;
        gap: 14px;
        margin: 20px 0;
    }
    .divider::before, .divider::after {
        content: '';
        flex: 1;
        height: 1px;
        background: rgba(255,255,255,0.06);
    }
    .divider span {
        color: rgba(255,255,255,0.2);
        font-size: 0.75rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    /* ===== Link to full login page ===== */
    .alt-link {
        text-align: center;
        margin-top: 16px;
        color: rgba(255,255,255,0.35);
        font-size: 0.85rem;
    }
    .alt-link a {
        color: #38BDF8;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s;
    }
    .alt-link a:hover {
        color: #22d3ee;
        text-shadow: 0 0 8px rgba(56,189,248,0.3);
    }

    /* Mobile */
    @media (max-width: 480px) {
        .modal-card {
            padding: 32px 24px 28px;
            margin: 16px;
        }
    }
</style>

<div class="overlay" id="overlay"></div>
<div class="modal-card">
    <button class="close-btn" id="closeBtn">✕</button>

    <div class="modal-header">
        <div class="lock-icon">🔐</div>
        <h2 class="modal-title">Login Required</h2>
        <p class="modal-subtitle">Sign in to access <span class="target-page" id="targetName">this section</span></p>
    </div>

    <div class="error-box" id="errorBox">
        <span>⚠️</span>
        <span id="errorText">Invalid credentials</span>
    </div>

    <form id="modalForm" autocomplete="off">
        <div class="form-group">
            <label for="modalEmail">Email</label>
            <div class="input-wrap">
                <span class="input-icon">✉</span>
                <input type="email" id="modalEmail" placeholder="you@example.com" required>
            </div>
        </div>
        <div class="form-group">
            <label for="modalPassword">Password</label>
            <div class="input-wrap">
                <span class="input-icon">🔒</span>
                <input type="password" id="modalPassword" placeholder="Enter password" required>
                <button type="button" class="pass-toggle" id="passToggle">👁</button>
            </div>
        </div>
        <button type="submit" class="submit-btn" id="submitBtn">Sign In & Continue</button>
    </form>

    <div class="divider"><span>or</span></div>

    <p class="alt-link">
        Go to full <a id="fullLoginLink" href="./login.html">Login Page</a>
    </p>
</div>
        `;

        // — Close handlers —
        this.shadowRoot.getElementById('closeBtn').addEventListener('click', () => this.hide());
        this.shadowRoot.getElementById('overlay').addEventListener('click', () => this.hide());
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.hide();
        });

        // — Password toggle —
        const passToggle = this.shadowRoot.getElementById('passToggle');
        const passInput = this.shadowRoot.getElementById('modalPassword');
        passToggle.addEventListener('click', () => {
            const isPass = passInput.type === 'password';
            passInput.type = isPass ? 'text' : 'password';
            passToggle.textContent = isPass ? '🙈' : '👁';
        });

        // — Form submission —
        const form = this.shadowRoot.getElementById('modalForm');
        const submitBtn = this.shadowRoot.getElementById('submitBtn');
        const errorBox = this.shadowRoot.getElementById('errorBox');
        const errorText = this.shadowRoot.getElementById('errorText');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            errorBox.classList.remove('show');

            const email = this.shadowRoot.getElementById('modalEmail').value.trim();
            const password = passInput.value;

            if (!email || !password) {
                errorText.textContent = 'Please fill in all fields';
                errorBox.classList.add('show');
                return;
            }
            if (!email.includes('@') || !email.includes('.')) {
                errorText.textContent = 'Please enter a valid email';
                errorBox.classList.add('show');
                return;
            }
            if (password.length < 4) {
                errorText.textContent = 'Password must be at least 4 characters';
                errorBox.classList.add('show');
                return;
            }

            // Loading
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            await new Promise(r => setTimeout(r, 1200));

            // Store login state
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);

            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;

            // Navigate to intended page
            if (this._targetUrl) {
                window.location.href = this._targetUrl;
            } else {
                this.hide();
                window.location.reload();
            }
        });
    }

    /**
     * Show the modal with context about which page the user was trying to access.
     * @param {string} pageName - E.g. "Books", "Notes"
     * @param {string} targetUrl - The URL to redirect to after login
     * @param {string} basePath - Base path for the full login page link
     */
    show(pageName, targetUrl, basePath) {
        this._targetUrl = targetUrl;
        this.shadowRoot.getElementById('targetName').textContent = pageName || 'this section';
        if (basePath) {
            this.shadowRoot.getElementById('fullLoginLink').href = basePath + 'login.html';
        }
        this.classList.add('visible');
        // Focus the email input
        setTimeout(() => {
            this.shadowRoot.getElementById('modalEmail').focus();
        }, 400);
    }

    hide() {
        this.classList.remove('visible');
        // Reset form
        this.shadowRoot.getElementById('modalForm').reset();
        this.shadowRoot.getElementById('errorBox').classList.remove('show');
    }
}

customElements.define('login-modal', LoginModal);
