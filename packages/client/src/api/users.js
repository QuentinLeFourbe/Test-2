import axios from 'axios';

export const getUserProfile = (userId) => {
  axios.get(`/api/user/${userId}`);
};

export const updateUserProfile = (userId, data) => {
  axios.put(`/api/user/${userId}`, data);
};
