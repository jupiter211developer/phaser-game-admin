const express = require("express");
const { catchErrors } = require("../handlers/errorHandlers");

const router = express.Router();

const adminController = require("../controllers/adminController");
const accountController = require("../controllers/accountController");
const teamController = require("../controllers/teamController");
const clientController = require("../controllers/clientController");

const leadController = require("../controllers/leadController");
const productController = require("../controllers/productController");

//_______________________________ Admin management_______________________________

router.route("/admin/create").post(catchErrors(adminController.create));
router.route("/admin/read/:id").get(catchErrors(adminController.read));
router.route("/admin/update/:id").patch(catchErrors(adminController.update));
router.route("/admin/delete/:id").delete(catchErrors(adminController.delete));
router.route("/admin/search").get(catchErrors(adminController.search));
router.route("/admin/list").get(catchErrors(adminController.list));

router
  .route("/admin/password-update/:id")
  .patch(catchErrors(adminController.updatePassword));
//list of admins ends here

//_____________________________________ API for accounts __________________________
router.route("/account/create").post(catchErrors(accountController.createAccount));
router.route("/account/read/:id").get(catchErrors(accountController.read));
router.route("/account/update/:id").patch(catchErrors(accountController.update));
router.route("/account/delete/:id").delete(catchErrors(accountController.delete));
router.route("/account/search").get(catchErrors(accountController.search));
router.route("/account/list").get(catchErrors(accountController.list));

//_____________________________________ API for teams __________________________
router.route("/team/create").post(catchErrors(teamController.createAccount));
router.route("/team/read/:id").get(catchErrors(teamController.read));
router.route("/team/update/:id").patch(catchErrors(teamController.update));
router.route("/team/delete/:id").delete(catchErrors(teamController.delete));
router.route("/team/search").get(catchErrors(teamController.search));
router.route("/team/list").get(catchErrors(teamController.list));

//_____________________________________ API for clients __________________________
router.route("/client/create").post(catchErrors(clientController.create));
router.route("/client/read/:id").get(catchErrors(clientController.read));
router.route("/client/update/:id").patch(catchErrors(clientController.update));
router.route("/client/delete/:id").delete(catchErrors(clientController.delete));
router.route("/client/search").get(catchErrors(clientController.search));
router.route("/client/list").get(catchErrors(clientController.list));

//_____________________________________ API for leads ___________________________
router.route("/lead/create").post(catchErrors(leadController.create));
router.route("/lead/read/:id").get(catchErrors(leadController.read));
router.route("/lead/update/:id").patch(catchErrors(leadController.update));
router.route("/lead/delete/:id").delete(catchErrors(leadController.delete));
router.route("/lead/search").get(catchErrors(leadController.search));
router.route("/lead/list").get(catchErrors(leadController.list));

//_____________________________________ API for products ___________________________
router.route("/product/create").post(catchErrors(productController.create));
router.route("/product/read/:id").get(catchErrors(productController.read));
router
  .route("/product/update/:id")
  .patch(catchErrors(productController.update));
router
  .route("/product/delete/:id")
  .delete(catchErrors(productController.delete));
router.route("/product/search").get(catchErrors(productController.search));
router.route("/product/list").get(catchErrors(productController.list));

module.exports = router;
