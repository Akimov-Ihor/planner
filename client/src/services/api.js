import axios from 'axios';

export const axiosService = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    // eslint-disable-next-line max-len
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjEzNzMyOTc5fQ.E-E0iu_m-nqstxc_WGiyiGgD5BjWHtOc7OIH3VU_nCU',
  },
});
