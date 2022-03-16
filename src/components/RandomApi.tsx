import React, {useEffect, useState} from 'react';
import {Box, Card, CardContent, CardMedia, Grid, MenuItem, Paper, TextField, Typography} from "@mui/material";
import Test from "./Test";
import Refresh from "./Refresh";


const RandomApi = () => {
    const [data, setData] = useState([])
    const [count, setCount] = useState<number>(12)

    const fetchData = () => {
        fetch(`https://randomuser.me/api/?results=${count}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                setData(data.results)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Box sx={{textAlign: "left", display:"flex", paddingBottom:"5px"}}>

                <Paper sx={{width:"330px", marginRight:"25px", }} elevation={8}>
                    <TextField label={"amount"} select fullWidth color="info"
                               onChange={(
                                   e: React.ChangeEvent<HTMLInputElement>) =>{setCount(parseInt(e.target.value))}}>

                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={20}>20</MenuItem></TextField>
                </Paper>

                <Refresh fn={fetchData}/>

            </Box>
            <Grid container>

                {data.map((data: any) => {
                    return (
                        <Grid item xs={12} md={6} lg={4}>

                            <Test firstName={data.name.first}
                                  lastName={data.name.last}
                                  img={data.picture.large}
                                  username={data.login.username}
                                  password={data.login.password}
                                  dob={data.dob.date}
                                  phone={data.phone}
                                  email={data.email}
                            />

                        </Grid>)
                })
                }
            </Grid>
        </>

);
};

export default RandomApi;