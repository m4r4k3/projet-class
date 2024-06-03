import axios from "axios";

export const  Axios = axios.create({
    baseURL:"http://localhost:8000",
    withCredentials:true,
    withXSRFToken: true,
})