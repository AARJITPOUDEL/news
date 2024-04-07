const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = express();

  server.get("/api/news", (req, res) => {
    res.json({ message: "GET request to /api/news" });
  });

  server.post("/api/news", (req, res) => {
    res.json({ message: "POST request to /api/news" });
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Ready on http://localhost:${PORT}`);
  });
});
