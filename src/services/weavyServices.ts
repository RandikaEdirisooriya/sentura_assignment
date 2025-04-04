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
