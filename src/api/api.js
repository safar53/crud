import axios from "axios";

const url = "http://localhost:3003/users";

export const getUsers = async (id) => {
  id = id || "";
  return await axios.get(`crud/${url}/${id}`);
};

export const addUser = async (user) => {
  return await axios.post(`crud/${url}`, user);
};

export const editUser = async (id, user) => {
  return await axios.put(`crud/${url}/${id}`, user);
};

export const deleteUser = async (id) => {
  return await axios.delete(`crud/${url}/${id}`);
};
