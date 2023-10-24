import axios from "axios";

export const API = axios.create({
  baseURL: "https://gracious-elgamal.173-249-10-142.plesk.page/api", 
  headers: {
    "Api-Authorization": "Bearer $2y$10$x3wqNWc4ZonF6dVWKAPnMuU1A258mgKbGWziVPdL5mhzqQwlhQEqK",
    "Authorization": "Bearer 35|bkdTKk4t5WoNeApCMkVwWLBhmkjtarmeULMfwKiW"
  }
})