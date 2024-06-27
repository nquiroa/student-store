const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createOrderItem = async (orderItemData) => {
    return await prisma.orderItem.create({
        data: {
        order: { connect: { order_id: orderItemData.order_id } },
        product: { connect: { id: orderItemData.product_id } },
        quantity: orderItemData.quantity,
        price: orderItemData.price,
        }
    });
};

const getAllOrderItems = async () => {
    return prisma.orderItem.findMany();
};

const getOrderItemById = async (id) => {
    return prisma.orderItem.findUnique({
        where: {
            order_item_id: parseInt(id),
        },
    });
};

const updateOrderItem = async (id, orderItemData) => {
    return prisma.orderItem.update({
        where: {
            order_item_id: parseInt(id),
        },
        data: orderItemData,
    });
};

const deleteOrderItem = async (id) => {
    return prisma.orderItem.delete({
        where: {
            order_item_id: parseInt(id),
        },
    });
};

const getOrderItemsInOrder = async (orderId) => {
    return prisma.orderItem.findMany({
        where: {
            order_id: parseInt(orderId),
        },
    });
}

module.exports = {
    getOrderItemsInOrder,
    createOrderItem,
    getAllOrderItems,
    getOrderItemById,
    updateOrderItem,
    deleteOrderItem,
};
