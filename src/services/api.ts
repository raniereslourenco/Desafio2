import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:8888/produtos'
    baseURL: 'https://github.com/raniereslourenco/Desafio2/blob/main/server.json'
})

export default api;