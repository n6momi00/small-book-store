import axios from 'axios';

export const axiosApi = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 15000
});
