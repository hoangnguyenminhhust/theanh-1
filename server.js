const faker = require('faker');
const express = require('express')
const app = express()

const mongoose = require('mongoose')

const bodyParser = require('body-parser')
const User = require('./models/userModel')
const test = require('./test')
require('dotenv').config()
const port = process.env.PORT || 3000
//connect mongo
mongoose.connect('mongodb://localhost/database_faker1', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },

    //danh index : email , tuoi , city ( tang dan)


    // async () => {
    //     console.time('index')
    //     await User.collection.createIndex(
    //         // {
    //         // "email": 1
    //         // },
    //         {
    //             "age": 1
    //         }
    //         // , 
    //         // {
    //         //     "city": 1
    //         // }
    //     )
    //     console.timeEnd('index')
    // }
)

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.listen(port, () => console.log("connect to " + port))