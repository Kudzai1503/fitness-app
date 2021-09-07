import CryptoJS from "crypto-js"
const auth_host = 'https://sandbox-authservice.priad.ch';

const user_id = 'dambakudzai@gmail.com';
const password = 'Ae56Qxa2CSw89HFLc';

export const getToken = () => {
    const computedHash = CryptoJS.HmacMD5(`${auth_host}/login`, password);
    const computedHashString = computedHash.toString(CryptoJS.enc.Base64);

    fetch(`${auth_host}/login`, {
        method: 'POST',
        headers: {
            Authorization : `Bearer ${user_id}:${computedHashString}`
        }
    }).then(res => {
        return res.json()
    });
};