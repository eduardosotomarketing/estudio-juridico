// =====================
// MENU HAMBURGUESA
// =====================
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // 🔹 CERRAR MENU AL HACER CLICK EN UN LINK
  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
}

// =====================
// ANIMACIONES ON SCROLL
// =====================
const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(el => observer.observe(el));
} else {
  reveals.forEach(el => el.classList.add("active"));
}

// =====================
// HEADER SCROLL EFECTO
// =====================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
