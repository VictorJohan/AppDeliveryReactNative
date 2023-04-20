import axios from 'axios';

const ApiDelivery = axios.create({
    baseURL: 'https://dc43-2001-1308-280f-9500-e977-13aa-87b2-c1a2.ngrok-free.app/api/',
    headers: {
        'Content-type': 'application/json'
    }
})

export { ApiDelivery }