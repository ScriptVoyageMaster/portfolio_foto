const fs = require('fs');

const folderPath = './imgs'; // Шлях до директорії з файлами

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Помилка при читанні директорії:', err);
    return;
  }

  const jpgs = files.filter(file => file.endsWith('.jpg'));
  console.log(jpgs.length);
});
