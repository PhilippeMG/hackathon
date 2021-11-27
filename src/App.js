import 'antd/dist/antd.css'
import './style.css'


// import { Row, Col } from 'antd';
import Beep from "./Components/Beep";
import Stats from "./Components/Stats";
import Esp32Provider from './Provider/ESP32/provider';
import WeatherProvider from './Provider/Weather/provider';
import { Row, Col } from 'antd'
import { Typography } from 'antd';
import { Tabs } from 'antd';
import { useContext } from 'react/cjs/react.development';
const { TabPane } = Tabs;

const { Title } = Typography;
function App() {

  // const { forecast } = useContext(WeatherProvider);

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

              <Stats />
            </Col>
          </Row>

        </WeatherProvider>
      </Esp32Provider>


    </div>
  );
}

export default App;
