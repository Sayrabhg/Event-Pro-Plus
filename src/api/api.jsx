import axios from "axios";
import { getToken, removeAuthData } from "../utils/token";

const api = axios.create({
    baseURL: "https://zest-activation-backend-production.up.railway.app",
    headers: {
        "Content-Type": "application/json",
    },
});

/* Attach JWT */
api.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

/* Handle 401 */
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            removeAuthData();
            window.location.href = "/auth";
        }
        return Promise.reject(error);
    }
);

/* APIs */
export const loginApi = (data) => api.post("/auth/login", data);
export const signupApi = (data) => api.post("/auth/register", data);
export const getProfileApi = () => api.get("/user/profile");

export default api;
