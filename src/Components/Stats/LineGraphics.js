import React from 'react';
//import 'antd/dist/antd.css';
import {Line } from '@ant-design/charts';

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
      <h3>{params.title}</h3>      
      <Line loading={params.loading} {...config} />
    </div>
  );
};
