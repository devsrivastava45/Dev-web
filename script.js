// Theme Toggle with Memory
function toggleTheme() {
    document.body.classList.toggle("light");
    const btn = document.getElementById("themeBtn");
    const isLight = document.body.classList.contains("light");
    btn.innerText = isLight ? "☀️" : "🌙";
    localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
}

// Load Theme Preference & Hide Loader
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("portfolio-theme") === "light") {
        document.body.classList.add("light");
        document.getElementById("themeBtn").innerText = "☀️";
    }
    
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";
        setTimeout(() => document.getElementById("loader").style.display = "none", 500);
    }, 1000);
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".animate").forEach(el => observer.observe(el));

// Back to Top Button Logic
const topBtn = document.getElementById("backToTop");
window.onscroll = () => {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
