import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Container } from "react-bootstrap";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { IoFilterOutline } from "react-icons/io5";
import "./Sidebar.css";

export default function SidebarMenu() {
  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      {/* <Button onClick={handleShow} id="side_btn">
        Filter after
      </Button> */}
      {/* <Offcanvas id="S" show={show} onHide={handleClose}> */}
      {/* <Offcanvas.Header closeButton /> */}
      <Offcanvas.Body>
        <div className="side-bar">
          <nav className={"sidebar" ? "nav-menu active" : "nav-menu"}>
            <IoFilterOutline id="filt_btn" />
            <span id="filters">Filter after</span>
            <ul className="nav-menu-items p-2" onClick={showSidebar}>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span id="side-filt">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </Offcanvas.Body>
      {/* </Offcanvas> */}
    </IconContext.Provider>
  );
}
