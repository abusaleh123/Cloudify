



import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Sale', value: 400 },
  { name: 'Distribute', value: 200 },
  { name: 'Return', value: 250 },
  { name: 'dis', value: 300 },
];

const COLORS = [  '#8884d8', '#FFFFFF', '#FF8042',  ' #FFBB28',];

const renderCustomLabel = () => {
  return (
    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" style={{ fontSize: '24px', fontWeight: 'bold' }}>
      80%
      <tspan x="50%" dy="1.2em" fontSize="16px" fontWeight="normal">Transactions</tspan>
    </text>
  );
};

const DonutChart = () => {
  return (
    <div className='py-6 px-4'> 

    <div className='flex'>
        <p className='font-medium'>Analytics</p>
    </div>
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          labelLine={false}
          label={renderCustomLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      
      </PieChart>
    
    </ResponsiveContainer>
    <div className='flex justify-between px-3'>
      <div className='flex gap-1 items-center'>
      <p className=" w-3 h-3 bg-[#7051F3] rounded-sm"></p>
      <p>Sale</p>
      </div>
      <div className='flex gap-1 items-center'>
      <p className=" w-3 h-3 bg-[#FFD66B] rounded-sm"></p>
      <p>Distribute</p>
      </div>
      <div className='flex gap-1 items-center'>
      <p className=" w-3 h-3 bg-[#FF8F6B] rounded-sm"></p>
      <p>Return</p>
      </div>
       

      </div>
    </div>
  );
};

export default DonutChart;
