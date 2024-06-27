const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createOrder = async (orderData) => {
    return prisma.order.create({
        data: orderData,
    });
};

const getAllOrders = async () => {
    return prisma.order.findMany();
};

const getOrderById = async (id) => {
    return prisma.order.findUnique({
        where: {
            order_id: parseInt(id),
        },
    });
};

const updateOrder = async (id, orderData) => {
    return prisma.order.update({
        where: {
            order_id: parseInt(id),
        },
        data: orderData,
    });
};

const deleteOrder = async (id) => {
    return prisma.order.delete({
        where: {
            order_id: parseInt(id),
        },
    });
};

const addItemToOrder = async (orderId, orderItemData) => {
    return prisma.orderItem.create({
        data: {
            order_id: orderId,

            ...orderItemData,
        },
    });
};

const calculateOrderTotal = async (orderId) => {
    const order = await prisma.order.findUnique({
        where: {
            order_id: parseInt(orderId),
        },
        include: {
            orderItems: true,
        },
    });

    if (!order) {
        throw new Error('Order not found');
    }

    const total = order.orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return total;
};

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder,
    addItemToOrder,
    calculateOrderTotal,
};