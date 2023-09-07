import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const logoImg = "/logo2.png";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <div className="logo-container">
        <Link to="/">
          <img src={logoImg} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="conatiner-1">
        <div>
          <div
            className={isDropdownVisible ? "navbar-active" : "navbar"}
            onClick={toggleDropdown}
          >
            <i
              class="fa fa-circle"
              style={{ fontSize: "12px", marginRight: "8px", color: "#0062BF" }}
            ></i>
            <span className="model-number-dropdown">Z9002-26-18-2888</span>
            <i
              class="fa fa-chevron-down"
              style={{ fontSize: "12px", marginLeft: "5px" }}
            ></i>
          </div>
          {isDropdownVisible && (
            <nav>
              <ul className="nav-menu-items">
                <li className="item-1">
                  Z9002-26ATK -{" "}
                  <span className="item-1-span">80:6z:bf:kk:at:26:00</span>
                </li>
                <li className="item-2">ADDRESS</li>
                <hr />
                <li className="item-3">
                  LAN IP - <span className="item-3-span">26.02.2027</span>(via
                  DHP)
                </li>
                <li className="item-3">
                  PUBLIC IP - <span className="item-3-span">10.55.2757</span>
                  (via DHP)
                </li>
                <li className="item-3">
                  GATEWAY - <span className="item-3-span">02.12.2027</span>
                </li>
                <hr />
                <li className="item-3">SERIAL NUMBER:</li>
                <li className="item-3-span item-4-span ">Z9002JIOOPL77</li>
                <hr />
                <li className="item-3">FIRMWARE:</li>
                <li className="item-3-span item-4-span ">
                  Current version: IOS ZX 02.6.7
                </li>
              </ul>
            </nav>
          )}
        </div>
        <ul className="items-container">
          <li>
            <Link className="link-nav" to="/ports">
              PORTS
            </Link>
          </li>
          <li>
            <Link className="link-nav" to="/summary">
              SUMMARY
            </Link>
          </li>
          <li>
            <Link className="link-nav" to="/location">
              LOCATION
            </Link>
          </li>
          <li>
            <Link className="link-nav" to="/tools">
              TOOLS
            </Link>
          </li>
        </ul>
      </div>
    </>
    // <div className="container">
    //   <div className="dropdown-align">
    //     <div className="drop-down" onClick={toggleDropdown}>
    //       <i
    //         class="fa fa-circle"
    //         style={{ fontSize: "12px", marginRight: "8px", color: "#0062BF" }}
    //       ></i>
    //       Z9002-26-18-2888
    //       <i
    //         class="fa fa-chevron-down"
    //         style={{ fontSize: "12px", marginLeft: "5px" }}
    //       ></i>
    //     </div>
    //     {isDropdownVisible && (
    //       <div className="dropdown-content">
    //         {/* Add your dropdown content here */}
    //         <ul className="dropdown-content-container">
    //           <li>Option 1</li>
    //           <li>Option 2</li>
    //           <li>Option 3</li>
    //         </ul>
    //       </div>
    //     )}
    //   </div>
    //   <Tabs className="tabs-container">
    //     <TabList className="tabs-list-container">
    //       <Tab>Summary</Tab>
    //       <Tab>Ports</Tab>
    //       <Tab>Location</Tab>
    //       <Tab>Tools</Tab>
    //     </TabList>
    //     {/* <TabPanel>
    //       <h2>Summary written here...</h2>
    //     </TabPanel>
    //     <TabPanel>
    //       <h2>Ports Data mentioned...</h2>
    //     </TabPanel>
    //     <TabPanel>
    //       <h2>Location of the switch is here...</h2>
    //     </TabPanel>
    //     <TabPanel>
    //       <h2>Other Tools are mentioned here...</h2>
    //     </TabPanel> */}
    //   </Tabs>
    // </div>
  );
};

export default Navbar;
