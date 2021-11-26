import 'antd/dist/antd.css'
import Beep from "./Components/Beep";
import sensores from "./fichero.json"; //Lectura del fichero
import { ColumnGraphics } from './Components/Stats/ColumnGraphics'; //Componente grafico personalizado
import { LineGraphics } from './Components/Stats/LineGraphics'; //Componente grafico personalizado
import { Button, Tabs, Row, Col, Checkbox, Divider } from 'antd';
import { useState } from 'react';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Precipitaciones', 'Temperatura'];
const defaultCheckedList = ['Precipitaciones', 'Temperatura'];


function App() {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = list => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
    console.log(checkedList)
  };

  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  const info = () => {
    console.log('datos', sensores)
  };

  return (
    <div className="container">

      <Row justify="center">
        <Col
          span={20}

          style={{
            backgroundColor: '#fff',
            marginTop: '50px',
            padding: '25px'
          }}>
          <h1>Proyecto de Nayar-Facsa</h1>
          <Beep />
          {info()}
          <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />

        </Col>
      </Row>
      { }
      <Row justify="center">
        <Col
          span={10}

          style={{
            backgroundColor: '#fff',
            marginTop: '50px',
            padding: '25px'
          }}>

          <LineGraphics loading={false} title={'Precipitaciones'} datos={sensores} x={'Dia'} y={'Temp'} />
        </Col>
        <Col
          span={10}

          style={{
            backgroundColor: '#fff',
            marginTop: '50px',
            padding: '25px'
          }}>
          <ColumnGraphics loading={false} title={'Temperatura'} datos={sensores} x={'Dia'} y={'Temp'} />
        </Col>
      </Row>

    </div>
  );
}

export default App;
