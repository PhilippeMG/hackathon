import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/charts';

import { uniq, findIndex } from '@antv/util';

export const LineStats = params => {
    const [datga, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
        console.log("DATOS: ", datga);

    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };

    const COLOR_PLATE_10 = [
        '#5B8FF9',
        '#5AD8A6',
        '#5D7092',
        '#F6BD16',
        '#E8684A',
        '#6DC8EC',
        '#9270CA',
        '#FF9D4D',
        '#269A99',
        '#FF99C3',
    ];
    const data = params.datos;

    const config = {
        data,
        xField: params.x,
        yField: params.y,
        seriesField: 'category',
        yAxis: {
            label: {
                // 数值格式化为千分位
                formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
            },
        },
        color: COLOR_PLATE_10,
        point: {
            shape: ({ category }) => {
                return category === 'Gas fuel' ? 'square' : 'circle';
            },
            style: ({ year }) => {
                return {
                    r: Number(year) % 4 ? 0 : 3, // 4 个数据示一个点标记
                };
            },
        },
    };

    return (<Line {...config} />);
};

