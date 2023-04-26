import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_API_URL;

const api = axios.create({ baseURL });

export { api };
