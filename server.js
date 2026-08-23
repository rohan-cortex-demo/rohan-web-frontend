"use strict";

const path = require("path");
const express = require("express");
const helmet = require("helmet");
const compression = require("compression");

const app = express();
app.use(helmet());
app.use(compression());
app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "rohan-web-frontend" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`rohan-web-frontend listening on ${port}`));
