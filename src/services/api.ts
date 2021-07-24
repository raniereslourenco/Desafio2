import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:8888/produtos'
    baseURL: 'https://fakestoreapi.com/products?limit=6'
})

export default api;