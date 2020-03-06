import Cookies from "js-cookie";

// TOKEN CREDENTIAL
const tokenKey = `${process.env.NODE_ENV}_admin_access_token`;
const expiredTokenKey = `${process.env.NODE_ENV}_admin_expired_token`;

const getToken = () => Cookies.get(tokenKey) || null;

const getExpired = () => Cookies.get(expiredTokenKey);

const setCredential = ({ token, expired }) => {
    Cookies.set(tokenKey, token);
    Cookies.set(expiredTokenKey, expired);
};

const removeAuthCredential = () => {
    Cookies.remove(tokenKey);
    Cookies.remove(expiredTokenKey);
};

export { getToken, getExpired, setCredential, removeAuthCredential};