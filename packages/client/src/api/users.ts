import axios from 'axios';
import { User } from '../types/users';

export const getUserProfile = async () => {
  return axios.get(`http://localhost:5005/user`).then((res) => res.data);
};

export const updateUserProfile = async (userData: User) => {
  return axios.put(`http://localhost:5005/user`, userData);
};
