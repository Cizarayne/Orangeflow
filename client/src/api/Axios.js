import axios from 'axios'
export const connector = axios.create({
  baseURL: "https://orangeflow-eta.vercel.app/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  }
})