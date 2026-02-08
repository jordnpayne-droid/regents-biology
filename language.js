function setLanguage(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.dataset[lang];
  });
  localStorage.setItem("language", lang);
}

const savedLang = localStorage.getItem("language") || "en";
setLanguage(savedLang);
