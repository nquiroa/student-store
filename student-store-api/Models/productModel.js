const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllProducts = async () => {
    return prisma.product.findMany();
};

const getProductById = async (id) => {
    return prisma.product.findUnique({
        where: {
            id: parseInt(id),
        },
    });
};

const getProductsbyCategory = async (category) => {
    return prisma.product.findMany({
        where: {
            category: category,
            mode: 'insensitive',
        },
    });
};
const getProductsByName = async (name) => {
    return prisma.product.findMany({
        where: {
            name: {
                contains: name,
            },
        },
    });
};

const getProductsByPriceRange = async (minPrice, maxPrice) => {
    return prisma.product.findMany({
        where: {
            price: {
                gte: minPrice,
                lte: maxPrice,
            },
        },
    });
};

const createProduct = async (productData) => {
    return prisma.product.create({
        data: productData,
    });
};

const updateProduct = async (id, productData) => {
    return prisma.product.update({
        where: {
            id: parseInt(id),
        },
        data: productData,
    });
};

const deleteProduct = async (id) => {
    return prisma.product.delete({
        where: {
            id: parseInt(id),
        },
    });
};



module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductsbyCategory,
    getProductsByName,
    getProductsByPriceRange,
};
