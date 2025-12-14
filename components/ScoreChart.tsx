import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { QUESTIONS } from '../constants';

interface ScoreChartProps {
  data: {
    r: number;
    s: number;
    c: number;
    g: number;
    sw: number;
    lw: number;
    l: number;
  };
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-md rounded text-sm font-mono text-slate-700">
        <span className="font-bold">{data.name}</span>: {data.value.toFixed(1)}分
      </div>
    );
  }
  return null;
};

const ScoreChart: React.FC<ScoreChartProps> = ({ data }) => {
  const chartData = [
    { name: '阅读', value: data.r, color: QUESTIONS.reading.color },
    { name: '七选五', value: data.s, color: QUESTIONS.seven.color },
    { name: '完形', value: data.c, color: QUESTIONS.cloze.color },
    { name: '语法', value: data.g, color: QUESTIONS.grammar.color },
    { name: '应用文', value: data.sw, color: QUESTIONS.shortWriting.color },
    { name: '读后续写', value: data.lw, color: QUESTIONS.longWriting.color },
    { name: '听说', value: data.l, color: QUESTIONS.listening.color },
  ];

  return (
    <div className="h-64 relative w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={0}
            dataKey="value"
            stroke="none"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            layout="vertical" 
            verticalAlign="middle" 
            align="right"
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: '11px', fontFamily: "'Microsoft YaHei', sans-serif", color: '#666' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreChart;