const orderItemModel = require('../Models/orderItem');


const createOrderItem = async (req, res) => {
    const orderItemData = req.body;
    try {
        const newOrderItem = await orderItemModel.createOrderItem(orderItemData);
        res.status(201).json(newOrderItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllOrderItems = async (req, res) => {
    try {
        const orderItems = await orderItemModel.getAllOrderItems();
        res.status(200).json(orderItems);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getOrderItemById = async (req, res) => {
    const orderItemId = req.params.id;
    try {
        const orderItem = await orderItemModel.getOrderItemById(orderItemId);
        if (orderItem) {
            res.status(200).json(orderItem);
        } else {
            res.status(404).json({ error: 'Order item not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateOrderItem = async (req, res) => {
    const orderItemId = req.params.id;
    const orderItemData = req.body;
    try {
        const updatedOrderItem = await orderItemModel.updateOrderItem(orderItemId, orderItemData);
        if (updatedOrderItem) {
            res.status(200).json(updatedOrderItem);
        } else {
            res.status(404).json({ error: 'Order item not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteOrderItem = async (req, res) => {
    try {
        const deletedOrderItem = await orderItemModel.deleteOrderItem(req.params.id);
        if (deletedOrderItem) {
            res.status(200).json({ message: 'Order item deleted' });
        } else {
            res.status(404).json({ error: 'Order item not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const addOrderItem = async (req, res) => {
    const orderItemData = req.body;
    try {
        const newOrderItem = await orderItemModel.createOrderItem(orderItemData);
        res.status(201).json(newOrderItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    createOrderItem,
    getAllOrderItems,
    getOrderItemById,
    updateOrderItem,
    deleteOrderItem,
    addOrderItem,
};
