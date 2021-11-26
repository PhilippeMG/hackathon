import 'antd/dist/antd.css'
import { Row, Col } from 'antd';
import Beep from "./Components/Beep";
import Stats from "./Components/Stats";

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
          <Stats />
        </Col>
      </Row>

    </div>
  );
}

export default App;
