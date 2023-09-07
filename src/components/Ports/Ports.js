import React, { useState, useEffect } from "react";
import "./index.css";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const redImg = "./Port-2.png";
const greenImg = "./Port-4.png";
const connector = "./Connectors.png";

const Ports = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading state as true

  useEffect(() => {
    const fetchData = async () => {
      const firebaseConfig = {
        // Your Firebase configuration
        apiKey: "AIzaSyDwxsoUM_xKNz2BtDPWhQ5_HeKM2gxSIsA",
        authDomain: "productx-a6360.firebaseapp.com",
        databaseURL: "https://productx-a6360-default-rtdb.firebaseio.com/",
        projectId: "productx-a6360",
        storageBucket: "productx-a6360.appspot.com",
        messagingSenderId: "661067053820",
        appId: "1:661067053820:web:150fdb7a48b4fbb3af7579",
      };
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

      const snapshot = await firebase.database().ref("/Sheet1").once("value");
      const fetchedData = snapshot.val();
      setData(fetchedData);
      setLoading(false); // Set loading to false when data is fetched
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Pass an empty dependency array to ensure it runs only once when the component mounts

  const renderImages = (section, images) => {
    if (loading) {
      // Return a loading animation while data is being fetched
      return (
        <div className="loading-spinner">
          <p>Loading...</p>
          {/* You can use a loading spinner or any other loading animation here */}
        </div>
      );
    }

    // Render images when data is available
    if (!data) {
      return (
        <div className="no-data">
          <p>No data available</p>
        </div>
      );
    }

    // Your existing code for rendering images
    const ports = Object.keys(data);
    // ... (rest of your rendering logic)
    let startIdx, endIdx;
    if (section === 0) {
      startIdx = 0;
      endIdx = Math.min(images, ports.length);
    } else if (section === 1) {
      startIdx = images;
      endIdx = Math.min(2 * images, ports.length);
    } else if (section === 2) {
      startIdx = 2 * images;
      endIdx = Math.min(2 * images + 4, ports.length);
    } else {
      startIdx = 0;
      endIdx = 0;
    }

    return ports.slice(startIdx, endIdx).map((port, index) => {
      const status = data[port].Status;

      return (
        <>
          <img
            key={port}
            src={status === "connected" ? greenImg : redImg}
            alt={status}
            style={{ width: "30px", height: "30px", paddingRight: "5px" }}
          />
        </>
      );
    });
  };

  return (
    <div>
      <h2>
        Ports | <span>view ports on this switch</span>
      </h2>
      <div className="body-container">
        <div className="display-ports ports-display-container">
          <div>
            <img
              src={connector}
              alt="connect1"
              style={{ width: "60px", height: "30px" }}
            />
            <img
              src={connector}
              alt="connect2"
              style={{ width: "60px", height: "30px" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <p className="port-1">{renderImages(0, 12)}</p>
            <p className="port-2">{renderImages(1, 12)}</p>
          </div>
          <p className="port-3">{renderImages(2, 4)}</p>
        </div>
      </div>
    </div>
  );
};

export default Ports;
