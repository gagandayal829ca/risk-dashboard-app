import React, { useState, useEffect, use } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const LiveChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Open Risks",
        data: [],
        fill: false,
        borderColor: "#f87171",
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString();
      const newRiskValue = Math.floor(100 + Math.random() * 20);

      setChartData((prev) => {
        const newLabel = [...prev.labels.slice(-9), now];
        const newDataset = [...prev.datasets[0].data.slice(-9), newRiskValue];

        return {
          ...prev,
          labels: newLabel,
          datasets: [{ ...prev.datasets[0].data, data: newDataset }],
        };
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginTop: 40 }}>
      <h3>📈 Live Open Risk Count</h3>
      <Line data={chartData} />
    </div>
  );
};

export default LiveChart;
