import 'antd/dist/antd.css'
import './style.css'


// import { Row, Col } from 'antd';
import Beep from "./Components/Beep";
import Stats from "./Components/Stats";
import Esp32Provider from './Provider/ESP32/provider';
import WeatherProvider from './Provider/Weather/provider';
import { Row, Col } from 'antd'
import { Typography } from 'antd';
import { useContext } from 'react/cjs/react.development';
import { Tabs } from 'antd';
import ForecastTab from './Components/ForecastTab';
import { useEffect } from 'react';

import EstadoRele from "./Components/Reles";

const { TabPane } = Tabs;

const { Title } = Typography;
function App() {

  // const { forecast, } = useContext(WeatherProvider);
  function callback(key) {
    console.log(key);
  }

  return (
    <div className="container">
      <Esp32Provider>
        <WeatherProvider>


          <div className="title">
            <Title>
              Hackaton-FACSA
            </Title>
          </div>

          <Beep />

          <div className="tabs-graficas">
            <ForecastTab />
          </div>

          <Row justify="center">
            <Col
              span={24}
              style={{
                backgroundColor: '#fff',
                marginTop: '50px',
                padding: '25px'
              }}>

              <EstadoRele />
              <Stats />
            </Col>
          </Row>


        </WeatherProvider>
      </Esp32Provider>


    </div>
  );
}

export default App;
