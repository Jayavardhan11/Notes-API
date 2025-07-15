const express = require("express");
const cors = require("cors");
const noteRoutes = require("./routes/noteRoutes");

const app = express();

// Middleware: enable CORS and parse JSON
app.use(cors());
app.use(express.json());

// Custom middleware: log method and URL
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Notes API");
});

// Use routes
app.use("/api", noteRoutes);

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
