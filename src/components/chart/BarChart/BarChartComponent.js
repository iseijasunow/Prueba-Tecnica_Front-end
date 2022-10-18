import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
  
export const BarChartComponent = ({data}) => {

  let users = data.map((i) => {
    return {...i, login: i.login.slice(0,4)}
  })
  
  return (
    <BarChart width={600} height={400} data={users}>
      <Bar dataKey="followers" fill="gray" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="login" />
      <YAxis />
    </BarChart>
  );
}