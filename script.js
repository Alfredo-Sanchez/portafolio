function toogleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburguer-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const toggleButtons = document.querySelectorAll(".toggle-dark-mode");

toggleButtons.forEach(button => {
  button.addEventListener('click', toggleDarkMode)
})

function toggleDarkMode(event) {
  event.preventDefault();
  document.body.classList.toggle("dark-mode");

  const icon = event.target;
  const isMoon = icon.getAttribute('src') === './assets/moon-icon.svg'

  icon.setAttribute("src", isMoon ? './assets/sun-icon.svg' : './assets/moon-icon.svg');
}


