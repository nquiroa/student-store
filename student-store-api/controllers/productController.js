const productModel = require('../Models/productModel');

const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productModel.getProductById(productId);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createProduct = async (req, res) => {
    const productData = req.body;
    try {
        const newProduct = await productModel.createProduct(productData);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateProduct = async (req, res) => {
    const productId = req.params.id;
    const productData = req.body;
    try {
        const updatedProduct = await productModel.updateProduct(productId, productData);
        if (updatedProduct) {
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await productModel.deleteProduct(req.params.id);
        if (deletedProduct) {
            res.status(200).json({ message: 'Product deleted' });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getProducts = async (req, res) => {
    const { category, min, max, name, sort } = req.query;

    try {
        let products;
        if (category) {
            products = await productModel.getProductsbyCategory(category);
        } else if (name) {
            products = await productModel.getProductsByName(name);
        } else if (min !== undefined && max !== undefined) {
            products = await productModel.getProductsByPriceRange(min, max);
        } else {
            products = await productModel.getAllProducts();
        }

        if (sort) {
            if (sort === 'price') {
                products = products.sort((a, b) => a.price - b.price);
            } else if (sort === 'name') {
                products = products.sort((a, b) => a.name.localeCompare(b.name));
            }
        }

        if (products.length) {
            res.status(200).json(products);
        } else {
            res.status(404).json({ error: 'No products found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};
