import axios from "axios";
import { AddLocationData } from "../interfaces/location.interface";

const baseUrl = process.env.REACT_APP_URL;

export const addlocation = async (
  endpoint: string,
  data: AddLocationData,
  token: string
) => {
  return axios
    .post(baseUrl + endpoint, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((err) => {
      return err.response.data;
    });
};
