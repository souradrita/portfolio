// HEADER STICKY
window.addEventListener("scroll", () => {
  document.querySelector("header").classList.toggle("fixed", window.scrollY > 100);
});

// NAVBAR LINK ACTIVE
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".navbar a").forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    document.querySelector(".navbar").classList.remove("show");
  });
});

// HAMBURGER MENU
document.querySelector(".ham-burger").addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("show");
});

// DARK MODE TOGGLE
const btn = document.querySelector(".theme-toggle");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("animate");
  });
}, { threshold: 0.2 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
