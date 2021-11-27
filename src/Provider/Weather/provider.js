import axios from 'axios';
import React, { useState } from 'react';
import WeatherContext from "./index";

const openWeather = 'http://api.openweathermap.org/data/2.5'
const apiKey = '939870073591d720503a9d8aebd34eb3'
export default function WeatherProvider({ children }) {


    const [forecast, setForecast] = useState(null);

    const getCityForecast = async (city) => {
        // send HTTP request

        const response = await axios.get(`${openWeather}/forecast?q=${city}&appid=${apiKey}&units=metric`);
        console.log("Respuesta OPENWEATHER:", response.data)

        // validar respuesta

        // save response to variablex
        setForecast(response.data)
    }

    return (
        <WeatherContext.Provider
            value={{ forecast, getCityForecast }}> {children}
        </WeatherContext.Provider>
    );

}
