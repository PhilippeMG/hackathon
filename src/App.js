import 'antd/dist/antd.css'
import { Row, Col } from 'antd';
import Beep from "./Components/Beep";
import Stats from "./Components/Stats";
import Esp32Provider from './Provider/ESP32/provider';
import WeatherProvider from './Provider/Weather/provider';
import { useContext } from 'react';
import WeatherContext from './Provider/Weather';

function App() {
  return (
    <div className="container">
      <Esp32Provider>
        <WeatherProvider>
          <Beep />

          <Row justify="center">
            <Col
              span={24}
              style={{
                backgroundColor: '#fff',
                marginTop: '50px',
                padding: '25px'
              }}>
              <Stats />
            </Col>
          </Row>


        </WeatherProvider>
      </Esp32Provider>


    </div>
  );
}

export default App;
