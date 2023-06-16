import { Axios } from "axios";
import { SERVER_HOST, ENDPOINTS, QUERY } from "@/constants/api_endpoints";

const axios = new Axios({
  baseURL: SERVER_HOST,
  headers: {
    "Content-Type": "application/json",
  },
});

export const UsersAPIService = {
  find: async (page) => {
    const response = await axios.get(`/${ENDPOINTS.USERS}?_limit=${QUERY.LIMIT}&_page=${page}`);
    return JSON.parse(response.data);
  },
  
  findOne: async (id) => {
    const response = await axios.get(`/${ENDPOINTS.USERS}/${id}`);
    return JSON.parse(response.data);
  },

  create: async (data) => {
    const response = await axios.post(
      `/${ENDPOINTS.USERS}`,
      JSON.stringify(data)
    );
    return JSON.parse(response.data);
  },

  update: async (data) => {
    const { id } = data;
    const response = await axios.put(
      `/${ENDPOINTS.USERS}/${id}`,
      JSON.stringify(data)
    );
    return JSON.parse(response.data);
  },

  delete: async ({ id }) => {
    const response = await axios.delete(`/${ENDPOINTS.USERS}/${id}`);
    return JSON.parse(response.data);
  },
};
