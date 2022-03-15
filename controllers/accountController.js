const methods = require("./crudController");
// const crudMethods = require("./crudController/crudMethods");
const accountController = methods.crudController("Account");

const generatePlayerNo = (arr) => {
    let noList = arr.map(item => item.player_no)
    let curNo = -1

    do {
        curNo = Math.floor(Math.random() * (arr.length * 2 + 10))
        if (noList.every(no => curNo != no)) {
            return curNo
        }
    } while (true)
}

accountController.createAccount = async (req, res) => {
    let users = await accountController.listAll()
    req.body.player_no = generatePlayerNo(users)
    accountController.create(req, res);
}

module.exports = accountController;
