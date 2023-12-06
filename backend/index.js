const express = require("express");
const cors = require("cors");

const products = require("./products");
const app = express();

app.use(express.json())
app.use(cors())

//Ropute
app.get("/", (req, res) => {
  res.send("Wellcome to my Onilne Shop API...")
})

app.get("/products", (req, res) => {
  res.send(products);
})

const port = process.env.PORT || 5001

app.listen(port, console.log(`Server runing on port ${port}`))