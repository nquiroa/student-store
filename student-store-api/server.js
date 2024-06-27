require('dotenv').config();

const express = require('express');
const PORT = 3000;
const cors = require("cors");
const morgan = require("morgan");

const productRoutes = require("./Routes/productRoutes");
const orderRoutes = require("./Routes/orderRoutes");
const orderItemRoutes = require("./Routes/orderitemRoutes");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Student Store API");
});

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/order-items", orderItemRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
