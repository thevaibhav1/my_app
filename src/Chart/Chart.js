import React, { useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import styles from "./Chart.module.css";

const Charts = ({ data }) => {
  const { category_distribution, response_times } = data;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLineChart, setSelectedLineChart] = useState(false);

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Function to handle line chart selection
  const handleLineChartSelect = () => {
    setSelectedLineChart(!selectedLineChart);
  };

  return (
    <>
      <h1>AI Data Visualization</h1>
      <div className={styles.chartscontainer}>
        {/* Dropdown menu to select category */}
        <select onChange={(e) => handleCategorySelect(e.target.value)}>
          <option value="">Select a category</option>
          {Object.keys(category_distribution).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Render BarChart component with selected category data */}
        {selectedCategory && (
          <BarChart
            data={{
              [selectedCategory]: category_distribution[selectedCategory],
            }}
          />
        )}

        {/* Dropdown menu to select line chart */}
        <select onChange={handleLineChartSelect}>
          <option value="false">Hide Line Chart</option>
          <option value="true">Show Line Chart</option>
        </select>

        {/* Render LineChart component based on user selection */}
        {selectedLineChart && <LineChart data={response_times} />}
      </div>
    </>
  );
};

export default Charts;
