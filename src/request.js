import axios from "axios";

const BASE_URL = "https://moggozi.net/";
const api = axios.create({
    baseURL: BASE_URL
})

export default api;