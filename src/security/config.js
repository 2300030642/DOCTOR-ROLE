import axios from "axios";

export const doctorAxios = axios.create({
  baseURL: "http://localhost:2008/api/doctor/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

export const DOCTOR_API = {
  SIGNUP: "/signup",  // match backend POST /signup
  LOGIN: "/login",
};
