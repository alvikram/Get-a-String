const express = require("express");
const newApp = express();

newApp.get("/", (request, response) => {
  response.send("Express JS");
  console.log(response);
});

module.exports = newApp;
newApp.listen(3001);
