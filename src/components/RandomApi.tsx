import React, {useEffect, useState} from 'react';
import {Box, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import Test from "./Test";


const RandomApi = () => {
    const [data, setData] = useState([])

    const fetchData = () => {
        fetch("https://randomuser.me/api/?results=12")
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
        <Grid container>
            {data.map((data: any) => {
                return (
                    <Grid item xs={12} sm={4} >

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
                );
            };

            export default RandomApi;