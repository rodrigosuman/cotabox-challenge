import api from "./api.service";

export const createPeopleDocument = (body) => api.post("/people", body);
