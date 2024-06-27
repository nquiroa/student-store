const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post("/", orderController.createOrder);

router.get("/", orderController.getAllOrders);

router.get("/:id", orderController.getOrderById);

router.put("/:id", orderController.updateOrder);

router.delete("/:id", orderController.deleteOrder);

router.post("/:order_id/items", orderController.additemtoOrder);

router.get("/:order_id/items", orderController.getItemsInOrder);

router.get("/:order_id/total", orderController.calculateOrderTotal);

module.exports = router;
