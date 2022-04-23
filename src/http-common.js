import axios from "axios";
export default axios.create({
  baseURL: "https://6260945592df0bc0f345caea.mockapi.io/:api",
  headers: {
    "Content-type": "application/json",
  },
});
