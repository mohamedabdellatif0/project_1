/* Mobile menu toggle */
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("open");
}

/* Close menu when clicking a link inside it */
document.querySelectorAll("#mobileMenu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("mobileMenu").classList.remove("open");
  });
});

/* Close menu on outside click */
document.addEventListener("click", (e) => {
  const menu = document.getElementById("mobileMenu");
  const hamburger = document.getElementById("hamburger");
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove("open");
  }
});

/* Wishlist heart toggle */
function toggleHeart(btn) {
  btn.classList.toggle("active");
}

/* Form submit handler */
function submitForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector(".btn-submit");
  const original = btn.textContent;
  btn.textContent = "تم إرسال الطلب ✓";
  btn.style.background = "#4a7c59";
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = "";
    e.target.reset();
  }, 3000);
}

/* Scroll reveal */
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => observer.observe(el));

/* Sticky nav shadow */
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.style.boxShadow =
    window.scrollY > 10
      ? "0 4px 20px rgba(91,74,50,0.14)"
      : "0 2px 12px rgba(91,74,50,0.08)";
}); 