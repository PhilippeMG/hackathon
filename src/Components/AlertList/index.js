import './style.css'
import { Alert, notification, Button } from "antd";
import { useEffect, useState } from "react/cjs/react.development";
import json from "../../csvjson.json"; //Lectura del fichero
import ConfirmationAlert from "../Alerts";

export default function AlertList({ dayForecast, random }) {

    console.log("RANDOM", random)
    let edar1 = json[random]['EDAR 1']
    let edar2 = json[random]['EDAR 2']
    let edar3 = json[random]['EDAR 3']
    let edar4 = json[random]['EDAR 4']

    const maximo1 = 137.5
    const maximo2 = 50
    const maximo3 = 81.25
    const maximo4 = 20.83

    function checkAlert(hour) {

        let hora = hour.Hora.split(':')[0]
        let prob = hour.Probabilidad
        let vol = hour.Volumen
        //console.log("Hora:", hora, "Prob:", prob, "Vol:", vol)

        let porcentage = percentage(hora)

        let sol = [false, false, false, false]
        //console.log("EDGAR1:", (edar1 * porcentage) + (prob * vol))
        if ((edar1 * porcentage) * (prob * vol) * 100 > maximo1) {
            sol[0] = true;
        }
        //console.log("EDGAR2:", (edar2 * porcentage) * (prob * vol))
        if (((edar2 * porcentage) * (prob * vol)) * 100 > maximo2) {
            sol[1] = true;

        }
        //console.log("EDGAR3:", (edar3 * porcentage + prob * vol))
        if ((edar3 * porcentage) * (prob * vol) * 100 > maximo3) {
            sol[2] = true;

        }
        //console.log("EDGAR69:", (edar3 * porcentage + prob * vol))
        if ((edar4 * porcentage) * (prob * vol) * 100 > maximo4) {
            sol[3] = true;
        }
        return sol;

    }

    function percentage(hora) {
        hora = parseInt(hora)
        // console.log(hora)
        switch (hora) {
            case (0):
                return 0.0675
            case (3):
                return 0.1125
            case (6):
                return 0.1125
            case (9):
                return 0.385
            case (12):
                return 0.385
            case (15):
                return 0.23
            case (18):
                return 0.23
            default:
                return 0.205
        }
    }


    return (
        <div className='aler-list-container'>
            {dayForecast && dayForecast.map((hour) => {
                let sol = checkAlert(hour)
                // (console.log(alerta1, alerta2, alerta3, alerta4))

                return (
                    <>
                        <div className="alert-container">
                            {sol[0] && <ConfirmationAlert sector={1} date={hour.Fecha} />}
                        </div>
                        <div className="alert-container">
                            {sol[1] && <ConfirmationAlert sector={2} date={hour.Fecha} />}                        </div>
                        <div className="alert-container">
                            {sol[2] && <ConfirmationAlert sector={3} date={hour.Fecha} />}
                        </div>
                        <div className="alert-container">
                            {sol[3] && <ConfirmationAlert sector={4} date={hour.Fecha} />}
                        </div>

                    </>
                )
            })}
        </div>
    );




}


