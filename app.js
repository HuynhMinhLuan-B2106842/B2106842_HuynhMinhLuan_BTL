const express = require('express')
const cors = require('cors');



const app = express();

app.use(cors());
app.use(express.json());

// Routes
const authRouter = require('./app/routers/auth.route');
const bookRouter = require('./app/routers/book.route');
const userRouter = require('./app/routers/user.route');
const orderRouter = require('./app/routers/order.route');
const publisherRouter = require("./app/routers/publisher.route");

app.get("/", (req, res) =>{
    res.json({message: "Welcome to my bookstore."});
});

app.use("/api/auth", authRouter);
app.use("/api/book", bookRouter);
app.use("/api/user", userRouter);
app.use("/api/order", orderRouter);
app.use("/api/publisher", publisherRouter);



module.exports = app;