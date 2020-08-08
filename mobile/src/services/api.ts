import axios from 'axios';

const api = axios.create({
  baseURL: 'https://erickcreis-proffy.herokuapp.com/'
});

export default api;