const faker = require('faker');
const mongoose = require('mongoose')
const User = mongoose.model('User')
const date1 = new Date("2019/1/1")
const date2 = new Date("2019/12/31")
const startTime = Date.now()

// update user
exports.updateUser = async function (req, res) {
    try {
        var data = await User.findOneAndUpdate({
            name: req.body.text
        }, req.body, {
            new: true
        })
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

// tao user
exports.creatUser = async function (req, res) {
    try {
        let newUser = new User({
            user_name: faker.name.lastName(),
            city: faker.address.city(),
            email: faker.internet.email(),
            country: faker.address.country(),
            age: faker.random.number(100),
            creat_at: faker.date.between(date1, date2)
        })
        var data = await newUser.save()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

// xoa user
exports.deleteUser = async function (req, res) {
    try {
        await User.findOneAndRemove({
            name: req.body.text
        })
        res.send('Removed')
    } catch (error) {
        res.send(error)
    }
}

// xem tat ca

exports.listAllUser = async function (req, res) {
    try {
        var data = await User.find({})
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}
