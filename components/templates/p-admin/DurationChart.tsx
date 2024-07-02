"use client";
import React from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function DurationChart() {
  const startDataDark = [
    {
      duration: "1 اشتراک",
      value: 2,
      color: "#b91c1c",
    },
    {
      duration: "2 اشتراک",
      value: 4,
      color: "#c2410c",
    },
    {
      duration: "3 اشتراک",
      value: 2,
      color: "#a16207",
    },
    {
      duration: "4 اشتراک",
      value: 1,
      color: "#4d7c0f",
    },
    {
      duration: "5 اشتراک",
      value: 3,
      color: "#15803d",
    },
    {
      duration: "6-12 اشتراک",
      value: 7,
      color: "#0f766e",
    },
    {
      duration: "20-13 اشتراک",
      value: 3,
      color: "#1d4ed8",
    },
    {
      duration: "+21 اشتراک",
      value: 2,
      color: "#7e22ce",
    },
  ];

  return (
    <div className="bg-namavaBlack  rounded-md border border-gray-800 shadow py-6 px-8">
      <h2 className="text-xl">تعداد خرید اشتراک</h2>
      <ResponsiveContainer height={267}>
        <PieChart>
          <Pie
            data={startDataDark}
            dataKey="value"
            nameKey="duration"
            paddingAngle={2}
            cx="40%"
            cy="50%"
            outerRadius={110}
            innerRadius={85}
          >
            {startDataDark.map((entry) => (
              <Cell
                key={entry.duration}
                fill={entry.color}
                stroke={entry.color}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend
            verticalAlign="middle"
            layout="horizontal"
            align="right"
            width={135}
            iconSize={12}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DurationChart;
