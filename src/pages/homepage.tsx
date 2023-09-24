import {Col, Row} from "antd";

import React from "react";

const Homepage = () => {
    return <div className={"MainPage"}>
        <Row style={{height: "100pt"}}></Row>
        <Row align={"middle"}>
            <Col span={2}></Col>
            <Col span={10}>
                <Row>
                    <Col><h2 style={{marginBottom: "0"}}>Interactive Installations</h2></Col>
                </Row>
                <Row>
                    <Col><h1 style={{marginTop: "-10pt", marginBottom: "-30pt", marginLeft: "-5pt"}}>
                        <strong>Salzsammler</strong></h1></Col>
                </Row>
                <Row>
                    <Col><h1 style={{marginTop: "0", marginLeft: "-5pt", marginBottom: "0pt"}}>
                        <strong>Studios</strong></h1></Col>
                </Row>
                <Row>
                    <Col><a href={"/"} style={{marginTop: "0pt"}}>LEARN MORE</a></Col>
                </Row>
            </Col>
        </Row>
        <Row style={{height: "500pt"}}></Row>
    </div>
}

export default Homepage;