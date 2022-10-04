import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}',
    headers: {
        'API-KEY': '06b6648e-6c57-44b3-a0e2-7be23eb4ef5c'
    }
});

export const weatherAPI = {
    getForecast() {
        return instance.get()
        .then(response => {
            return response.data;
        })
    }
}