const Book = require('../model/book.model.js')

exports.getBook = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).json(error);
    }
};

exports.addBook = async (req, res) => {
    try {
        const { name, price, category, image, author } = req.body;
        const newBook = new Book({ name, price, category, image, author });
        newBook.save();
        res.status(200).json("Book Added");
    }
    catch (error) {
        console.log("Error: ", error);
        return res.status(500).json(error);
    }
};

exports.search = async (req, res) => {
    console.log(req.query)
    const { name } = req.query;
    if (!name) {
        return res.status(400).send('Book name query parameter is required');
    }
    try {
        const regex = new RegExp(name, 'i'); // 'i' makes the regex case insensitive
        const books = await Book.find({ name: regex });
        console.log(books)
        res.status(200).json(books);
    }
    catch (error) {
        console.log("Error: ", error);
        return res.status(500).json(error);
    }
};