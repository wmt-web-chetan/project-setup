import CryptoJS from "crypto-js"; 
import { notification } from "antd";
import { LOCAL_SECRET_KEY } from "../constants";
import { clearAll } from "./localStorage";


// Encrypt function (using Base64 encoding)
export function dataEncrypt(object) {
  try {
    const jsonString = JSON.stringify(object);
    const encrypted = CryptoJS.AES.encrypt(jsonString, LOCAL_SECRET_KEY).toString(CryptoJS.format.OpenSSL);
    return encrypted;
  } catch (error) {
    console.error("Error during encryption:", error);
  }
}

// Decrypt function (decode from Base64)
export function dataDecrypt(encryptedText) {
  try {
    // Decrypt from Base64 encoded ciphertext
    const bytes = CryptoJS.AES.decrypt(encryptedText, LOCAL_SECRET_KEY);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

    if (!decryptedText) {
      throw new Error("Decryption failed. The result is not valid.");
    }

    const decryptedObject = JSON.parse(decryptedText);
    return decryptedObject;
  } catch (error) {
    if (window.location.pathname !== "/signin") {
      clearAll();
      window.location.replace("/signin");
      notification.error({
        message: "Error",
        description: "Invalid Token",
        duration: 2,
      });
    }

    console.error("Error during decryption:", error);
  }
}

