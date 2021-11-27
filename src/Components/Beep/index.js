import './style.css'

import { Button } from 'antd';
import { useContext, useEffect, useState } from 'react';
import Esp32Context from '../../Provider/ESP32';
import WeatherContext from '../../Provider/Weather';
import ConfirmationAlert from '../Alerts';


import { AlertOutlined } from '@ant-design/icons';

export default function Beep() {

    const { clickBeepAxios, clickOnRele, clickOffRele } = useContext(Esp32Context);
    const { forecast, getCityForecast } = useContext(WeatherContext);
    const [alerta, setAlerta] = useState(false);
    useEffect(() => {
        getCityForecast('Castellon');
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
                {/* <Button type="primary" onClick={getCityForecast("Valencia")}>FORECAST</Button> */}
            </div>
            {alerta && <ConfirmationAlert setAlerta={setAlerta} />}
        </>
    );

}