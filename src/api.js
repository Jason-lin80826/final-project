import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://da-nai-wei-wei.herokuapp.com'
});

const register = (payload) => instance.post('/users/register', payload);
const login = (payload) => instance.post('/users/login', payload);

export { register, login };
