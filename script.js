function toogleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburguer-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const toggleButton = document.querySelector(".toggle-dark-mode");
toggleButton.addEventListener("click", toggleDarkMode);

const toggleButton2 = document.querySelector(".toggle-dark-mode-2");
toggleButton2.addEventListener("click", toggleDarkMode);

function toggleDarkMode(event) {
  event.preventDefault(); // Previene comportamientos no deseados en móviles
  document.body.classList.toggle("dark-mode");
}
