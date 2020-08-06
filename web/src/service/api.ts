import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === "production"
   ? 'https://erickcreis-proffy.herokuapp.com/'
   : 'localhost:3000'
})

export default api;