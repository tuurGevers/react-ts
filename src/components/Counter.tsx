import {Stack, IconButton, Typography, Grid} from "@mui/material"
import {useState} from "react";
import Add from "@mui/icons-material/Add"
import Remove from "@mui/icons-material/Remove"


const Counter = () => {
    const [count, setCount] = useState(0);
    return (

        <Stack>
            <Grid container justifyContent="center">
            <Typography variant="h4">{count}</Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Stack spacing={2} direction="row">

                    <IconButton size="large" className="counter-button" onClick={() => setCount(count - 1)}>
                        <Remove/></IconButton>
                    <IconButton size="large" className="counter-button" onClick={() => setCount(count + 1)}
                    ><Add/></IconButton>

                </Stack>
            </Grid>

        </Stack>


    );
};

export default Counter;