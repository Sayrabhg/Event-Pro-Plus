export const TOKEN_KEY = "auth_token";
export const USER_EMAIL_KEY = "user_email";

export const setAuthData = (token, email) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_EMAIL_KEY, email);
};

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

export const getUserEmail = () => {
    return localStorage.getItem(USER_EMAIL_KEY);
};

export const removeAuthData = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_EMAIL_KEY);
    localStorage.removeItem("role");
};
