import React, {useState} from 'react';
import {Slider, Typography} from "@mui/material"
import {buildTimeValue} from "@testing-library/user-event/dist/utils";


const MuiSlider = () => {
    const [brightness, setBrightness] = useState<number>(0);
    let style = {
        backgroundColor : `rgb(20,20,20,${brightness/100})`
    }

    const handleChange = (event: Event, value: number | number[])=>{
        setBrightness(typeof value === "number"? value:value[0])

    }
    return (
        <div style={style}>
            <Typography>{brightness}</Typography>
            <Slider
                value={brightness}
            onChange={(e, value) =>handleChange(e,value)}

            />

        </div>
    );
};

export default MuiSlider;