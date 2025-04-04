import axios from "axios";
import { WEAVY_BASE_URL, WEAVY_API_KEY } from "../config/config";

const headers = {
  Authorization: `Bearer ${WEAVY_API_KEY}`,
  "Content-Type": "application/json"
};

export const createUser = async (data: any) => {
  const res = await axios.post(`${WEAVY_BASE_URL}/api/users`, data, { headers });
  return res.data;
};

export const listUsers = async () => {
  const res = await axios.get(`${WEAVY_BASE_URL}/api/users`, { headers });
  return res.data;
};

export const getUser = async (id: string) => {
  const res = await axios.get(`${WEAVY_BASE_URL}/api/users/${id}`, { headers });
  return res.data;
};

export const updateUser = async (id: string, data: any) => {
  const res = await axios.put(`${WEAVY_BASE_URL}/api/users/${id}`, data, { headers });
  return res.data;
};

export const deleteUser = async (id: string) => {
  const res = await axios.delete(`${WEAVY_BASE_URL}/api/users/${id}`, { headers });
  return res.data;
};
