import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-9d7b3-default-rtdb.firebaseio.com/",
});

export default instance;
