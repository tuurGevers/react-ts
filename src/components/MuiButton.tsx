import {Stack, Button, IconButton} from "@mui/material"
import SendIcon from "@mui/icons-material/Send"

const MuiButton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction="row">
                <Button variant="text" href={"https://google.com"}>Text</Button>
                <Button variant="contained">Cotained</Button>
                <Button variant="outlined">outlined</Button>
            </Stack>

            <Stack spacing={1} direction={"row"}>
                <Button variant="outlined" color="primary">primary</Button>
                <Button variant="outlined" color="secondary">secondary</Button>
                <Button variant="outlined" color="info">info</Button>
                <Button variant="outlined" color="error">error</Button>
                <Button variant="outlined" color="success">succes</Button>
                <Button variant="outlined" color="warning">warning</Button>
            </Stack>
            <Stack display="block" spacing={2} direction={"row"}>
                <Button variant="contained" size={"small"} color="warning">small</Button>
                <Button variant="contained" size={"medium"} color="warning">medium</Button>
                <Button variant="contained" size={"large"} color="warning">large</Button>
            </Stack>
            <Stack spacing={2} direction={"row"}>
                <Button variant="contained" startIcon={<SendIcon/> } disableElevation disableRipple>send</Button>
                <Button variant="contained" startIcon={<SendIcon/>} onClick={()=>alert("")}>send</Button>
                <IconButton aria-label="send" color={'warning'} size="large"><SendIcon/></IconButton>
            </Stack>
        </Stack>
    );
};

export default MuiButton;