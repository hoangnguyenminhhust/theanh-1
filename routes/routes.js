module.exports = function (app) {
    let controller = require('../controler/controller');
    app.route('/faker')
        .get(controller.listAllUser)
        .post(controller.creatUser)
    app.route('/faker')
        .put(controller.updateUser)
        .delete(controller.deleteUser)
}