function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
}

function loadTheme() {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
}

function setCurrentUnit(num) {
  document.querySelectorAll("[data-unit]").forEach(link => {
    if (link.dataset.unit == num) link.classList.add("active");
  });
}

loadTheme();
