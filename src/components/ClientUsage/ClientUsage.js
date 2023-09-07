import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
} from "chart.js";
import "./index.css";
Chart.register(LinearScale, CategoryScale, PointElement, LineElement);

const ClientUsage = () => {
  const data = {
    labels: [
      "1 Sep 2023",
      "2 Sep 2023",
      "6 Sep 2023",
      "10 Sep 2023",
      "14 Sep 2023",
      "18 Sep 2023",
      "22 Sep 2023",
    ],
    datasets: [
      {
        data: [30, 90, 30, 60, 110, 90, 45, 75, 34, 43, 90, 120],
        // fill: true,
        // backgroundColor: "orange",
        // backgroundColor: "linear-gradient(#0062BF, #ffffff)",
        borderColor: "#0062BF",
        pointBackgroundColor: "#0062BF",
        pointBorderColor: "#0062BF",
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 120,
        ticks: {
          stepSize: 30,
          callback: (value) => value + "Kb/s",
        },
      },
    },
  };

  return (
    <div>
      <p className="client-usage-header">Client Usage:</p>
      <div className="display-clientusage">
        <Line
          height={"300"}
          width={"1800"}
          data={data}
          options={options}
          style={{ padding: "20px" }}
        />
      </div>
    </div>
  );
};

export default ClientUsage;
