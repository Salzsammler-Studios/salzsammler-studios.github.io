import React from 'react';

import Homepage from "./pages/homepage";
import { ConfigProvider } from 'antd';


function App() {

    return (
        <ConfigProvider theme={{
            token: {
                fontFamily: "Poppins",
            }
        }}>
        <Homepage/>
        </ConfigProvider>
    );

}

export default App;
