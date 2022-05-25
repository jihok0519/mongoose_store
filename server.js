const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require('mongoose');
const Product = require('./models/product.js');
const productSeed = require('./models/productSeed.js');
const db = mongoose.connection;

// Connect to MongoDB Atlas
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Database Connection Error/Success
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is MongoDB not running?'));
db.on('connected', () => console.log('Mongo connected'));
db.on('disconnected', () => console.log('Mongo disconnected'));

// Middleware
// Body parser middleware: gives access to req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public/"));

// ROUTES

// Seed
app.get('/books/seed/', (req, res) => {
    Product.deleteMany({}, (error, allProducts) => {});
    Product.create(productSeed, (error, data) => {
        res.redirect('/store');
    });
});

// Index
app.get('/store/', (req, res) => {
    Product.find({}, (error, allProducts) => {
        res.render('index.ejs', {
        products: allProducts,
        });
    });
});
// New
app.get('/store/new/', (req, res) => {
    res.render("new.ejs");
})

// Delete
// app.delete("/store/:id/", (req, res) => {
//     Product.splice(req.params.id, 1)
// 	res.redirect("/store/");
// });

// Update

// Create
app.post('/store/', (req, res) => {
    Product.create(req.body, (error, createdProduct) => {
        res.redirect('/store/');
    });
});

// Edit
app.get("/store/:id/edit/", (req, res) => {
    res.render("edit.ejs", {
        products: Product[req.params.id],
	});
});

// Show
app.get('/store/:id', (req, res) => {
    Product.findById(req.params.id, (error, foundProduct) => {
        res.render('show.ejs', {
            product: foundProduct,
        });
    });
});


// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is listening on port: ${PORT}`);
});