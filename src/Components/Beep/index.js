import { Button } from 'antd';
import { useContext } from 'react';
import Esp32Context from '../../Provider/ESP32';

export default function Beep() {

    const { clickBeepAxios, clickOnRele, clickOffRele } = useContext(Esp32Context);




    return (
        <div>
            <Button type="primary" onClick={clickBeepAxios}>Pita Axios</Button>
            <Button type="primary" onClick={clickOnRele}>PINES ON</Button>
            <Button type="primary" onClick={clickOffRele}>PINES OFF</Button>
        </div>
    );

}