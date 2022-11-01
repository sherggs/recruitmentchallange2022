require("dotenv").config();
const express = require("express");
const app = express();
const data = require("./data.json")
const cors = require("cors");

// enable CORS
app.use(cors());

app.get("/", async (req, res) => {
  res.send(data)
});


app.listen(process.env.API_PORT, () => {
  console.log(`listening on port http://localhost:${process.env.API_PORT}`);
});
