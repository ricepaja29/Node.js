const express = require('express');
const path = require('path');
const app = express();

// Menyajikan file statis dari folder "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rute untuk halaman Login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});


// Rute untuk halaman Home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rute untuk halaman About
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Rute untuk halaman Services
app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

// Rute untuk halaman Contact
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Menentukan port
const PORT = process.env.PORT || 3000;

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


