// categoryService.js

import api from './api';

const categoryService = {
    getAllCategories: async () => {
        return api.get('/category/get-all-categories');
    },

    getAllCategoriesByCreatorId: async (creatorId) => {
        return api.get(`/get-all-categories/${creatorId}`);
    },

    createCategory: async (categoryData) => {
        return api.post('/category/create-category', categoryData);
    },

    updateCategoryById: async (categoryId, updatedData) => {
        return api.put(`/update-category/${categoryId}`, updatedData);
    },

    getChildCategoriesByParentId: async (parentId) => {
        return api.get(`/get-all-child-categories/${parentId}`);
    },

    getCategoryById: async (categoryId) => {
        return api.get(`/${categoryId}`);
    },
    // Add more category-related methods as needed
};

export default categoryService;
