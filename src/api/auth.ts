import axios from "axios";
import { LogInData, RegisterData } from "../interfaces/auth.interface";
import { UpdateUser } from "../interfaces/user.interface";

const baseUrl = process.env.REACT_APP_URL;

export const signup = async (endpoint: string, data: RegisterData) => {
  const registerData = {
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    password: data.password,
    confirmPassword: data.confirmPassword,
  };
  return axios.post(baseUrl + endpoint, registerData).catch((err) => {
    return err.response.data;
  });
};

export const login = async (endpoint: string, data: LogInData) => {
  const logInData = {
    email: data.email,
    password: data.password,
  };
  return axios.post(baseUrl + endpoint, logInData).catch((err) => {
    return err.response.data;
  });
};

export const userinfo = async (endpoint: string, token: string) => {
  return axios
    .get(baseUrl + endpoint, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const update = async (
  endpoint: string,
  data: UpdateUser,
  userId: number,
  token: string
) => {
  return axios
    .patch(
      baseUrl + endpoint,
      { ...data, id: userId },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .catch((err) => {
      return err.response.data;
    });
};
