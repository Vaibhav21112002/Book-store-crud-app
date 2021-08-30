const mongoose = require("mongoose");
const Book = require("../models/book");

module.exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.send({ message: "Data Cannot be Fetched" });
  }
};
module.exports.newBooks = async (req, res) => {
  let new_book = new Book(req.body);
  await new_book
    .save()
    .then(() => {
      res.json(new_book);
    })
    .catch((err) => res.json(err));
};

module.exports.editBooks = async (req, res) => {
  const id = req.params.id;
  try {
    await Book.findOneAndUpdate(
      {
        _id: id,
      },
      {
        name: req.body.name,
        desc: req.body.desc,
      }
    );
    res.status(202).json({ _id: id });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports.deleteBooks = async (req, res) => {
  const id = req.params.id;

  try {
    await Book.findOneAndRemove({ _id: id });
    res.status(203).json({ _id: id });
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
};
