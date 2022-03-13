import React from 'react';
import './App.css';
import {Greet} from "./components/Greet";
import {MuiTypography} from "./components/MuiTypography";
import MuiButton from "./components/MuiButton";
import {MuiTextField} from "./components/MuiTextField";

function App() {
    return (
        <div className="App">

            {/*<Greet name="tuur"/>
            <MuiTypography />
            <MuiButton/>
            */}

            <MuiTextField/>
        </div>
    );
}

export default App;
