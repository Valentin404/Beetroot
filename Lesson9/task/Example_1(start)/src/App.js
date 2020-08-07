import React from "react";
import Message1 from "./components/Message1";
import Message2 from "./components/Message2";


localStorage.user = JSON.stringify({name:'Bill', status: 'admin'})

const App = () => (
    <div className="container">
        <h1>Hello React</h1>
        <Message1 />
        <Message2 />
    </div>
);

export default App;
