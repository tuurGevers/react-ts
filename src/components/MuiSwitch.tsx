import React, {useState} from 'react';
import {Box, FormControlLabel, Switch} from "@mui/material"
import Brightness6Icon from '@mui/icons-material/Brightness6';

const MuiSwitch = () => {
    const [dark, setDark] = useState(false);
    return (
        <Box className={dark?"dark":""}>
            <FormControlLabel label={<Brightness6Icon/>} control={<Switch/>} onChange={() => setDark(!dark)}/>
        </Box>
    )
}

export default MuiSwitch;