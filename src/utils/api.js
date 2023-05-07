import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "f12e68dde8msh7f65513efc51dc6p1ffff9jsn2464e507fe2e",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
