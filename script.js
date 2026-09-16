// Navbar scroll effect
const navbar = document.getElementById("navbar");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuClose = document.getElementById("mobileMenuClose");

const mobileViewport = window.matchMedia("(max-width: 768px)");

const setMobileMenuState = (isOpen) => {
  mobileMenu.classList.toggle("active", isOpen);
  hamburger.classList.toggle("is-open", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
  hamburger.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
};

hamburger.addEventListener("click", () => {
  if (mobileViewport.matches) {
    setMobileMenuState(!mobileMenu.classList.contains("active"));
  }
});

mobileMenuClose.addEventListener("click", () => {
  if (mobileViewport.matches) {
    setMobileMenuState(false);
  }
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    setMobileMenuState(false);
  });
});

// Close mobile menu on window click
window.addEventListener("click", (e) => {
  if (e.target === mobileMenu) {
    setMobileMenuState(false);
  }
});

window.addEventListener("resize", () => {
  if (!mobileViewport.matches) {
    setMobileMenuState(false);
  }
});
