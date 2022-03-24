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
import MuiSwitch from "./components/MuiSwitch";
import MuiLayout from "./components/MuiLayout";
import MuiCard from "./components/MuiCard";
import Form from "./components/Form";
import Json from "./components/Json";
import RandomApi from "./components/RandomApi";
import Test from "./components/Test";
import ContactForm from "./components/contactForm";

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
            <RgbSlider/>
            <MuiSwitch/>
            <MuiLayout/>
            <MuiCard/>
            <Form/>
            <Json/>
            <RandomApi/>

            */}

            <ContactForm/>













        </div>
    );
}

export default App;
