document.addEventListener("DOMContentLoaded", function() {
    function loadImagesFromFolder(folderPath) {
        fetch(folderPath)
            .then(response => response.text())
            .then(data => {
                const files = data.split("\n").filter(Boolean).map(fileName => `${folderPath}/${fileName}`);
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
            })
            .catch(error => console.error('Error:', error));
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
