// Підключаємо зовнішній скрипт jQuery
const $ = require("jquery");

// Отримуємо всі div-контейнери з фото
const photoContainers = document.querySelectorAll(".col-lg-6");

// Обробляємо кожен div-контейнер з фото
for (const photoContainer of photoContainers) {
  // Отримуємо висоту першого фото в колонці
  const firstPhotoHeight = photoContainer.querySelector("img").getBoundingClientRect().height;

  // Отримуємо висоту кожного фото в колонці
  const photoHeights = photoContainer.querySelectorAll("img").map((img) => img.getBoundingClientRect().height);

  // Розраховуємо ширину кожного фото
  const photoWidth = photoContainer.offsetWidth / photoHeights.length;

  // Розміщуємо кожне фото в колонці на лінії з першим фото
  photoHeights.forEach((photoHeight, index) => {
    const photo = photoContainer.querySelector("img:nth-child(" + (index + 1) + ")");
    photo.style.top = `${firstPhotoHeight - photoHeight}px`;
    photo.style.left = `${photoWidth * index}px`;
  });
}
