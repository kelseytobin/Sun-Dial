var express = require("express");

var router = express.Router();
var phone = require("../models/phones.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/phones");
});

router.get("/phones", function(req, res) {
  // express callback response 
  phone.all(function() {
    res.render("index", {phones[0]});
  });
});

// post route -> back to index
router.post("/phones/create", function(req, res) {
  phone.create(req.body.number, function(result) { 
    console.log(result);
    res.redirect("/");
  });
});


module.exports = router;
