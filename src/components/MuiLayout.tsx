import React from 'react';
import {Box, Grid, Paper} from "@mui/material"

const MuiLayout = () => {
    return (
        <Paper sx={{padding:"32px",}} elevation={10}>
            <Grid container my={4} spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor="primary.light" p={2}>
                        item
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor="primary.light" p={2}>
                        item
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor="primary.light" p={2}>
                        item
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor="primary.light" p={2}>
                        item
                    </Box>
                </Grid>

            </Grid>


        </Paper>

    );
};

export default MuiLayout;