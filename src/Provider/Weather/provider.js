import { tuple } from 'antd/lib/_util/type';
import axios from 'axios';
import React, { useState } from 'react';
import WeatherContext from "./index";

const openWeather = 'http://api.openweathermap.org/data/2.5'
const apiKey = '939870073591d720503a9d8aebd34eb3'
export default function WeatherProvider({ children }) {

    const [forecast, setForecast] = useState([]);
    const [splitForecast, setSplitForecast] = useState([])

    const getCityForecast = async (city) => {
        // send HTTP request
        const response = await axios.get(`${openWeather}/forecast?q=${city}&appid=${apiKey}&units=metric`);
        console.log("Respuesta OPENWEATHER:", response.data.list)

        let tupleForecast = []
        response.data.list.map((data) => {
            //console.log(data.dt_txt, data.pop)

            // Graficas
            let newTuple = tupleForecast
            if (data.rain) {
                newTuple.push({ "Fecha": data.dt_txt, "data": data.pop, "data2": data.rain['3h'] })
                //newTuple.push({ "fecha": data.dt_txt, "data": data.rain['3h'], "category": "Volumen lluvia" })
            }
            else {
                // newTuple.push({ "fecha": data.dt_txt, "data": data.pop, "category": "Precipitaciones" })
                //newTuple.push({ "fecha": data.dt_txt, "data": 0, "category": "Volumen lluvia" })
                newTuple.push({ "Fecha": data.dt_txt, "data": data.pop, "data2": 0 })

            }

            tupleForecast = newTuple
        })


        setForecast(tupleForecast)




    }


    const split = () => {
        //First day:
        let currentDate = new Date(Date.now())
        let currentDay = currentDate.getDay()


        let solution = []
        let dayForecast = []
        let cont = 0

        forecast.map((data) => {
            let actualDay = new Date(data.Fecha.split(' ')[0])
            actualDay = actualDay.getDay()


            if (actualDay == currentDay) {

                dayForecast.push({ "Fecha": data.Fecha, "Hora": data.Fecha.split(' ')[1], "Probabilidad": data.data, "Volumen": data.data2 })


            } else {
                solution.push(dayForecast)
                dayForecast = [];
                currentDay = actualDay;


                dayForecast.push({ "Fecha": data.Fecha, "Hora": data.Fecha.split(' ')[1], "Probabilidad": data.data, "Volumen": data.data2 })

                cont++
            }

        })

        setSplitForecast(solution)

    }

    return (
        <WeatherContext.Provider
            value={{ forecast, getCityForecast, splitForecast, split }}> {children}
        </WeatherContext.Provider>
    );

}
