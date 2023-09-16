import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Progress} from "antd";

function App() {
  return (
    <div className="App">
      <h3>This website is currently under construction.</h3>
      <Progress percent={10} status={"active"}/>
    </div>
  );
}

export default App;
