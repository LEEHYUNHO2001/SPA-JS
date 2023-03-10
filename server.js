const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;

// 정적 파일 제공을 위한 express 기본 미들 웨어 express.static 사용
app.use("/static", express.static(path.resolve(__dirname, "front", "static")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("./front", "index.html"));
});

app.listen(port, () => console.log(`Server running http://localhost:${port}`));
