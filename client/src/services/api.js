import axios from 'axios';

export const axiosService = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    // eslint-disable-next-line max-len
    Authorization: `Bearer ${localStorage.getItem('token')} `,
  },
});
