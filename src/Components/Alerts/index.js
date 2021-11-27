import React, { useContext } from 'react';
import { Alert, Button, Space } from 'antd';
import Esp32Context from '../../Provider/ESP32';


export default function ConfirmationAlert({ setAlerta }) {
    const { clickBeepAxios } = useContext(Esp32Context);

    function cancelarAlerta() {
        setAlerta(false);
    }
    function confirmar() {
        setAlerta(false);
        clickBeepAxios();
    }

    return (


        <Alert
            message="Anomalia detectada"
            description="Se ha detectado una anomalia en el sector 3"
            type="warning"
            action={
                <Space direction="horizontal">
                    <Button size="small" type="primary" onClick={confirmar}>
                        Realizar acción
                    </Button>
                    <Button size="small" danger onClick={cancelarAlerta} type="ghost">
                        Ignorar
                    </Button>
                </Space>
            }

        />

    )
}
