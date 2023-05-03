const router = require("express").Router({ mergeParams: true });
const controller = require("./titanDef.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/:titanDef_id")
  .get(controller.listTitanDef)
  .put(controller.updateTitanDef)
  .delete(controller.deleteTitanDef)
  .all(methodNotAllowed);
router
  .route("/")
  .post(controller.create)
  .get(controller.list)
  .all(methodNotAllowed);

module.exports = router;
