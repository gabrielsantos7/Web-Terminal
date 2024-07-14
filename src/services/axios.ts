import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api-gemini-chat.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
