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

  // const { forecast } = useContext(WeatherProvider);
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
          <Row justify="center">
            <Col
              span={24}
              style={{
                backgroundColor: '#fff',
                marginTop: '50px',
                padding: '25px'
              }}>
              {/* forecast.map((data) => console.log(data) ) */}
              <EstadoRele />
              <Stats />
            </Col>
          </Row>

          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tab 1" key="1">
              <ForecastTab />
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>

        </WeatherProvider>
      </Esp32Provider>


    </div>
  );
}

export default App;
