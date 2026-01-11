// HEADER STICKY
window.addEventListener("scroll", () => {
  document.querySelector("header").classList.toggle("fixed", window.scrollY > 100);
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 60,
      behavior: 'smooth'
    });
  }
}


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
