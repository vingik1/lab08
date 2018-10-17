// src/server/api.js
const express = require("express");
const router = express.Router();
const greeting = require("./../logic/greeting");
router.get("/greeting/:name", (req, res) => {
 // Fill in your code that:
 var name = req.params.name;
 var retgreeting = {"greeting":greeting(name)};

 // 1. set's the status code to 200
res.status(200).send(retgreeting);
 // 2. and returns an object with the greeting
 // Hint: `req.params.name`
});
module.exports = router;
