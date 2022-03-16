import React from 'react';
import {IconButton} from "@mui/material";
import CachedIcon from '@mui/icons-material/Cached';

type props = {
    fn: any;
}
const Refresh = (props:props) => {
    return (
        <IconButton onClick={props.fn}>
            <CachedIcon/>
        </IconButton>
    );
};

export default Refresh;