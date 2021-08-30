const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BookSchema = new Schema({
  name: {
    type: String,
  },
  desc: {
    type: String,
  },
});
module.exports = mongoose.model("Books", BookSchema);
