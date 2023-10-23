const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('img'));

app.get('/photos', (req, res) => {
    const fs = require('fs');
    const path = './img/';
    fs.readdir(path, (err, files) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        const photos = files.map(file => `/photos/${file}`);
        res.json(photos);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
