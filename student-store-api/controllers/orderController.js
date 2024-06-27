const orderModel = require('../Models/order');
const orderItemModel = require('../Models/orderItem');

const createOrder = async (req, res) => {
    const { customer_id, total_price, status, orderItems } = req.body;
    console.log('Request body:', req.body);
    try {
        const newOrder = await orderModel.createOrder({ customer_id, total_price, status });
        console.log('Created order:', newOrder);
        const createdOrderItems = await Promise.all(
        orderItems.map(item => orderModel.addItemToOrder(newOrder.order_id, item))
        );
        console.log('Created order items:', createdOrderItems);
        res.status(201).json({ ...newOrder, orderItems: createdOrderItems });
    } catch (error) {
        console.error('Error creating order:', error.message);
        res.status(400).json({ error: error.message });
    }
};

const getOrderByStudentId = async (req, res) => {
    const studentId = req.params.customer_id;
    try {
        const orders = await orderModel.getOrderByStudentId(studentId);
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllOrders = async (req, res) => {
    try {
        const orders = await orderModel.getAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getOrderById = async (req, res) => {
    const orderId = req.params.id;
    try {
        const order = await orderModel.getOrderById(orderId);
        if (order) {
            const orderItems = await orderItemModel.getOrderItemsInOrder(orderId);
            res.status(200).json({...order, orderItems });
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateOrder = async (req, res) => {
    const orderId = req.params.id;
    const orderData = req.body;
    try {
        const updatedOrder = await orderModel.updateOrder(orderId, orderData);
        if (updatedOrder) {
            res.status(200).json(updatedOrder);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await orderModel.deleteOrder(req.params.id);
        if (deletedOrder) {
            res.status(200).json({ message: 'Order deleted' });
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const additemtoOrder = async (req, res) => {
    const { order_id } = req.params;
    const { product_id, quantity, price } = req.body;
    console.log(orderItemData);
    try {
        const orderid = await orderModel.getOrderById(order_id);
        if (!order) {
            throw new Error('Order not found');
        };
        const newOrderItem = await orderItemModel.createOrderItem({
            order_id: parseInt(orderid),
            product_id,
            quantity,
            price,
        });
        res.status(201).json(newOrderItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const calculateOrderTotal = async (req, res) => {
    const orderId = req.params.order_id;
    try {
        const total = await orderModel.calculateOrderTotal(orderId);
        res.status(200).json({ total });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getItemsInOrder = async (req, res) => {
    const orderId = req.params.order_id;
    try {
        const orderItems = await orderItemModel.getOrderItemsInOrder(orderId);
        res.status(200).json(orderItems);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getOrderByStudentId,
    getItemsInOrder,
    additemtoOrder,
    calculateOrderTotal,
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder,
};
