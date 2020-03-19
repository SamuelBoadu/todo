const express = require("express");

//setting the api
const api = express();
api.listen(3000, () => {
  console.log("API up and running!");
});

//setting up routes
api.get("/", (req, res) => {
  console.log(req);
  res.send("Hello, world!");
});
