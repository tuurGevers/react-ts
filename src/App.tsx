import React from 'react';
import './App.css';
import {Greet} from "./components/Greet";
import {MuiTypography} from "./components/MuiTypography";
import MuiButton from "./components/MuiButton";
import {MuiTextField} from "./components/MuiTextField";
import Counter from "./components/Counter";
import {MuiSelect} from "./components/MuiSelect";
import MuiSlider from "./components/MuiSlider";
import RgbSlider from "./components/RgbSlider";

function App() {
    return (
        <div className="App">

            {/*
            <Greet name="tuur"/>
            <MuiTypography />
            <MuiTextField/>

            <MuiButton/>
            <MuiSelect/>
            <Counter/>
            <MuiSlider/>
            */}

            <RgbSlider/>






        </div>
    );
}

export default App;
