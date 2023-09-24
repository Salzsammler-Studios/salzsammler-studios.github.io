import {Col, Layout, Row} from "antd";
import image from "../assets/salzsammler-logo-icon.png";
import NavBar from "./navbar";
import React from "react";
import {Outlet} from "react-router-dom";
import {Content} from "antd/es/layout/layout";

import "../App.css"

const BaseLayout = () => {
    return (
        <Layout className={"MainPage"}>
            <Row style={{margin: "2vw"}}>
                <Col span={4}>
                    <img src={image} width={"20%"} alt={"Salzsammler Logo"}/>
                </Col>
                <Col span={12}><NavBar/>
                </Col>
                <Col span={6}></Col>
            </Row>
            <Content><Outlet/></Content>
            <div>Footer</div>
        </Layout>
    )
};

export default BaseLayout;