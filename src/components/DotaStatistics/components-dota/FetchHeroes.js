import axios from "axios";

const URL = `https://api.opendota.com/api/heroes`;

export async function getHeroes() {
  try {
    const response = await axios.get(URL);
    return response;
  } catch (error) {
    console.error(error);
  }
}
