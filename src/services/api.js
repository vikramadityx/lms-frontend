const BASE_URL = 'http://localhost:3000/api/v1';

const api = {
    get: async (url) => {
        try {
            const response = await fetch(`${BASE_URL}${url}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error during GET request:', error.message);
            throw error;
        }
    },
    post: async (url, body) => {
        try {
            const response = await fetch(`${BASE_URL}${url}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error during POST request:', error.message);
            throw error;
        }
    },
    put: async (url, body) => {
        try {
            const response = await fetch(`${BASE_URL}${url}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error during PUT request:', error.message);
            throw error;
        }
    },
};

export default api;