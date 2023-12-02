// productService.js

import api from './api';

const productService = {
    createProduct: async (productData) => {
        return api.post('/product/create-product', productData);
    },

    updateProductById: async (productId, updatedData) => {
        return api.put(`/update-product/${productId}`, updatedData);
    },

    getProductById: async (productId) => {
        return api.get(`/get-product/${productId}`);
    },

    getProductByName: async (productName) => {
        return api.get(`/get-product?name=${productName}`);
    },

    getProductByQuery: async (query) => {
        return api.get(`/get-product-search?query=${query}`);
    },

    getAllProducts: async () => {
        return api.get('/get-all-products');
    },

    getAllProductsByCategoryId: async (categoryId) => {
        return api.get(`/get-category-products/${categoryId}`);
    },

    updateProductSkuById: async (productId, skuData) => {
        return api.put(`/update-product-sku/${productId}`, skuData);
    },
    // Add more product-related methods as needed
};

export default productService;
