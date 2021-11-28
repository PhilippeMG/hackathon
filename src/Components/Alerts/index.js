import React, { useContext } from 'react';
import { Alert, Button, Space } from 'antd';
import Esp32Context from '../../Provider/ESP32';


export default function ConfirmationAlert({ setAlerta, sector, date }) {

    const { clickBeepAxios, activarRele, desactivarRele, reles } = useContext(Esp32Context);
    const text = "Se ha detectado una anomalia en el sector " + sector + " el: " + date

    function cancelarAlerta() {
        // setAlerta(false);
    }

    function confirmar() {
        clickBeepAxios();
        // setAlerta(false);

        // activarRele()
        // console.log('reles', reles)

        if (reles[sector.toString()]) {
            desactivarRele(sector)
        } else {
            activarRele(sector)
        }
    }

    return (
        <>



            <Alert
                message="Anomalia detectada"
                description={text}
                type="warning"
                action={
                    <Space direction="horizontal">
                        <Button size="small" type="primary" onClick={confirmar}>
                            Realizar acción
                        </Button>
                        {/* <Button size="small" danger onClick={cancelarAlerta} type="ghost">
                            Ignorar
                        </Button> */}
                    </Space>
                }
                closable

            />
        </>


    )
}
