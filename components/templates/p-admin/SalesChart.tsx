"use client";
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
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
    { label: "1 فرور", totalSales: 480, extrasSales: 20 },
    { label: "2 فرور", totalSales: 580, extrasSales: 100 },
    { label: "3 فرور", totalSales: 550, extrasSales: 150 },
    { label: "4 فرور", totalSales: 600, extrasSales: 50 },
    { label: "5 فرور", totalSales: 700, extrasSales: 150 },
    { label: "6 فرور", totalSales: 800, extrasSales: 150 },
    { label: "7 فرور", totalSales: 700, extrasSales: 200 },
    { label: "8 فرور", totalSales: 650, extrasSales: 200 },
    { label: "9 فرور", totalSales: 600, extrasSales: 300 },
    { label: "10 فرور", totalSales: 550, extrasSales: 100 },
    { label: "11 فرور", totalSales: 700, extrasSales: 100 },
    { label: "12 فرور", totalSales: 800, extrasSales: 200 },
    { label: "13 فرور", totalSales: 700, extrasSales: 100 },
    { label: "14 فرور", totalSales: 810, extrasSales: 50 },
    { label: "15 فرور", totalSales: 950, extrasSales: 250 },
    { label: "16 فرور", totalSales: 970, extrasSales: 100 },
    { label: "17 فرور", totalSales: 900, extrasSales: 200 },
    { label: "18 فرور", totalSales: 950, extrasSales: 300 },
    { label: "19 فرور", totalSales: 850, extrasSales: 200 },
    { label: "20 فرور", totalSales: 900, extrasSales: 100 },
    { label: "21 فرور", totalSales: 800, extrasSales: 300 },
    { label: "22 فرور", totalSales: 950, extrasSales: 200 },
    { label: "23 فرور", totalSales: 1100, extrasSales: 300 },
    { label: "24 فرور", totalSales: 1200, extrasSales: 400 },
    { label: "25 فرور", totalSales: 1250, extrasSales: 300 },
    { label: "26 فرور", totalSales: 1400, extrasSales: 450 },
    { label: "27 فرور", totalSales: 1500, extrasSales: 500 },
    { label: "28 فرور", totalSales: 1400, extrasSales: 600 },
    { label: "29 فرور", totalSales: 1450, extrasSales: 400 },
  ];
  return (
    <div className="bg-namavaBlack mt-5 rounded-md border border-gray-800 py-6 px-6">
        <h2 className="text-xl mb-4">فروش از 1 فروردین تا 31 فروردین</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={fakeData}>
          <XAxis dataKey="label" tick={{ fill: colors.text }} />
          <YAxis unit="$" tick={{ fill: colors.text }} fontFamily="Iran" />
          <Tooltip  contentStyle={{ backgroundColor: colors.background }} />
          <CartesianGrid strokeDasharray={3} />
          <Area
            type="monotone"
            dataKey="totalSales"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth="2"
            name="مقدار فروش"
            unit="$"
          />
          <Area
            type="monotone"
            dataKey="extrasSales"
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth="2"
            name="مقدار اضافی"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
