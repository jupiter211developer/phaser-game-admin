const methods = require("./crudController");
// const crudMethods = require("./crudController/crudMethods");
const teamController = methods.crudController("Team");

teamController.createAccount = async (req, res) => {
    //customize
}

module.exports = teamController;
