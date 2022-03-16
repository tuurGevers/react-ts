import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Card, CardContent, CardMedia, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


type cardProps = {
    firstName: string,
    lastName: string;
    img: string;
    username: string;
    password: string;
    dob:string;
    phone:string;
    email:string;



}

const Test = (props: cardProps) => {
 let today = new Date();
 let birth =new Date(Date.parse(props.dob));
    return (
        <div className="card">
            <div className="content">
                <div className="front">
                    <Card sx={{borderRadius:"20px"}}>
                        <CardMedia sx={{backgroundColor: "#Ece2df", height: "215px"}}><img src={props.img}
                                                                                           alt="profile picture"
                                                                                           style={{
                                                                                               border: "5px solid black",
                                                                                               borderRadius: "10px"
                                                                                           }}/></CardMedia>
                        <CardContent><Typography>{props.firstName} {props.lastName}</Typography><Typography>{props.username}</Typography></CardContent>
                    </Card>
                </div>
                <div className="back">
                    <Card sx={{borderRadius:"20px"}}>
                        <CardContent sx={{backgroundColor: "#Ece2df"}}><Typography
                            variant="h5">{props.firstName} {props.lastName}</Typography></CardContent>
                        <CardContent sx={{height: "200px", overflow: "auto"}}>
                            <Accordion sx={{marginBottom: "10px"}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel-content"
                                >
                                    <Typography>login</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{textAlign:"left"}}>username: {props.username}</Typography>
                                    <Typography sx={{textAlign:"left"}}>password: {props.password}</Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{marginBottom: "10px"}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel-content"
                                >
                                    <Typography>contact</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{textAlign:"left"}}>phone: {props.phone}</Typography>
                                    <Typography sx={{textAlign:"left"}}>email: {props.email}</Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{marginBottom: "10px"}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel-content"
                                >
                                    <Typography>info</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{textAlign:"left"}}>first name: {props.firstName}</Typography>
                                    <Typography sx={{textAlign:"left"}}>last name: {props.lastName}</Typography>
                                    <Typography sx={{textAlign:"left"}}>age: {today.getMonth < birth.getMonth ? today.getFullYear() - birth.getFullYear(): today.getFullYear() - birth.getFullYear()+1}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </CardContent>

                    </Card>
                </div>

            </div>

        </div>
    );
};

export default Test;