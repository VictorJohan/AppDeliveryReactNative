import axios from 'axios';

const ApiDelivery = axios.create({
    baseURL: 'https://68d3-2803-3640-118-2b00-6cb3-4c68-d2f9-b0ac.ngrok-free.app/api/',
    headers: {
        'Content-type': 'application/json'
    }
})

export { ApiDelivery }