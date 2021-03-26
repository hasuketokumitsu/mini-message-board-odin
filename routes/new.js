var express = require("express");
var router = express.Router();

// Get new message form
router.get("/", function (req, res, next) {
  res.render("form", { title: "message message" });
});

module.exports = router;
