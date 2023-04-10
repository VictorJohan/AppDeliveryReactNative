import axios from 'axios';

const ApiDelivery = axios.create({
    baseURL: 'https://9c0d-2001-1308-2831-b00-98b3-a8a9-67c4-1786.ngrok-free.app/api/',
    headers: {
        'Content-type': 'application/json'
    }
})

export { ApiDelivery }