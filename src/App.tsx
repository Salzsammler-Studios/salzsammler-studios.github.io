import React, {useState} from 'react';
import './App.css';
import image from './assets/salzsammler-logo-icon.png';

import {Col, Layout, Menu, MenuProps, Row } from 'antd';

const {Content, Footer} = Layout;

const items: MenuProps['items'] = [
    {
        label: "Home",
        key: "home",
    },
    {
        label: "About us",
        key: "about_us",
    },
    {
        label: "Project",
        key: "project"
    },
    {
        label: "Gallery",
        key: "gallery",
    }
]

function App() {
    const [current, setCurrent] = useState('home');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Layout className={"MainPage"}>
            <Row style={{margin: "20px"}}>
                <Col span={4}>
                    <img src={image} height={"48px"} alt={"Salzsammler Logo"}/>
                </Col>
                <Col span={8}><Menu className={"Header"} onClick={onClick} mode={"horizontal"} items={items}
                                    selectedKeys={[current]}/></Col>
                <Col span={6}></Col>
            </Row>
            <Content>
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
                            <Col><h1 style={{marginTop: "0", marginLeft: "-5pt", marginBottom: "0pt"}}><strong>Studios</strong></h1></Col>
                        </Row>
                        <Row>
                            <Col><a style={{marginTop: "0pt"}}>LEARN MORE</a></Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{height: "500pt"}}></Row>
            </Content>
            <Footer></Footer>
        </Layout>
    );
}

export default App;
