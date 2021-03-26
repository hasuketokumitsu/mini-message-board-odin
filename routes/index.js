var express = require("express");
var router = express.Router();

var messages = [
  {
    text: "Hey chap",
    user: "Bob",
    added: new Date(),
  },
  {
    text: "sup?",
    user: "More Bob",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

// Receive new messages
router.post("/new", function (req, res, next) {
  var messageUser = req.body.user;
  var messageText = req.body.text;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  // send users back to index page
  res.redirect("/");
});

module.exports = router;
