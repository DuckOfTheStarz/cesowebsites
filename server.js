const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'resources'))); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

const port = 8000;

app.get('/', (req, res) => {
    res.status(200).render("home");
});

app.get('/11252025', (req, res) => {
    res.status(200).render('11252025/11252025');
});

app.get('/12162025', (req, res) => {
    res.status(200).render('12162025/12162025');
});

app.get('/12252025', (req, res) => {
    res.status(200).render('12252025/12252025');
});



app.get('/11252025/respectme', (req, res) => {
    res.sendFile(path.join(__dirname, 'resources/html/builds/11252025/respectme.html'));
})

app.get('/12162025/respectme', (req, res) => {
    res.sendFile(path.join(__dirname, 'resources/html/builds/12162025/homepage.html'));
})

app.get('/12252025/respectme', (req, res) => {
    res.sendFile(path.join(__dirname, 'resources/html/builds/12252025/homepage.html'));
})


app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});