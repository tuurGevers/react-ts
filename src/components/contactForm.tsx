import React, {useState} from 'react';
import {Button, Card, CardContent, Grid, TextareaAutosize, TextField, Typography} from "@mui/material";

const ContactForm = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSubmit = () => {
        if (firstName != "" && lastName != "" && email.includes("@") && message != "") {
            alert(`${firstName} ${lastName} ${email} ${message}`)
        }
    }
    return (
        <Grid container>
            <Grid item xs={12}>
                <Card className={"contactform"}>
                    <form>
                        <CardContent>
                            <Typography fontWeight={10}>Contact Us</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField required label="First Name" value={firstName}
                                               onChange={e => setFirstName(e.target.value)} fullWidth
                                               error={!firstName}

                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField required label="Last Name" value={lastName}
                                               onChange={e => setLastName(e.target.value)} fullWidth
                                               error={!lastName}/>

                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required label="Email" value={email}
                                               onChange={e => setEmail(e.target.value)} type="email"
                                               fullWidth error={!email.includes("@")}/>

                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required
                                               label="message"
                                               multiline
                                               rows={4}
                                               sx={{width: "100%"}}
                                               value={message}
                                               onChange={e => setMessage(e.target.value)}
                                               error={!message}

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" fullWidth
                                            onClick={handleSubmit}>Submit</Button>
                                </Grid>


                            </Grid>
                        </CardContent>
                    </form>
                </Card>
            </Grid>
        </Grid>


    );
};

export default ContactForm;