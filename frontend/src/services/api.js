import axios from 'axios';

const api = axios.create({
  baseURL: 'http://0.0.0.0:5002', 
   /*baseURL: 'https://back.speedoo.com.br', */ 
});

export default api;
