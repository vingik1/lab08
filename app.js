// app.js
const express = require("express");
const app = express();
const api = require("./src/server/api");
const lodash = require("lodash");
app.use("/api",api);

app.get("*",(req,res)=> {
    res.send({error: "No route defined"});
});
//slóð á greeting http://localhost:3000/api/greeting/viktor
module.exports = app;
/*const app = require("./src/api");
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log("Server running on port " + PORT);
});*/