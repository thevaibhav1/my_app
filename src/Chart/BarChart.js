// BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "./BarChart.module.css";
const BarChart = ({ data }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Number of Queries",
        data: Object.values(data),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
        ],
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h2>Category Distribution</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
