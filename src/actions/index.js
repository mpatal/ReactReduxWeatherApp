/*eslint-disable no-console */
import axios from 'axios';
const API_KEY = '410284e4ed50a0f56ab65fca6ba857e7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER_ACTION_TYPE = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    //any payload that is a promise is consumed by the redux promise stops the action and finishes the promise and send that as the payload
    return {
        type: FETCH_WEATHER_ACTION_TYPE,
        payload: request
    };
}