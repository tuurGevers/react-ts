import React from 'react';
import {Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from "@mui/material"

const MuiCard = () => {
    return (
        <Box width="300px">
            <Card>
                <CardMedia
                component="img"
                height="140px"
                image="https://source.unsplash.com/random"
                alt="random image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"> react</Typography>
                    <Typography variant="body2" color="text.secondary">
                        Line 9:8: 'MuiSlider' is defined but never used @typescript-eslint/no-unused-vars
                        Line 10:8: 'RgbSlider' is defined but never used @typescript-eslint/no-unused-vars
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">learn more...</Button>
                </CardActions>
            </Card>

        </Box>
    );
};

export default MuiCard;