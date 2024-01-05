import React, {useState} from "react";
import {Menu, MenuProps} from "antd";
import {Link} from "react-router-dom";

import "./navbar.css"

function NavBar() {
    const [current, setCurrent] = useState('home');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    return (
        <Menu className={"Header"} onClick={onClick}
              mode={"horizontal"}
              selectedKeys={[current]}
              style={{borderBottom: "none !important"}}>
            <Menu.Item key="home">
                <Link to="/">
                    <span className="nav-text" style={{fontSize: "1.5vw", opacity: current === "home" ? 1 : 0.5}}>Home</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="about_us">
                <Link to="/about_us">
                    <span className="nav-text" style={{fontSize: "1.5vw", opacity: current === "about_us" ? 1 : 0.5}}>About Us</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="project">
                <Link to="/project">
                    <span className="nav-text" style={{fontSize: "1.5vw", opacity: current === "project" ? 1 : 0.5}}>Project</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="gallery">
                <Link to="/gallery">
                    <span className="nav-text" style={{fontSize: "1.5vw", opacity: current === "gallery" ? 1 : 0.5}}>Gallery</span>
                </Link>
            </Menu.Item>
        </Menu>
    );
}

export default NavBar;