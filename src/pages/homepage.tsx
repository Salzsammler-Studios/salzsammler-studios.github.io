import { Col, Row } from "antd";
import { useMediaQuery } from "react-responsive";

import React from "react";

const Homepage = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 810px)" });
    return <div className={"MainPage"}>
        <div className="overlay" />
        {isMobile ? (<><Row style={{ height: "5rem" }}></Row><Row align={"middle"} justify={"center"}>
            <Col span={10}>
                <Row>
                    <Col><h2 style={{ marginBottom: "-5rem" }}>Interaktive Installation</h2></Col>
                </Row>
                <Row>
                    <Col><h1 style={{marginLeft: "-0.3rem"}}>
                        Salzsammler</h1></Col>
                </Row>
                <Row>
                    <Col><h3 style={{ marginTop: "-0.8rem", width: "85%", lineHeight: '0.8rem' }}>Salzsammler Studios fokussiert sich auf Innovationen im Bereich der Extended Reality, um didaktisch wertvolle Informationen interaktiv und spielbar erfahrbar zu machen.</h3></Col>
                </Row>
                <Row>
                    <Col><a href={"/"} style={{
                        marginTop: "0", textDecoration: "underline",
                        textUnderlineOffset: "0.3vw"
                    }}>Mehr erfahren</a></Col>
                </Row>
            </Col>
            <Col span={1}></Col>
        </Row></>) :
            (<><Row style={{ height: "12rem" }}></Row><Row align={"middle"} justify={"center"}>
                <Col span={13}></Col>
                <Col span={10}>
                    <Row>
                        <Col><h2 style={{ marginBottom: "0" }}>Interaktive Installation</h2></Col>
                    </Row>
                    <Row>
                        <Col><h1 style={{ marginTop: "-1rem", marginBottom: "-0.8rem", marginLeft: "-0.3rem" }}>
                            Salzsammler</h1></Col>
                    </Row>
                    <Row>
                        <Col><h3 style={{ marginTop: "0pt", width: "85%", lineHeight: '1.5rem' }}>Salzsammler Studios fokussiert sich auf Innovationen im Bereich der Extended Reality, um didaktisch wertvolle Informationen interaktiv und spielbar erfahrbar zu machen.</h3></Col>
                    </Row>
                    <Row>
                        <Col><a href={"/"} style={{
                            marginTop: "0", textDecoration: "underline",
                            textUnderlineOffset: "0.3vw"
                        }}>Mehr erfahren</a></Col>
                    </Row>
                </Col>
                <Col span={1}></Col>
            </Row></>
            )}
    </div>
}

export default Homepage;