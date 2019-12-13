const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    disc: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    isbn: { type: Number, required: true },
    date: { type: Number, required: true },
    image: { type: String, required: true }
});

module.exports = mongoose.model("Book", postSchema);