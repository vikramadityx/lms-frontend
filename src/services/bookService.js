import api from './api';

const bookService = {
    addBook: async (bookData) => {
        return api.post('/book/add', bookData);
    },

    updateLendedBooksById: async (bookId, updatedData) => {
        return api.put(`/book/lend/${bookId}`, updatedData);
    },

    getBookById: async (bookId) => {
        return api.get(`/book/${bookId}`);
    },

    updateBookById: async (bookId, updatedData) => {
        return api.put(`/book/${bookId}`, updatedData);
    },

    deleteBookById: async (bookId) => {
        return api.delete(`/book/${bookId}`);
    },

    searchBooks: async (query) => {
        return api.get(`/book/search?query=${query}`);
    },

    getAllBooks: async () => {
        return api.get('/book');
    },
    
};

export default bookService;
