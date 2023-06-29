import CryptoJS from 'crypto-js';

export function encryptPayload(payloadString, encryptionKey, iv) {
  const payload = JSON.stringify(payloadString);
  const encryptedData = CryptoJS.AES.encrypt(payload, encryptionKey, {
    iv: iv,
  }).toString();
  return {
    data: encryptedData,
    iv: iv.toString(CryptoJS.enc.Base64),
  };
}

export function decryptPayload(encryptedPayload, decryptedKey, decryptedIV) {
  const decryptedData = CryptoJS.AES.decrypt(encryptedPayload, decryptedKey, {
    iv: CryptoJS.enc.Base64.parse(decryptedIV),
  }).toString(CryptoJS.enc.Utf8);
  return decryptedData;
}
