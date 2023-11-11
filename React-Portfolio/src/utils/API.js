import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getUsers = () => {
  return axios.get(`${BASE_URL}/users`);
};

const getSingleUser = (userId) => {
  return axios.get(`${BASE_URL}/users/${userId}`);
};

export { getUsers, getSingleUser };
