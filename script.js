const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
const translations = {
  en: {
    gallery: "Gallery",
    welcome: "Welcome to Andelus School Online"
  },
  am: {
    gallery: "ጋለሪ",
    welcome: "እንኳን ወደ አንዴሉስ ትምህርት ቤት በደህና መጡ"
  },
  or: {
    gallery: "Galarii",
    welcome: "Andelus School Online baga nagaan dhuftan"
  }
};

function changeLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
}
