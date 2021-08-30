const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bookRoute = require("./routes/book-routes");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const URL =
  process.env.URL ||
  "mongodb+srv://vaibhav423:Vg@21112002@cluster0.9us0k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((res) => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bookRoute);
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
