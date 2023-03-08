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

export const deletelocation = async (endpoint: string, token: string) => {
  return axios
    .delete(baseUrl + endpoint, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const updatelocation = async (
  endpoint: string,
  image: string,
  token: string
) => {
  const data = {
    img: image,
  };
  return axios
    .patch(baseUrl + endpoint, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const getuserlocations = async (endpoint: string, token: string) => {
  return axios
    .get(baseUrl + endpoint, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const getlocationbyid = async (endpoint: string) => {
  return axios.get(baseUrl + endpoint).catch((err) => {
    return err.response.data;
  });
};
