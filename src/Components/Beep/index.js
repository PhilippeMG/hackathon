import { Button } from 'antd';
import { useContext, useEffect } from 'react';
import Esp32Context from '../../Provider/ESP32';
import WeatherContext from '../../Provider/Weather';

export default function Beep() {

    const { clickBeepAxios, clickOnRele, clickOffRele } = useContext(Esp32Context);
    const { forecast, getCityForecast } = useContext(WeatherContext);

    useEffect(() => {
        getCityForecast('Castellon');
    }, [])




    return (
        <div>
            <Button type="primary" onClick={clickBeepAxios}>Pita Axios</Button>
            <Button type="primary" onClick={clickOnRele}>PINES ON</Button>
            <Button type="primary" onClick={clickOffRele}>PINES OFF</Button>
            {/* <Button type="primary" onClick={getCityForecast("Valencia")}>FORECAST</Button> */}
        </div>
    );

}