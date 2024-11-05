import axios from "axios";

export const MyAPI = async () => {
  let fetchData = await axios.get("https://jsonplaceholder.typicode.com/posts");

  return fetchData.data;
};
