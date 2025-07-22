import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

// Define fixed category colors
const COLORS = {
  Travel: "#007bff",
  Groceries: "#f4b6c2",
  "Food & Drink": "#f79d00",
  Health: "#28a745",
};

// Category order for consistent legend and chart display
const CATEGORY_ORDER = ["Travel", "Groceries", "Food & Drink", "Health"];

const Chart = ({ expenses }) => {
  // 1. Aggregate by category for Pie chart
  const categoryTotals = expenses.reduce((acc, { category, amount }) => {
    acc[category] = (acc[category] || 0) + amount;
    return acc;
  }, {});

  const pieData = CATEGORY_ORDER.map((cat) => ({
    name: cat,
    value: Number(categoryTotals[cat]) || 0,
  }));
  console.log("pie chart data");
  console.log(pieData);

  // 2. Aggregate by month for Bar chart
  const monthlyTotals = {};
  expenses.forEach(({ date, amount }) => {
    const month = new Date(date).toLocaleString("default", { month: "short" });
    monthlyTotals[month] = (monthlyTotals[month] || 0) + Number(amount);
  });

  const barData = Object.entries(monthlyTotals).map(([month, amount]) => ({
    name: month,
    amount,
  }));

  return (
    <div
      className="chart-container"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "2rem",
        flexWrap: "wrap",
      }}
    >
      {/* Legend */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <h3 style={{ fontWeight: "bold" }}>Expense Chart</h3>
        {CATEGORY_ORDER.map((cat) => (
          <div key={cat} style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: COLORS[cat],
                marginRight: 8,
              }}
            ></div>
            <span>{cat}</span>
          </div>
        ))}
      </div>

      {/* Donut (Pie) Chart */}
      <div style={{ position: "relative", width: 250, height: 250 }}>
        <PieChart width={250} height={250}>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={3}
            isAnimationActive={false}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
            ))}
            {/* Center Label */}
            <Label
              value="All"
              position="center"
              style={{ fill: "#333", fontSize: 16 }}
            />
          </Pie>
        </PieChart>
      </div>

      {/* Bar Chart */}
      <div style={{ width: 250, height: 250 }}>
        <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
          Expenses Tracker
        </h3>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#007bff" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
