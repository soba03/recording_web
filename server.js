const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.static("public")); // Nơi chứa file HTML

app.post("/upload", upload.single("audio"), (req, res) => {
  console.log("File uploaded:", req.file);
  res.status(200).send("File uploaded successfully!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
