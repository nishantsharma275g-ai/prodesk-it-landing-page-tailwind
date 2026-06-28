// ==============================
// Select Elements
// ==============================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const themeToggle = document.getElementById("theme-toggle");

// ==============================
// Mobile Menu Toggle
// ==============================

menuBtn.addEventListener("click", () => {
    mobileMenu.style.right = "0";
});

closeMenu.addEventListener("click", () => {
    mobileMenu.style.right = "-100%";
});

// ==============================
// Dark Mode
// ==============================

const themeBtn = document.getElementById("theme-toggle");
const html = document.documentElement;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
} else {
  themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

// Toggle theme
themeBtn.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    localStorage.setItem("theme", "light");
    themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});
// ==============================
// Close Mobile Menu After Click
// ==============================

const navItems = document.querySelectorAll("#mobileMenu a");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        mobileMenu.style.right = "-100%";
    });
});

// ==============================
// Back To Top
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});