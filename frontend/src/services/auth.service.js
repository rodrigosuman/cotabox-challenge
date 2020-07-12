import api from "./api.service";

export const login = (body) => api.post("/auth/login", body);

export const signUp = (body) => api.post("/auth/signup", body);
