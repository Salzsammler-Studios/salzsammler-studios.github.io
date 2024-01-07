import { Col, Row } from "antd";
import { useMediaQuery } from "react-responsive";

import React from "react";
import Typography from "antd/es/typography/Typography";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Link from "antd/es/typography/Link";

const Homepage = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 810px)" });
    return <div className={"MainPage"}>
        <div className="overlay">
            {isMobile ? (<><Row style={{ height: "5rem" }}></Row>
                <Row align={"middle"} justify={"center"}>
                    <Col span={14}>
                        <Typography>
                            <h2 style={{ marginBottom: "-5rem" }}>Interaktive Installation</h2>
                            <h1>Salzsammler</h1>
                            <h4 style={{ marginTop: "-1rem" }}>
                                Salzsammler Studios fokussiert sich auf Innovationen im Bereich der Extended Reality, um didaktisch wertvolle Informationen interaktiv und spielbar erfahrbar zu machen.
                            </h4>
                            <Link href="/"><h4 style={{
                                marginTop: "0", textDecoration: "underline",
                                textUnderlineOffset: "0.3vw", color: "#A74D4A"
                            }}>Mehr erfahren</h4></Link>
                        </Typography>
                    </Col>
                    <Col span={1}></Col>
                </Row></>) :
                (<><Row style={{ height: "22rem" }}></Row>
                    <Row align={"middle"} justify={"center"}>
                        <Col span={13}></Col>
                        <Col span={10}>
                            <Typography>
                                <h2 style={{ marginBottom: "-5rem" }}>Interaktive Installation</h2>
                                <h1>Salzsammler</h1>
                                <h4 style={{ marginTop: "-1rem" }}>
                                    Salzsammler Studios fokussiert sich auf Innovationen im Bereich der Extended Reality, um didaktisch wertvolle Informationen interaktiv und spielbar erfahrbar zu machen.
                                </h4>
                                <Link href="/"><h4 style={{
                                    marginTop: "0", textDecoration: "underline",
                                    textUnderlineOffset: "0.3vw", color: "#A74D4A"
                                }}>Mehr erfahren</h4></Link>
                            </Typography>
                        </Col>
                        <Col span={1}></Col>
                    </Row></>
                )}
        </div>
    </div>
}

export default Homepage;