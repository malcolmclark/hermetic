const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: { type: string, unique: true },
    fullname: { type: string, unique: true, default: '' },
    email: { type: string, unique: true },
    password: { type: string, unique: true, default: '' },
    userImage: { type: string, default: 'default.png' },
    facebook: { type: string, default: '' },
    fbTokens: Array,
    google: { type: string, default: '' },
    googleTokens: Arrays


})


module.exports = mongoose.model('User', userSchema)