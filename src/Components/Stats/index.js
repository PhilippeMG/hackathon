import './style.css'

import { ColumnGraphics } from './ColumnGraphics'; //Componente grafico personalizado
import { LineGraphics } from './LineGraphics'; //Componente grafico personalizado
import { Button, Row, Col } from 'antd';
import sensores from "./fichero.json"; //Lectura del fichero



export default function Stats() {



    return (
        <div>
            <Button
                href={`data:text/json;charset=utf-8,${encodeURIComponent(
                    JSON.stringify(sensores)
                )}`}
                download="filename.json"
            >
                {`Download Json`}
            </Button>
            <Row justify="center">
                <Col>
                    <LineGraphics loading={false} title={'Precipitaciones'} datos={sensores} x={'Dia'} y={'Temp'} />
                </Col>

                <Col>
                    <ColumnGraphics loading={false} title={'Temperatura'} datos={sensores} x={'Dia'} y={'Temp'} />
                </Col>
            </Row>
        </div>
    );
}