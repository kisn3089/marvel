import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "./constans";

export const customAxios: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});
