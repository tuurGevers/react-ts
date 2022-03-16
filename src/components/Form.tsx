import React, {useState} from 'react';
import {Box, Button, Card, CardActions, CardContent, Grid, Paper, TextField} from "@mui/material";

const Form = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const handleSubmit = () => {
        if (name != "" && email!="") {
            alert(`hello ${name}, your email is ${email}`);
            setError(false);
        } else {
            setError(true);
        }


    }
    return (
        <Box p={2}>
            <Paper elevation={8}>

                <Card>
                    <CardContent>
                        <TextField sx={{pb: 2}} label="name" value={name} onChange={e => setName(e.target.value)}
                                   required fullWidth error={error} color="primary"

                        />
                        <TextField label="email" value={email} onChange={e => setEmail(e.target.value)} required
                                   fullWidth error={error} helperText={error ? "you are missing a value" : ""} color="primary"
                        />
                    </CardContent>

                    <CardActions>
                        <Grid container justifyContent="center">
                            <Button size="small"
                                    onClick={handleSubmit}
                                    variant="contained"
                                    disableElevation
                            >Submit</Button>
                        </Grid>

                    </CardActions>


                </Card>


            </Paper>
        </Box>

    );
};

export default Form;