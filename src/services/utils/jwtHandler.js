import cryptojs from "crypto-js";
import jwtdecode from "jwt-decode";
export const encryptJWT = (token) => {
  const encToken = cryptojs.AES.encrypt(
    token,
    process.env.REACT_APP_TOKEN_KEY
  ).toString();
  return encToken;
};
export const decryptJWT = (encToken) => {
  const bytes = cryptojs.AES.decrypt(encToken, process.env.REACT_APP_TOKEN_KEY);
  const token = bytes.toString(cryptojs.enc.Utf8);
  return token;
};
export const saveLocalJWT = (token) => {
  const encToken = encryptJWT(token);
  localStorage.setItem("enc_token", encToken);
};
export const getLocalJWT = () => {
  let token = null;
  const enc_token = localStorage.getItem("enc_token");
  if (enc_token !== null) token = decryptJWT(enc_token);
  return token;
};
export const parseJwt = (token) => {
  if (!token) throw new Error("Token is null");
  const decoded = jwtdecode(token);
  return decoded;
};
