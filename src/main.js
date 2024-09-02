require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const logger = require('./middleware/logger'); 

const app = express();
const PORT = process.env.PORT;
const HOST = process.env.HOST_URL;
const MONGO = process.env.MONGO_DB_URL;

app.use(bodyParser.json()); 
app.use(cors()); 
app.use(logger); 

mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const userRoutes = require('./routes/users');
const bookRoutes = require('./routes/books');

app.use('/users', userRoutes);
app.use('/books', bookRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Роут не найден' });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на ${HOST}:${PORT}`);
});
