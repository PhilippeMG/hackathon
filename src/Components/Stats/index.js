import './style.css'

import { ColumnGraphics } from './ColumnGraphics'; //Componente grafico personalizado
import { LineGraphics } from './LineGraphics'; //Componente grafico personalizado
import { Button, Row, Col } from 'antd';
import sensores from "./fichero.json"; //Lectura del fichero

import { CloudDownloadOutlined } from '@ant-design/icons';


export default function Stats() {


    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var newdate = year + "/" + month + "/" + day;
    return (
        <div>

            <Row justify="center">
                <Col>
                    <LineGraphics loading={false} title={'Precipitaciones'} datos={sensores} x={'Dia'} y={'Temp'} />
                    <div className="download">
                        <Button
                            shape="circle" icon={<CloudDownloadOutlined />}
                            href={`data:text/json;charset=utf-8,${encodeURIComponent(
                                JSON.stringify(sensores)
                            )}`}
                            download={"Precipitaciones_" + newdate + ".json"}
                        >
                        </Button>
                    </div>
                </Col>

                <Col>
                    <ColumnGraphics loading={false} title={'Temperatura'} datos={sensores} x={'Dia'} y={'Temp'} />
                    <div className="download">

                        <Button
                            shape="circle" icon={<CloudDownloadOutlined />}
                            href={`data:text/json;charset=utf-8,${encodeURIComponent(
                                JSON.stringify(sensores)
                            )}`}
                            download={"Temperatura_" + newdate + ".json"}
                        >
                        </Button>
                    </div>
                </Col>
            </Row>

        </div>
    );
}