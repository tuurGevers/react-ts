import {Stack, TextField, InputAdornment} from "@mui/material"
import {Visibility} from "@mui/icons-material"
import {useState} from "react"

export const MuiTextField = () => {
    const [value, setValue] = useState('')
    return (
        <Stack spacing={4}>
            <Stack direction={"row"} spacing={2}>
                <TextField label={"name"} variant="outlined"/>
                <TextField label={"name"} variant="filled"/>
                <TextField label={"name"} variant="standard"/>

            </Stack>

            <Stack spacing={2}>
                <TextField label={"form input"}
                           size="small" value={value}
                           onChange={e => setValue(e.target.value)}
                           error={!value}
                           helperText = {!value ? "no value" : "valid"}
                           color="secondary" required={true}/>
                <TextField
                    label={"password"}
                    size="small"
                    helperText={"don't share password"}
                    type="password"
                    InputProps={{
                        endAdornment: <InputAdornment position={"end"}><Visibility/></InputAdornment>,
                    }}
                />
                <TextField
                    label={"read only"}
                    size="small"
                    type="password"
                    inputProps={{readOnly: true}}
                />
            </Stack>
            <Stack spacing={2} direction={"row"}>
                <TextField
                    label={"amount"}
                    InputProps={{
                        startAdornment: <InputAdornment position={"start"}>$</InputAdornment>,
                    }}
                />
                <TextField
                    label="weight"
                    InputProps={{
                        endAdornment: <InputAdornment position={"end"}>kg</InputAdornment>,
                    }}

                />


            </Stack>


        </Stack>
    );
};
