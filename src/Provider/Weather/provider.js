import { tuple } from 'antd/lib/_util/type';
import axios from 'axios';
import React, { useState } from 'react';
import WeatherContext from "./index";

const openWeather = 'http://api.openweathermap.org/data/2.5'
const apiKey = '939870073591d720503a9d8aebd34eb3'
export default function WeatherProvider({ children }) {

    const [forecast, setForecast] = useState([]);


    const getCityForecast = async (city) => {

        let tupleForecast = []
        // send HTTP request
        const response = await axios.get(`${openWeather}/forecast?q=${city}&appid=${apiKey}&units=metric`);
        console.log("Respuesta OPENWEATHER:", response.data.list)
        response.data.list.map((data) => {
            // console.log(data.dt_txt, data.pop)
            let newTuple = tupleForecast
            if (data.rain) {
                newTuple.push({ "fecha": data.dt_txt, "data": data.pop, "category": "Precipitaciones" })
                newTuple.push({ "fecha": data.dt_txt, "data": data.rain['3h'], "category": "Volumen lluvia" })

            }
            else {
                newTuple.push({ "fecha": data.dt_txt, "data": data.pop, "category": "Precipitaciones" })
            }
            tupleForecast = newTuple
        })

        // validar respuesta

        // save response to variablex
        console.log(tupleForecast)
        setForecast(tupleForecast)
    }

    return (
        <WeatherContext.Provider
            value={{ forecast, getCityForecast }}> {children}
        </WeatherContext.Provider>
    );

}
