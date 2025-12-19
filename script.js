const params = new URLSearchParams(window.location.search);
let isSignup = params.get("mode") === "signup";

const formTitle = document.getElementById("formTitle");
const toggleForm = document.getElementById("toggleForm");
const nameField = document.getElementById("name");
const submitBtn = document.getElementById("submitBtn");
const termsContainer = document.getElementById("termsContainer");
const termsCheckbox = document.getElementById("terms");

/* Render form text */
function renderForm() {
    if (isSignup) {
        formTitle.innerHTML =
            "<b>Welcome</b><br><span style='color:#1e88e5'>Create Account</span>";
        submitBtn.textContent = "Sign Up";
        toggleForm.textContent = "Already have an account? Sign In";
        nameField.style.display = "block";
        termsContainer.style.display = "flex"; // show terms
    } else {
        formTitle.innerHTML =
            "<b>Welcome Back</b><br><span style='color:#1e88e5'>Sign In</span>";
        submitBtn.textContent = "Sign In";
        toggleForm.textContent = "Don't have an account? Sign Up";
        nameField.style.display = "none";
        termsContainer.style.display = "none"; // hide terms
        termsCheckbox.checked = false; // reset checkbox
    }
}

toggleForm.onclick = () => {
    isSignup = !isSignup;
    renderForm();
};
renderForm();

/* Toast function */
function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 100);
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

/* Form submit behavior */
document.getElementById("authForm").addEventListener("submit", e => {
    e.preventDefault();

    if (isSignup) {
        if (!termsCheckbox.checked) {
            showToast("Please accept the Terms & Conditions");
            return;
        }
        showToast("Account created successfully");
    } else {
        showToast("Sign In successful");
    }
});

/* Google – Coming soon */
document.getElementById("googleBtn").onclick = e => {
    e.preventDefault();
    showToast("Google Sign-In coming soon");
};

/* Facebook – Coming soon */
document.querySelector(".social.facebook").onclick = e => {
    e.preventDefault();
    showToast("Facebook Sign-In coming soon");
};
