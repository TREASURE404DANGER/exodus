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

const headerWords = [
  "WhatsApp Bot",
  "Telegram Bot",
  "Discord Bot",
  "Game Server",
  "AI Agent",
  "Cron Job",
  "Database",
  "Web App/API",
  "Webhook Receiver",
  "Automation Script",
];

const rotatingWordElement = document.getElementById("rotatingWord");

function rotateWords() {
  let currentIndex = 0;

  currentIndex = Math.floor(Math.random() * headerWords.length);
  rotatingWordElement.textContent = headerWords[currentIndex];

  setInterval(() => {
    currentIndex = (currentIndex + 1) % headerWords.length;

    // Effect
    rotatingWordElement.style.opacity = "0";

    setTimeout(() => {
      rotatingWordElement.textContent = headerWords[currentIndex];
      rotatingWordElement.style.opacity = "1";
    }, 300);
  }, 3000);
}

//Effect
rotatingWordElement.style.transition = "opacity 0.3s ease";

rotateWords();

const heroImages = [
  "images/hero-1.png",
  "images/hero-2.png",
  "images/hero-3.png",
  "images/hero-4.png",
];

function setRandomHeroImage() {
  const heroImgElement = document.getElementById("heroImg");
  const randomIndex = Math.floor(Math.random() * heroImages.length);
  heroImgElement.src = heroImages[randomIndex];
}

setRandomHeroImage();
