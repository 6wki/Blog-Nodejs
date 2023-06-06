require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const connectDb = require("./server/config/db");

const app = express();
const PORT = 5000 || process.env.PORT;

connectDb();

app.use(express.static("public"));

app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", require("./server/routes/main"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
