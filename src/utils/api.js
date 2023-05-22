import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    // f12e68dde8msh7f65513efc51dc6p1ffff9jsn2464e507fe2e
    // 51de22aca4msh67ff75d067c1bc1p1a8a20jsnb40e342a9b2f
    // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,

    // "X-RapidAPI-Key": "f12e68dde8msh7f65513efc51dc6p1ffff9jsn2464e507fe2e",
    // "X-RapidAPI-Key": "51de22aca4msh67ff75d067c1bc1p1a8a20jsnb40e342a9b2f",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
