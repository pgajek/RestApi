const router = require("express").Router();
const bioController = require("../bioController");

router.get("/", function (req, res) {
  res.json({
    status: "API works",
    message: "Welcome to my first Rest API",
  });
});

router.route("/bio").get(bioController.index).post(bioController.add);

router
  .route("/bio/:bio_id")
  .get(bioController.view)
  .patch(bioController.update)
  .put(bioController.update)
  .delete(bioController.delete);
// methods creeated at bioController

module.exports = router;
