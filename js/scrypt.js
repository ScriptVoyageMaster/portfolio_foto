// Отримуємо всі div-контейнери з фото
const photoContainers = document.querySelectorAll(".col-lg-6");

// Обробляємо кожен div-контейнер з фото
for (const photoContainer of photoContainers) {
  // Отримуємо висоту першого фото в колонці
  const firstPhotoHeight = getImageHeight(photoContainer.querySelector("img"));

  // Отримуємо висоту кожного фото в колонці
  const photoHeights = photoContainer.querySelectorAll("img").map((img) => getImageHeight(img));

  // Розраховуємо ширину кожного фото
  const photoWidth = photoContainer.offsetWidth / photoHeights.length;
// Отримуємо всі div-контейнери з фото
const photoContainers = document.querySelectorAll(".col-lg-6");

// Обробляємо кожен div-контейнер з фото
for (const photoContainer of photoContainers) {
  // Отримуємо висоту першого фото в колонці
  const firstPhotoHeight = getImageHeight(photoContainer.querySelector("img"));

  // Створюємо масив з висотами всіх зображень в колонці
  const photoHeights = [];
  for (const img of photoContainer.querySelectorAll("img")) {
    photoHeights.push(getImageHeight(img));
  }

  // Розраховуємо ширину кожного фото
  const photoWidth = photoContainer.offsetWidth / photoHeights.length;

  // Розміщуємо кожне фото в колонці на однаковій відстані від верхнього краю контейнера
  for (let i = 0; i < photoHeights.length; i++) {
    const photo = photoContainer.querySelector("img:nth-child(" + (i + 1) + ")");
    photo.style.height = `${firstPhotoHeight - photoHeights[i]}px`;
    photo.style.left = `${photoWidth * i}px`;
  }
}

// Отримуємо висоту зображення
function getImageHeight(img) {
  return img.getBoundingClientRect().height;
}

  // Розміщуємо кожне фото в колонці на лінії з першим фото
  photoHeights.forEach((photoHeight, index) => {
    const photo = photoContainer.querySelector("img:nth-child(" + (index + 1) + ")");
    photo.style.top = `${firstPhotoHeight - photoHeight}px`;
    photo.style.left = `${photoWidth * index}px`;
  });
}

// Отримуємо висоту зображення
function getImageHeight(img) {
  return img.getBoundingClientRect().height;
}
