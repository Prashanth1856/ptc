import React from "react";
import "./index.css";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Connectivity = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className="align-heading">
        <h2>Device Data:</h2>
        <span>for the last day</span>
      </div>
      <p className="connectivity-text">Connectivity:</p>
      <div className="progress">
        <div className="progress-value"></div>
        <ul className="timer-container">
          <li>04:00</li>
          <li>08:00</li>
          <li>12:00</li>
          <li>16:00</li>
          <li>20:00</li>
          <li>00:00</li>
        </ul>
      </div>
    </div>
  );
};

export default Connectivity;
