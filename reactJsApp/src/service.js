import axios from "axios";

export const addClient = (client) =>
  axios.post("http://localhost:3001/saveClient", client);

export const editClient = (client, id) =>
  axios.put("http://localhost:3001/editClient", client, id);

export const deleteClient = (id) =>
  axios.delete(`http://localhost:3001/client?id=${id}`);

export const getAllAppointments = () =>
  axios.get("http://localhost:3001/appointments");

export const addAppointment = (appointment) =>
  axios.post("http://localhost:3001/saveAppointment", appointment);

export const editAppointment = (appointment, id) =>
  axios.put("http://localhost:3001/editAppointment", appointment, id);

export const deleteAppointment = (id) =>
  axios.delete(`http://localhost:3001/appointment?id=${id}`);
