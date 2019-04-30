var express = require("express");
var app = express();
var path = require("path");

app.use("/assets", express.static(path.join(__dirname, "./dist/assets/")));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./dist/index.html"));
});

app.listen(3005, function() {
  console.log("Listening on port 3005!");
});
