const photoArray = ["001_700_393","007_250_375", "003_870_580", "003_640_436", "004_850_638", "005_250_375", "006_1924_683"];

const columns = document.querySelectorAll('.column');

function createImageElement(photo) {
    const imgElement = document.createElement('img');
    const [id, width, height] = photo.split('_');
    imgElement.src = `images/${id}_${width}_${height}.jpg`;
    imgElement.alt = `Фото ${id}`;
    return imgElement;
}

function distributePhotos() {
    const totalHeight = new Array(columns.length).fill(0);

    photoArray.forEach(photo => {
        const imgElement = createImageElement(photo);

        const imgHeight = Number(photo.split('_')[2])/Number(photo.split('_')[1])*370;

        const minTotalHeight = Math.min(...totalHeight);
        const minColumnIndex = totalHeight.indexOf(minTotalHeight);

        columns[minColumnIndex].appendChild(imgElement);
        imgElement.style.position = 'relative';
        imgElement.style.display = 'block';

        totalHeight[minColumnIndex] += imgHeight + 15;
    });
}

distributePhotos();

window.addEventListener('resize', () => {
      columns.forEach(column => {
        column.remove(); // Видаляємо саму колонку
    });

    columns.forEach(column => {
        while (column.firstChild) {
            column.removeChild(column.firstChild);
        }
    });
    distributePhotos();
});