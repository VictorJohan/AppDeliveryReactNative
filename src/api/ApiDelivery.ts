import axios from 'axios';

const ApiDelivery = axios.create({
    baseURL: 'https://c68d-152-0-136-46.ngrok-free.app/api/',
    headers: {
        'Content-type': 'application/json'
    }
})

export { ApiDelivery }