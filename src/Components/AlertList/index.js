
import { useState } from "react/cjs/react.development";
import json from "../../csvjson.json"; //Lectura del fichero

export default function AlertList({ dayForecast }) {

    const [random, setRandom] = useState(getRandomArbitrary(2, 1500))
    const [alerta1, setAlerta1] = useState(false)
    const [alerta2, setAlerta2] = useState(false)
    const [alerta3, setAlerta3] = useState(false)
    const [alerta4, setAlerta4] = useState(false)

    const maximo1 = 137.5
    const maximo2 = 50
    const maximo3 = 81.25
    const maximo4 = 20.83

    let edar1 = json[random]['EDAR 1']
    let edar2 = json[random]['EDAR 2']
    let edar3 = json[random]['EDAR 3']
    let edar4 = json[random]['EDAR 4']



    function alert(day) {

        let hora = day.hora.split(':')[0]
        let prob = day.probabilidad
        let vol = day.volumen

        let porcentage = percentage(hora)

        let tuple = []

        if ((edar1 * porcentage + prob * vol) > maximo1) {
            setAlerta1(true)
        }

        if ((edar2 * porcentage + prob * vol) > maximo2) {
            setAlerta2(true)
        }

        if ((edar3 * porcentage + prob * vol) > maximo3) {
            setAlerta3(true)
        }

        if ((edar4 * porcentage + prob * vol) > maximo4) {
            setAlerta4(true)
        }




    }

    function percentage(hora) {
        if (hora >= 0 && hora <= 2) {
            return 0.0675
        }
        switch (hora) {
            case hora >= 0 && hora <= 2:
                return 0.0675
                break
            case hora >= 0 && hora <= 8:
                return 0.1125
                break
            case hora >= 8 && hora <= 15:
                return 0.3850
                break
            case hora >= 15 && hora <= 20:
                return 0.23
                break
            case hora >= 20 && hora <= 24:
                return 0.2050
                break

        }
    }



    // Retorna un número aleatorio entre min (incluido) y max (excluido)
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    return (
        <div className='aler-list-container'>

            {dayForecast.map((day) => {
                return (
                    <>
                        {

                            alert(day)

                        }

                    </>)
            })}
        </div>
    );




}


