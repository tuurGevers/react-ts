import React, {useState} from 'react';
import {Card, CardContent, CardHeader, Grid, Paper, Typography} from "@mui/material";

const Json = () => {
    let data = [
        {
            id: '1',
            setup: "What's the best thing about a Boolean?",
            punchline: "Even if you're wrong, you're only off by a bit"
        },
        {
            id: '2',
            setup: 'Why do programmers wear glasses?',
            punchline: 'Because they need to C#'
        }
    ]
    return (

        <Grid container spacing={3}>
            {data.map(({id, setup, punchline}) =>
                <Grid item xs={12} sm={6}>
                    <Paper sx={{p:".5em", bgcolor:"darkgrey"}}>
                        <Card elevation={8}>
                            <CardContent><Typography variant="h5">{setup}</Typography> <br/><Typography
                                variant="body1">{punchline}</Typography></CardContent>
                        </Card>
                    </Paper>

                </Grid>
            )}

        </Grid>


    );
};

export default Json;