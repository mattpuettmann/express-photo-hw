const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    images: String
})







const User = mongoose.model('User', userSchema);
module.exports = User;