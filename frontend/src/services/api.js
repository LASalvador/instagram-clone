import axios from 'axios';

const api = axios.create({
    baseURL: 'hhttp://5180e0d4.ngrok.io',
});

export default api;