import React, {useState} from 'react';
import {Slider, Box, Typography, Button, ButtonGroup} from "@mui/material";
import rgbHex from 'rgb-hex';


const RgbSlider = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const [alpha, setAlpha] = useState(100);
    let style = {
        backgroundColor: `rgb(${red},${green},${blue},${alpha / 100})`,
        width: "auto",
        height: "300px",
        display: "flex",
        marginLeft: "35%",
        marginRight: "35%",
    }

    let rgb = `rgb(${red}, ${green}, ${blue}, ${alpha})`;

    const handleRed = (e: Event, value: number | number[]) => {
        setRed(typeof value === "number" ? value : value[0])

    }
    const handleGreen = (e: Event, value: number | number[]) => {
        setGreen(typeof value === "number" ? value : value[0])

    }
    const handleBlue = (e: Event, value: number | number[]) => {
        setBlue(typeof value === "number" ? value : value[0])

    }
    const handleAlpha = (e: Event, value: number | number[]) => {
        setAlpha(typeof value === "number" ? value : value[0])


    }
    return (
        <Box>

            <div style={style}/>

            <Box display="flex"
                 justifyContent="right">
                <ButtonGroup
                    variant="contained"
                    orientation="vertical"
                    aria-label="rgb/hex"
                >
                    <Button variant="contained" onClick={() => {navigator.clipboard.writeText(rgb)}}>
                        <Typography variant="h4">{rgb} </Typography>
                    </Button>

                    <Button variant="contained" onClick={() => {navigator.clipboard.writeText("#" +rgbHex(red, green, blue, alpha/100))}}>
                        <Typography variant="h4">#{rgbHex(red, green, blue, alpha/100)} </Typography>
                    </Button>
                </ButtonGroup>



            </Box>

            <Typography>{red}</Typography>
            <Slider
                aria-label="Small"
                valueLabelDisplay="auto"
                defaultValue={0}
                value={red}
                min={0}
                max={255}
                onChange={(e, value) => handleRed(e, value)}
            />
            <Typography>{green}</Typography>
            <Slider
                aria-label="Small"
                valueLabelDisplay="auto"
                defaultValue={0}
                value={green}
                min={0}
                max={255}
                onChange={(e, value) => handleGreen(e, value)}
            />
            <Typography>{blue}</Typography>
            <Slider
                aria-label="Small"
                valueLabelDisplay="auto"
                defaultValue={0}
                value={blue}
                min={0}
                max={255}
                onChange={(e, value) => handleBlue(e, value)}
            />
            <Typography>{alpha}</Typography>
            <Slider
                aria-label="Small"
                valueLabelDisplay="auto"
                defaultValue={100}
                value={alpha}
                min={0}
                max={100}
                onChange={(e, value) => handleAlpha(e, value)}
            />

        </Box>

    );
};

export default RgbSlider;