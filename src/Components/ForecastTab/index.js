import { useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import WeatherContext from "../../Provider/Weather";

export default function ForecastTab() {

    const { forecast, splitForecast, split } = useContext(WeatherContext)

    useEffect(async () => {
        split();
    }, [forecast])

    return (
        <div>

            {splitForecast.map((dayForecast) => {
                return (
                    <p>dayForecast2</p>
                )
            })}
        </div >
    );
}