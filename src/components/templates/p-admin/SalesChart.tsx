"use client";
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function SalesChart() {
  const colors = {
    totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
    extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
    text: "#e5e7eb",
    background: "#18212f",
  };

  const fakeData = [
    { label: "1 تیر", totalSales: 480, extrasSales: 20 },
    { label: "2 تیر", totalSales: 580, extrasSales: 100 },
    { label: "3 تیر", totalSales: 550, extrasSales: 150 },
    { label: "4 تیر", totalSales: 600, extrasSales: 50 },
    { label: "5 تیر", totalSales: 700, extrasSales: 150 },
    { label: "6 تیر", totalSales: 800, extrasSales: 150 },
    { label: "7 تیر", totalSales: 700, extrasSales: 200 },
    { label: "8 تیر", totalSales: 650, extrasSales: 200 },
    { label: "9 تیر", totalSales: 600, extrasSales: 300 },
    { label: "10 تیر", totalSales: 550, extrasSales: 100 },
    { label: "11 تیر", totalSales: 700, extrasSales: 100 },
    { label: "12 تیر", totalSales: 800, extrasSales: 200 },
    { label: "13 تیر", totalSales: 700, extrasSales: 100 },
    { label: "14 تیر", totalSales: 810, extrasSales: 50 },
    { label: "15 تیر", totalSales: 950, extrasSales: 250 },
    { label: "16 تیر", totalSales: 970, extrasSales: 100 },
    { label: "17 تیر", totalSales: 900, extrasSales: 200 },
    { label: "18 تیر", totalSales: 950, extrasSales: 300 },
    { label: "19 تیر", totalSales: 850, extrasSales: 200 },
    { label: "20 تیر", totalSales: 900, extrasSales: 100 },
    { label: "21 تیر", totalSales: 800, extrasSales: 300 },
    { label: "22 تیر", totalSales: 950, extrasSales: 200 },
    { label: "23 تیر", totalSales: 1100, extrasSales: 300 },
    { label: "24 تیر", totalSales: 1200, extrasSales: 400 },
    { label: "25 تیر", totalSales: 1250, extrasSales: 300 },
    { label: "26 تیر", totalSales: 1400, extrasSales: 450 },
    { label: "27 تیر", totalSales: 1500, extrasSales: 500 },
    { label: "28 تیر", totalSales: 1400, extrasSales: 600 },
    { label: "29 تیر", totalSales: 1450, extrasSales: 400 },
  ];

  const windowWidth: any = typeof window !== "undefined" && window.innerWidth;

  return (
    <div className="bg-namavaBlack mt-5 rounded-md border border-gray-800 pt-6 pb-3 pl-0 pr-6 md:px-6">
      <h2 className="text-base font-IranMedium md:text-xl mb-4">
        فروش از 1 تیر تا 31 تیر
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={fakeData}>
          <XAxis
            dataKey="label"
            tick={{
              fill: colors.text,
              fontSize: windowWidth <= 768 ? "12px" : "14px",
              fontFamily: "Dana",
            }}
          />
          <YAxis
            unit="ت"
            tick={{
              fill: colors.text,
              fontSize: windowWidth <= 768 ? "12px" : "16px",
              fontFamily: "Dana",
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: colors.background,
              fontSize: windowWidth <= 768 ? "12px" : "16px",
              fontFamily: "Dana",
            }}
          />

          <CartesianGrid strokeDasharray={3} />
          <Area
            type="monotone"
            dataKey="totalSales"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth="2"
            name="مقدار فروش"
            unit="تومان"
          />
          <Area
            type="monotone"
            dataKey="extrasSales"
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth="2"
            name="مقدار اضافی"
            unit="تومان"
          />

          <Legend
            verticalAlign="bottom"
            layout="horizontal"
            align="right"
            wrapperStyle={{ marginTop: "20px" }}
            iconType="circle"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
