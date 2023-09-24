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
              selectedKeys={[current]}>
            <Menu.Item key="home">
                <Link to="/">
                    <span className="nav-text">Home</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="about_us">
                <Link to="/about_us">
                    <span className="nav-text">About Us</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="project">
                <Link to="/project">
                    <span className="nav-text">Project</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="gallery">
                <Link to="/gallery">
                    <span className="nav-text">Gallery</span>
                </Link>
            </Menu.Item>
        </Menu>
    );
}

export default NavBar;