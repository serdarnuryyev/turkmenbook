const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/book");
const emailRoutes = require("./routes/email");


const app = express();

mongoose
    .connect(
        "mongodb+srv://alfred:alfred00@my-app1-aubln.mongodb.net/mean-course?retryWrites=true&w=majority", { useNewUrlParser: true }
    )
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

app.use(express.json({ limit: '50MB' }));
app.use(express.urlencoded({ limit: '50MB', extended: true }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use("/api/book", bookRoutes);
app.use("/api/email", emailRoutes);


module.exports = app;
