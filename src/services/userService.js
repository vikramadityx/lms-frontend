import api from './api';

const userService = {
    registerUser: async (userData) => {
        try {
            const response = await api.post('/user/register', userData);
            return response;
        } catch (error) {
            return error; // You might want to handle errors more gracefully
        }
    },

    loginUser: async (loginData) => {
        try {
            const response = await api.post('/user/login', loginData);
            return response;
        } catch (error) {
            return error; // You might want to handle errors more gracefully
        }
    },

    // Add more user-related methods as needed

    // Example: Register multiple users in bulk
    registerUsersInBulk: async (usersData) => {
        try {
            const response = await api.post('/user/register-bulk', usersData);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    // Example: Update user password
    updatePassword: async (userId, newPassword) => {
        try {
            const response = await api.put(`/user/update-password/${userId}`, { newPassword });
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
};

export default userService;
