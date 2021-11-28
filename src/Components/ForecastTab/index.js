import { useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import WeatherContext from "../../Provider/Weather";

import { Button, Row, Col } from 'antd';
import { Tabs } from 'antd';
import { LineGraphics } from "../Stats/LineGraphics";
import { LineStats } from "../Stats/LineStats";
import { Dualaxes } from "../Stats/DualAxes";
import AlertList from "../AlertList";

import { CloudDownloadOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

export default function ForecastTab() {

    const { forecast, splitForecast, split } = useContext(WeatherContext)


    useEffect(async () => {
        split();

    }, [forecast])

    function callback(key) {
        console.log(key);
    }

    function getRandomArbitrary(min, max) {
        let num = Math.floor(Math.random() * (max - min) + min)
        return num;
    }
    let random = getRandomArbitrary(2, 1500)

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var newdate = year + "/" + month + "/" + day;

    return (
        <div>

            <Tabs defaultActiveKey="0" onChange={callback}>
                {splitForecast && splitForecast.map((dayForecast, key) => {
                    return (
                        <>
                            {/* {console.log("fecha: ", dayForecast[0].Fecha.split(' ')[0])} */}
                            <TabPane key={key} tab={dayForecast[0].Fecha.split(' ')[0]} >
                                <Dualaxes datos={dayForecast} x={'Hora'} y={'Probabilidad'} z={'Volumen'} />
                                <div className="download">
                                    <Button
                                        shape="circle" icon={<CloudDownloadOutlined />}
                                        href={`data:text/json;charset=utf-8,${encodeURIComponent(
                                            JSON.stringify(dayForecast)
                                        )}`}
                                        download={"Precipitaciones_" + newdate + ".json"}
                                    >
                                    </Button>
                                </div>
                                <AlertList dayForecast={dayForecast} random={random++} />

                            </TabPane>
                        </>)
                })}


            </Tabs>


        </div >
    );
}