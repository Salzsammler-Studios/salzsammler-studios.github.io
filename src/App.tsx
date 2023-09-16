import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Col, Divider, Progress, Row} from "antd";
import image from './assets/salzsammler-logo.png';

function App() {
    return (
        <div className="App">
            <Row>
                <Col>
                    <img src={image} height={500}/>
                </Col>
            </Row>
        </div>
    );
}

export default App;
