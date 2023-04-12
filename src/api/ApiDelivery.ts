import axios from 'axios';

const ApiDelivery = axios.create({
    baseURL: 'https://4309-2001-1308-2831-b00-4008-f121-46a9-ba1d.ngrok-free.app/api/',
    headers: {
        'Content-type': 'application/json'
    }
})

export { ApiDelivery }