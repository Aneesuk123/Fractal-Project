const express = require("express");
const app = express();
const PORT = 3000;

// Sample API route
app.get("/", (req, res) => {
  res.json({ message: "Backend is running!" });
});

// Health endpoint for Kubernetes
app.get("/health", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
