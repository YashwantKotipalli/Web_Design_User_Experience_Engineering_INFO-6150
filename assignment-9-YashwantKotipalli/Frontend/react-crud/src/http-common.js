import axios from "axios";


// using axios as our React frontend's CRUD HTTP Client
export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});