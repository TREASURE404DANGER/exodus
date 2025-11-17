const sideButton = document.getElementById("sideButton");
const sideMenu = document.getElementById("sideMenu");

sideButton.addEventListener("click", () => {
  sideMenu.classList.toggle("active");

  sideButton.classList.toggle("active");
});

const mobileLinks = sideMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    sideButton.classList.remove("active");
  });
});
