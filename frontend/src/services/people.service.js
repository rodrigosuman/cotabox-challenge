import api from "./api.service";

export const getAllPeopleData = () => api.get("/people");

export const createPeopleDocument = (body) => api.post("/people", body);

export const deletePersonDocument = (id) => api.delete(`/people/${id}`);

export const editPersonDocument = (id, body) => api.put(`/people/${id}`, body);
