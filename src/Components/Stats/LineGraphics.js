import React from 'react';
//import 'antd/dist/antd.css';
import { Line } from '@ant-design/charts';
import { Typography } from 'antd';
const { Title } = Typography;
export const LineGraphics = params => {
  const data = params.datos;


  const config = {
    data,
    title: {
      visible: true,
      text: params.title
    },

    height: 400,
    xField: params.x,
    yField: params.y,

    point: {
      size: 5,
      shape: 'diamond'
    },
    label: {
      style: {
        fill: '#aaa'
      }
    }
  };


  return (
    <div>
      <Title level={3}>{params.title}</Title>
      <Line loading={params.loading} {...config} />
    </div>
  );
};
