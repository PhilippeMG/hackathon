import './style.css'

import { Button } from 'antd';
import { useContext, useEffect, useState } from 'react';
import Esp32Context from '../../Provider/ESP32';
import WeatherContext from '../../Provider/Weather';
import ConfirmationAlert from '../Alerts';


import { AlertOutlined } from '@ant-design/icons';

export default function Beep() {

    const { clickBeepAxios, clickOnRele, clickOffRele, printScreen, activarRele, desactivarRele } = useContext(Esp32Context);
    const [alerta, setAlerta] = useState(false);

    const { getCityForecast, split } = useContext(WeatherContext);

    useEffect(async () => {
        getCityForecast("Londres");
    }, [])


    function activarAlerta() {
        setAlerta(true);
    }


    return (
        <>
            <div className="main-container">
                <div className="alertButton">
                    <Button shape="circle" size="large" danger onClick={activarAlerta}><AlertOutlined /></Button>
                </div>

                <Button type="primary" onClick={clickBeepAxios}>Pita Axios</Button>
                <Button type="primary" onClick={clickOnRele}>PINES ON</Button>
                <Button type="primary" onClick={clickOffRele}>PINES OFF</Button>

            </div>
            {alerta && <ConfirmationAlert setAlerta={setAlerta} />}
        </>
    );

}