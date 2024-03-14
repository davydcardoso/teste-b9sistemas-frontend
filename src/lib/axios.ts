import axios, { AxiosError } from "axios";

export type ApiResponseError = {
  error: string;
};

export const getAxiosErrorMessage = (err: any): string => {
  console.log(err);

  if (err.response) {
    const errorAxios = err as AxiosError;

    console.log(errorAxios.response?.data);

    const { error } = errorAxios.response?.data as ApiResponseError;

    return error;
  }

  return err.message;
};

export const api = axios.create({ baseURL: "http://localhost:3003" });
