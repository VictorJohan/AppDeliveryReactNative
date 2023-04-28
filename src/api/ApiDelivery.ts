import axios from 'axios';

const ApiDelivery = axios.create({
    baseURL: 'https://ee56-179-52-196-133.ngrok-free.app/api/',
    headers: {
        'Content-type': 'application/json'
    }
})

export { ApiDelivery }