const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const bookRoutes = require('./routes/books');

const app = express();
const port = 3005;

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB подключён'))
    .catch(err => console.error('Ошибка подключения MongoDB:', err));

app.use('/users', userRoutes);
app.use('/books', bookRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Роут не найден' });
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://127.0.0.1:${port}`);
});