require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoute = require("./route/contactRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", contactRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // app.get("*", (req, res) =>
  //   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  // );
  app.get("*", function (req, res) {
    const index = path.join(__dirname, "build", "index.html");
    res.sendFile(index);
  });
}

const port = process.env.PORT || 5005;
app.listen(port, console.log(`server listing to port 5000 only`));
