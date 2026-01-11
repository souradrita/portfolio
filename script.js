// FIXED HEADER
window.addEventListener("scroll", () => {
  document.querySelector("header")
    .classList.toggle("fixed", window.scrollY > 100);
});

// NAVBAR
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    document.querySelector(".navbar").classList.remove("show");
  });
});

// HAMBURGER
document.querySelector(".ham-burger").addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("show");
});

// DARK MODE
const themeBtn = document.querySelector(".theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
