import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DualAxes } from '@ant-design/charts';


export const Dualaxes = params => {

    const data = params.datos;

    const config = {
        data: [data, data],
        xField: params.x,
        yField: [params.y, params.z],
        geometryOptions: [
            {
                geometry: 'column',
            },
            {
                geometry: 'line',
                lineStyle: {
                    lineWidth: 2,
                },
            },
        ],
    };

    return (<DualAxes {...config} />);
};

