import 'antd/dist/antd.css'
import './style.css'
import logo from './logoOverFlow.png'; // Tell webpack this JS file uses this image


import Beep from "./Components/Beep";
import Esp32Provider from './Provider/ESP32/provider';
import WeatherProvider from './Provider/Weather/provider';
import ForecastTab from './Components/ForecastTab';
import EstadoRele from "./Components/Reles";


function App() {



  return (
    <div className="container">
      <Esp32Provider>
        <WeatherProvider>


          <div className="title">
            <img src={logo} width="150" height="150"></img>
            <h1>
              OverFlow
            </h1>
          </div>

          <Beep />

          <EstadoRele />

          <div className="tabs-graficas">
            <ForecastTab />
          </div>





        </WeatherProvider>
      </Esp32Provider>


    </div>
  );
}

export default App;
