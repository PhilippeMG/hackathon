//import { Line } from '@ant-design/charts';
import 'antd/dist/antd.css'

import Beep from "./Components/Beep";
import Esp32Provider from './Provider/ESP32/provider';


function App() {
  return (
    <div className="App">
      <Esp32Provider>
        <Beep />

      </Esp32Provider>

    </div>
  );
}

export default App;
