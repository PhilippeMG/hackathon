import { useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import WeatherContext from "../../Provider/Weather";

import { Tabs } from 'antd';
import { LineGraphics } from "../Stats/LineGraphics";
import { LineStats } from "../Stats/LineStats";
import { Dualaxes } from "../Stats/DualAxes";
import AlertList from "../AlertList";
const { TabPane } = Tabs;


export default function ForecastTab() {

    const { forecast, splitForecast, split } = useContext(WeatherContext)

    useEffect(async () => {
        split();

    }, [forecast])

    function callback(key) {
        console.log(key);
    }

    return (
        <div>

            <Tabs defaultActiveKey="0" onChange={callback}>
                {splitForecast && splitForecast.map((dayForecast, key) => {
                    return (
                        <>
                            {console.log(splitForecast)}
                            {/* {console.log("fecha: ", dayForecast[0].fecha.split(' ')[0])} */}
                            <TabPane tab={dayForecast[0].Fecha.split(' ')[0]} key={key}>
                                <Dualaxes datos={dayForecast} x={'Hora'} y={'Probabilidad'} z={'Volumen'} />
                                <AlertList dayForecast="dayForecast" />

                            </TabPane>
                        </>)
                })}

                {/* <TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                </TabPane> */}

            </Tabs>


        </div >
    );
}