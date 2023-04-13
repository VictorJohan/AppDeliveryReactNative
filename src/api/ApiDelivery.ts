import axios from 'axios';

const ApiDelivery = axios.create({
    baseURL: 'https://3aaf-2001-1308-2831-b00-653a-1f0d-ed25-bee7.ngrok-free.app/api/',
    headers: {
        'Content-type': 'application/json'
    }
})

export { ApiDelivery }