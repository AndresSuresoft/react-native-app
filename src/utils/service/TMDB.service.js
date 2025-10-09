
import { TMDB_BASE_URL, TMDB_ACCESS_TOKEN } from '@env'; 
import axios from 'axios';

const api = axios.create({
    baseURL: TMDB_BASE_URL, 
    headers: {
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
    },
    timeout: 5000,
});

export default api;