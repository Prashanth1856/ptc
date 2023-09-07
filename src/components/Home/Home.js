import React from "react";
import Ports from "../Ports/Ports";
import Connectivity from "../Connectivity/Connectivity";
import ClientUsage from "../ClientUsage/ClientUsage";

const Home = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "#f3f3f3" }}>
      <Ports />
      <hr className="horizontal-rule" />
      <Connectivity />
      <ClientUsage />
    </div>
  );
};

export default Home;
