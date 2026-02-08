function toggleTheme() {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

function setCurrentUnit(num) {
  document.querySelectorAll("[data-unit]").forEach(link => {
    link.classList.toggle("active", link.dataset.unit == num);
  });
}

// ✅ Wait until page loads
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});
