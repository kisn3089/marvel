import axios, { AxiosInstance } from "axios";
import { BASE_URL, key } from "./constans";

export const customAxios: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  //   params: {
  //     apikey: key,
  //     ts: new Date(),
  //   },
});
