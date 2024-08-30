const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true, minlength: 2 },
    lastName: { type: String, required: true, minlength: 2 },
    username: { type: String, required: true, minlength: 5 }
});

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 2 },
    author: { type: String, required: true, minlength: 2 },
    year: { type: Number, required: true }
});

const User = mongoose.model('User', userSchema);
const Book = mongoose.model('Book', bookSchema);

module.exports = { User, Book };
