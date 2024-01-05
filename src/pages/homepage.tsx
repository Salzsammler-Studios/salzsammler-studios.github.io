import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

import React from "react";

const Homepage = () => {
    return <div className={"MainPage"}>
        <div className="overlay" />
        <Row style={{ height: "12rem" }}></Row>
        <Row align={"middle"}>
            <Col span={13}></Col>
            <Col span={10}>
                <Row>
                    <Col><h2 style={{ marginBottom: "0" }}>Interaktive Installationen</h2></Col>
                </Row>
                <Row>
                    <Col><h1 style={{ marginTop: "-15pt", marginBottom: "-10pt", marginLeft: "-5pt" }}>
                        Salzsammler</h1></Col>
                </Row>
                <Row>
                    <Col><h3 style={{ marginTop: "0pt", width: "85%", lineHeight: '1.5rem' }}>Salzsammler Studios fokussiert sich auf Innovationen im Bereich der Extended Reality, um didaktisch wertvolle Informationen interaktiv und spielbar erfahrbar zu machen.</h3></Col>
                </Row>
                <Row>
                    <Col><a href={"/"} style={{
                        marginTop: "0pt", textDecoration: "underline",
                        textUnderlineOffset: "0.3vw"
                    }}>Mehr</a></Col>
                </Row>
            </Col>
        </Row>
    </div>
}

export default Homepage;