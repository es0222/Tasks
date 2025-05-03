require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");

// Middleware
app.use(express.static("public"));
app.set("view engine", "ejs");

// Route handler
const routes = require("./routes/web");
app.use(routes);

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
