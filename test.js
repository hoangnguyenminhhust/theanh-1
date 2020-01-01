
//auto insert ban ghi
module.exports = async function auto_insert(a) {
    let index = 0
    let newUser = new User({
        user_name: faker.name.lastName(),
        city: faker.address.city(),
        email: faker.internet.email(),
        country: faker.address.country(),
        age: faker.random.number(100),
        creat_at: faker.date.between(date1, date2)
    })
    await newUser.save();

    if (index < a) {
        process.nextTick(auto_insert, index + 1);
        index += 1
    } else {
        console.log(Date.now() - startTime)
    }
}
