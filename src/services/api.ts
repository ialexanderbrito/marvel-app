import axios from 'axios';

const api = axios.create({
  baseURL: 'https://marvel-oficial.herokuapp.com'
});

export default api;