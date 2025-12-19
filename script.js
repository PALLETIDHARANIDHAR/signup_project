* {
    box-sizing: border-box;
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
    margin: 0;
    padding: 0;
}

/* BASE */
body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* LIGHT THEME (Index page) */
body.light-theme {
    background: #f9fafb; /* Soft light gray */
    color: #1f2937;      /* Dark gray text */
}

/* DARK THEME (Auth page) */
body.dark-theme {
    background: #0f1727;
    color: #eaeaea;
}

/* CENTER CONTAINER */
.center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

/* ---------- WELCOME BOX ---------- */
.welcome-box {
    background: #ffffff;
    padding: 48px 36px;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 22px 50px rgba(0,0,0,0.1);
}

.welcome-box h1 {
    font-size: 44px;
    font-weight: 700;
    margin-bottom: 12px;
}

.welcome-quote {
    font-size: 16px;
    color: #6b7280;
    font-style: italic;
    margin-bottom: 36px;
}

/* ---------- BUTTONS ---------- */
.btn {
    padding: 12px 32px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;
}

.btn.primary {
    background: #1e88e5;
    color: #fff;
}

.btn.outline {
    border: 2px solid #1e88e5;
    color: #1e88e5;
}

.btn:hover { transform: translateY(-2px); }

/* ---------- AUTH CONTAINER ---------- */
.auth-container {
    width: 400px;
    background: #121212;
    padding: 44px 36px;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 22px 50px rgba(0,0,0,0.6);
}

.auth-container h2 { font-size: 24px; font-weight: 700; margin-bottom: 6px; }
.quote { font-size: 14px; color: #9ca3af; font-style: italic; margin-bottom: 28px; }

/* ---------- INPUTS ---------- */
form input {
    width: 100%;
    padding: 14px;
    margin: 10px 0;
    border-radius: 10px;
    border: 1px solid #333;
    background: #1e1e1e;
    color: #eaeaea;
    font-size: 14px;
}

/* ---------- BUTTON ---------- */
button {
    width: 100%;
    padding: 14px;
    margin-top: 14px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    background: #1e88e5;
    color: #fff;
    cursor: pointer;
    transition: all 0.25s ease;
}
button:hover { transform: translateY(-2px); }

/* ---------- ERROR ---------- */
.error { text-align: center; color: #ef5350; font-size: 13px; min-height: 18px; }

/* ---------- DIVIDER ---------- */
.divider { display: flex; align-items: center; gap: 12px; margin: 28px 0; font-size: 13px; color: #9ca3af; }
.divider::before, .divider::after { content: ""; flex: 1; height: 1px; background: #333; }

/* ---------- SOCIAL BUTTONS ---------- */
.social-buttons { display: flex; gap: 12px; flex-direction: column; align-items: center; margin-top: 14px; }
.social {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px;
    border-radius: 10px;
    border: 1px solid #333;
    background: #1b1b1b;
    font-size: 14px;
    color: #eaeaea;
    cursor: pointer;
    transition: all 0.25s ease;
}
.social.google:hover { border-color: #db4437; color: #db4437; transform: translateY(-2px); }
.social.facebook:hover { border-color: #1877f2; color: #1877f2; transform: translateY(-2px); }

/* ---------- TOGGLE TEXT ---------- */
.toggle-text { margin-top: 20px; font-size: 14px; color: #60a5fa; cursor: pointer; }
.toggle-text:hover { text-decoration: underline; }

/* ---------- TERMS & CONDITIONS ---------- */
.terms {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: #9ca3af;
    margin: 10px 0;
}

.terms input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: #1e88e5;
    cursor: pointer;
}

.terms a {
    color: #60a5fa;
    text-decoration: underline;
}

.terms a:hover {
    color: #1e88e5;
}

/* ---------- TOAST MESSAGE ---------- */
.toast {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #1e88e5;
    color: #fff;
    padding: 14px 24px;
    border-radius: 10px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    opacity: 0;
    transition: all 0.5s ease;
    z-index: 3000;
}
.toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

