/* eslint-disable no-unreachable */
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const settingApi = () => ({
   validateToken: async (token: string) => {
     const response = await api.get(`/task/${token}`);
     return response.data;
   },

  signin: async (name: string, password: string) => {
    const response = await api.post("/user/login", { name, password });
    return response.data;
  },

  signup: async (name: string, password: string, Rpass: string) => {
    const response = await api.post("/user", { name, password, Rpass });
    return response.data;
  },

  logout: async () => {
    return { status: false };
    const response = await api.post("/logout");
    return response.status;
  },

  loadTask: async () => {
    const idUser = localStorage.getItem("authId");
    const response = await api.get(`/user/${idUser}`);
    return response.data;
  },

  createTask: async (description: string, detail: string) => {
    const idUser = localStorage.getItem("authId");
    const teste = false;
    const response = await api.post("/tasks/", {
      description,
      detail,
      idUser,
    });
    console.log(response);
    return response.data;
  },

  editTask: async (id: string, description: string, detail: string) => {
    const response = await api.put(`/tasks/${id}`, {
      description,
      detail,
    });
    return response.data;
  },

  deletTask: async (id: string) => {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
  },
});
