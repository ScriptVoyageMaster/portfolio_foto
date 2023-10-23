document.addEventListener("DOMContentLoaded", function() {
    function loadImagesFromServer() {
        fetch('/photos')
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    data.forEach(function(imageSrc) {
                        const column = document.querySelector(`.column:nth-child(${Math.floor(Math.random() * 3) + 1})`);
                        column.appendChild(createImage(imageSrc));
                    });
                } else {
                    const message = document.createElement("p");
                    message.textContent = "На сервері немає фотографій.";
                    document.body.appendChild(message);
                }
            })
            .catch(error => console.error('Error:', error));
    }

    // Решта коду залишається незмінним

    loadImagesFromServer(); // Замість loadImagesFromFolder("img")
});
