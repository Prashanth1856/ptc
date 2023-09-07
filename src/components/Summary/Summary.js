import React from "react";
import "./index.css";
import Connectivity from "../Connectivity/Connectivity";
import ClientUsage from "../ClientUsage/ClientUsage";

const Summary = () => {
  return (
    <div className="summary-container">
      <Connectivity />
      <ClientUsage />
    </div>
  );
};

export default Summary;
