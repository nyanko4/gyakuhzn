const express = require("express");
const router = express.Router();
const getchat = require("../webhook/getchat");
const mention = require("../webhook/mention");

router.post("/getchat", (req, res) => {
  getchat(req, res);
});

router.post("/mention", (req, res) => {
  mention(req, res);
});

module.exports = router;
