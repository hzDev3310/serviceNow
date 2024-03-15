
const emproveAccount = require("../controller/ServiceController");
const {
    getServices,
    removeUser,
    updateUser,
  } = require("../controller/userController");
  
  const router = require("express").Router();

  router.post("/", getServices);
  router.post("/:userId", emproveAccount);
  router.delete("/:userId", removeUser);
  router.put("/:userId/:attribute", updateUser);
  
  module.exports = router;
  