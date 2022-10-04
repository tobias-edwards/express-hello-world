const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello, everyone :)");
  console.log("Someone visited the site!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
