
// import { div } from 'framer-motion/m';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { time: '10am', sales: 60 },
  { time: '11am', sales: 35 },
  { time: '12am', sales: 55 },
  { time: '01am', sales: 38 },
  { time: '02am', sales: 56 },
  { time: '03am', sales: 17 },
  { time: '04am', sales: 37 },
  { time: '05am', sales: 64 },
  { time: '06am', sales: 68 },
  { time: '07am', sales: 75 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip"  style={{ backgroundColor: '#000000', padding: '10px', borderRadius: '5px', color: '#fff' }}>
        <p>{`Sales: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const Chart = () => {
  return (
    <div className='pb-8 pt-2  bg-white shadow-xl  rounded-xl  '>
         <div className='flex justify-between pr-4 py-2'>
        <p className='px-6 font-medium'>Reports</p>

      </div>
    <div style={{
        // background: rgb(254,249,249);
        background: "linear-gradient(93deg, rgba(254,249,249,1) 41%, rgba(250,248,253,1) 100%)"

    }} className=' pr-4 rounded-xl h-72'>
    <ResponsiveContainer width="100%" height={288}>
     
      <LineChart data={data}>
        <defs>
          <linearGradient id="colorSales" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#EF7258" />
            <stop offset="50%" stopColor="#B463A0" />
            <stop offset="100%" stopColor="#7D54E3" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="time" />
        <YAxis domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="sales" stroke="url(#colorSales)" strokeWidth={5} dot={{ r: 6, fill: '#fff', stroke: '#8a2be2', strokeWidth: 2 }} />
      </LineChart>
    </ResponsiveContainer>
    </div>
    </div>
  );
};

export default Chart;
