const NODE_ENV = process.env.NODE_ENV

export const isProduction = NODE_ENV === "production";
export const isDevelopment = NODE_ENV === "development";

export const API_URL = isDevelopment ? "http://localhost:3000" : "https://api.example.com";