function darkMode() {
  let darkMode = document.getElementById("dark-mode");
  darkMode.addEventListener("click", () => {
    document.body.style.backgroundImage = "url(img/cooee-bg-dk.png)";
  });
  let darkModeReverse = document.getElementById("dark-mode-reverse");
  darkModeReverse.addEventListener("click", () => {
    document.body.style.backgroundImage = "url(img/cooee-bg.png)";
  });
}
