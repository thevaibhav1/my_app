// LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import styles from "./LineChart.module.css";
const LineChart = ({ data }) => {
  const dailyLabels = data.day_wise.map((data) => data.date);
  const dailyData = data.day_wise.map((data) => data.average_time);
  const weeklyLabels = data.week_wise.map((data) => `Week ${data.week}`);
  const weeklyData = data.week_wise.map((data) => data.average_time);

  const chartData = {
    labels: dailyLabels.concat(weeklyLabels), // Concatenating daily and weekly labels
    datasets: [
      {
        label: "Daily Average Response Time",
        data: dailyData,
        fill: false,
        borderColor: "rgba(75, 192, 192, 0.5)",
      },
      {
        label: "Weekly Average Response Time",
        data: weeklyData,
        fill: false,
        borderColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h2>Response Times</h2>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
