const express = require("express");
const router = express.Router();
const {
  getBooks,
  newBooks,
  editBooks,
  deleteBooks,
} = require("../controllers/book-ctrl");

router.get("/books/all", getBooks);
router.post("/books/add", newBooks);
router.put("/books/update/:id", editBooks);
router.delete("/books/delete/:id", deleteBooks);

module.exports = router;
