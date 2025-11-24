import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

//get countries data
export const getCountryData = () =>
  api.get("/all?fields=name,capital,region,population,flags");

//fetch individual country data
export const getCountryDetails = (id) => api.get(`/name/${id}`);
