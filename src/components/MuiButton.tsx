import {Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton} from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined"
import React, {useState} from "react";


const MuiButton = () => {
    const [format, setFormat] = useState<String[]>([])
    const [formatSingle, setFormatSingle] = useState<String>("")

    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {

        setFormat(updatedFormats)
    }

    const handleFormatChangeSingle = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string) => {

        setFormatSingle(updatedFormats)
    }
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
                <Button variant="contained" startIcon={<SendIcon/>} disableElevation disableRipple>send</Button>
                <Button variant="contained" startIcon={<SendIcon/>} onClick={() => alert("")}>send</Button>
                <IconButton aria-label="send" color={'warning'} size="large"><SendIcon/></IconButton>
            </Stack>
            <Stack direction={"row"}>
                <ButtonGroup variant="contained"
                             orientation="vertical"
                             size={"small"}
                             color={"secondary"}
                             aria-label={"alignment button group"}
                >
                    <Button>left</Button>
                    <Button>center</Button>
                    <Button>right</Button>
                </ButtonGroup>
            </Stack>

            <Stack spacing={2} direction={"row"} alignItems="center">
                <h4>all</h4>
                <ToggleButtonGroup aria-label={"text formatting"}
                                   value={format}
                                   onChange={handleFormatChange}

                >
                    <ToggleButton value={"bold"} aria-label={"bold"}><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value={"italic"} aria-label={"italic"}><FormatItalicIcon/></ToggleButton>
                    <ToggleButton value={"underlined"} aria-label={"underlined"}><FormatUnderlinedIcon/></ToggleButton>
                </ToggleButtonGroup>

                <p className={`${format.includes("bold")?"bold":""} ${format.includes("italic")?"italic":""} ${format.includes("underlined")?"underlined":""}`}

                >test test test</p>
            </Stack>
            <Stack spacing={2} direction={"row"} alignItems="center">
                <h4>single</h4>
                <ToggleButtonGroup aria-label={"text formatting"}
                                   value={formatSingle}
                                   onChange={handleFormatChangeSingle}
                                   exclusive

                >
                    <ToggleButton value={"bold"} aria-label={"bold"}><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value={"italic"} aria-label={"italic"}><FormatItalicIcon/></ToggleButton>
                    <ToggleButton value={"underlined"} aria-label={"underlined"}><FormatUnderlinedIcon/></ToggleButton>
                </ToggleButtonGroup>

                <p className={`${formatSingle=="bold"?"bold":""} ${formatSingle=="italic"?"italic":""} ${formatSingle=="underlined"?"underlined":""}`}

                >test test test</p>
            </Stack>
        </Stack>
    );
};

export default MuiButton;