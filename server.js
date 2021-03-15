const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send("Hello from my node app!");
});

app.listen(port, () => {
  console.log(`API server listening at port ${port}`);
});

module.exports = app;
