import { dataDecrypt, dataEncrypt } from "./cryption";

 
// Create or Update an item in localStorage
export function setItem(key, value) {
    const encriptedData = dataEncrypt(value);
    localStorage.setItem(key, encriptedData);
}

// Read an item from localStorage
export function getItem(key) {
    const value = localStorage.getItem(key);
    if (value) {
        try {
            const decryptedData = dataDecrypt(value);
            return decryptedData || null;
        } catch (error) {
            console.error("Error decrypting data from localStorage", error);
            return null;
        }
    }
    return null;
}

// Delete an item from localStorage
export function removeItem(key) {
    if (Array.isArray(key)) {
        key.forEach(k => localStorage.removeItem(k));
    } else {
        localStorage.removeItem(key);
    }
}

// Clear all items from localStorage
export function clearAll() {
    localStorage.clear();
}