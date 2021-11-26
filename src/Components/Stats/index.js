

import { ColumnGraphics } from './ColumnGraphics'; //Componente grafico personalizado
import { LineGraphics } from './LineGraphics'; //Componente grafico personalizado
import { Row, Col } from 'antd';
import sensores from "./fichero.json"; //Lectura del fichero



export default function Stats() {



    return (
        <div>
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