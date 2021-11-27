
import { Button } from 'antd';
import { useContext, useEffect, useState } from 'react';
import Esp32Context from '../../Provider/ESP32';
import WeatherContext from '../../Provider/Weather';

import { BulbOutlined } from '@ant-design/icons';

export default function EstadoRele() {

    const { clickBeepAxios, clickOnRele, clickOffRele, printScreen, reles } = useContext(Esp32Context);
    const { forecast, getCityForecast } = useContext(WeatherContext);
  


    return (
        <>
          {reles["1"] == 1 ? (
                <Button type="primary"  shape="circle" size="large"><BulbOutlined /></Button>
            ):(
                <Button type="primary" disabled  shape="circle" size="large"><BulbOutlined /></Button>

            )
            }

            {reles["2"] == 1 ? (
                <Button type="primary"  shape="circle" size="large"><BulbOutlined /></Button>
            ):(
                <Button type="primary" disabled  shape="circle" size="large"><BulbOutlined /></Button>

            )
            }
            {reles["3"] == 1 ? (
                <Button type="primary" shape="circle" size="large" ><BulbOutlined /></Button>
            ):(
                <Button type="primary" disabled  shape="circle" size="large"><BulbOutlined /></Button>

            )
            }
            {reles["4"] == 1 ? (
                <Button type="primary"  shape="circle" size="large"><BulbOutlined /></Button>
            ):(
                <Button type="primary" disabled  shape="circle" size="large"><BulbOutlined /></Button>

            )
            }


        </>
    );

}