import axios from 'axios';

// checks if a token exists and creates a header containing the token
export default function () {
  const token = localStorage.getItem('token')
    ? localStorage.getItem('token')
    : '';

  const instance = axios.create({
    headers: {
      Authorization: token,
    },
  });

  return instance;
}