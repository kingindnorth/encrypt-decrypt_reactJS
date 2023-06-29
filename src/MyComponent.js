import React from 'react';
import { encryptPayload, decryptPayload } from './crypto';

class MyComponent extends React.Component {
  encryptData = () => {
    // Example encryption usage
    const payload = { message: 'Hello, World!' };
    console.log("data to encrypt",payload)
    const encryptionKey = 'YourEncryptionKey';
    const iv = 'YourInitializationVector';

    const encryptedPayload = encryptPayload(payload, encryptionKey, iv);
    console.log('Encrypted Payload:', encryptedPayload);
  };

  decryptData = () => {
    // Example decryption usage
    const encryptedPayload = "U2FsdGVkX18uaVyMy5jZBSwi2ucrtF/lMeAhskd4NTdpFG6QDgOQdG8AEh/xOg3a"/* Get the encrypted payload */;
    const decryptionKey = 'YourEncryptionKey';
    const iv1 = 'YourInitializationVector';

    const decryptedData = decryptPayload(encryptedPayload, decryptionKey, iv1);
    console.log('Decrypted Data:', decryptedData);
  };

  render() {
    return (
      <div>
        <button onClick={this.encryptData}>Encrypt Data</button>
        <button onClick={this.decryptData}>Decrypt Data</button>
      </div>
    );
  }
}

export default MyComponent;
