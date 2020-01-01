const mongoose = require('mongoose')
Schema = mongoose.Schema

const User = new Schema({
    user_name: {
        type: String
    },
    city: {
        type: String
    },
    email: String,
    country: String,
    age: {
        type: Number,
    },
    creat_at: Date
})

module.exports = mongoose.model('User', User, 'User')