const express = require("express");
const app = express();
const path = require("path");

// Serve static files from the images directory
app.use("/images", express.static(path.join(__dirname, "images")));

app.listen(8000, () => {
  console.log("API server listening on port 8000");
});
