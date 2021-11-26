import 'antd/dist/antd.css'
import './style.css'

import { Row, Col } from 'antd';
import Beep from "./Components/Beep";
import Stats from "./Components/Stats";
import { Typography } from 'antd';
const { Title } = Typography;
function App() {

  return (
    <div className="container">

      <Row justify="center">
        <Col
          span={24}
          style={{
            backgroundColor: '#fff',
            marginTop: '50px',
            padding: '25px'
          }}>
          <div className="title">
            <Title>Hackathon - FACSA</Title>
          </div>
          <Stats />
        </Col>
      </Row>

    </div>
  );
}

export default App;
