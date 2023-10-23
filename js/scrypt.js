document.addEventListener("DOMContentLoaded", function() {
    function loadImagesFromFolder(folderPath) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", folderPath);
        xhr.onload = function() {
            if (xhr.status === 200) {
                const files = xhr.responseText.split("\n").filter(Boolean).map(fileName => `${folderPath}/${fileName}`);
                if (files.length > 0) {
                    files.forEach(function(imageSrc) {
                        const column = document.querySelector(`.column:nth-child(${Math.floor(Math.random() * 3) + 1})`);
                        column.appendChild(createImage(imageSrc));
                    });
                } else {
                    const message = document.createElement("p");
                    message.textContent = "В папці немає фотографій.";
                    document.body.appendChild(message);
                }
            }
        };
        xhr.send();
    }

    function createImage(src) {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Фото";
        img.style.maxHeight = "300px";
        img.style.marginBottom = "10px";
        return img;
    }

    const gallery = document.querySelector(".gallery");
    loadImagesFromFolder("img"); // Шлях до вашої папки з фотографіями
});
