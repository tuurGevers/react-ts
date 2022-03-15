import {Box, TextField, MenuItem} from "@mui/material"
import React, {useState} from "react";

export const MuiSelect = () => {
    const [country, setCountry] = useState("");
    const [countries, setCountries] = useState<String[]>([]);
    const [values, setValues] = useState<String[]>([]);


    const api = ["a","b","c","d"];

    return (
        <Box>
            <h4>single select</h4>
            <Box width="250px">
                <h1>{country}</h1>
                <TextField label="select country"
                           select
                           value={country}
                           fullWidth
                           onChange={(
                               e: React.ChangeEvent<HTMLInputElement>) =>
                               setCountry(e.target.value)}>
                    <MenuItem value="in">india</MenuItem>
                    <MenuItem value="eu">eu</MenuItem>
                    <MenuItem value="us">us</MenuItem>
                </TextField>
            </Box>

            <Box width="250px" margin="0em 0em 3em 0em">
                <h4>multiple select</h4>
                <h1>{countries.map((c) => c + " ")}</h1>

                <TextField label="select countries"
                           select
                           value={countries}
                           fullWidth
                           onChange={(
                               e: React.ChangeEvent<HTMLInputElement>) => {
                               const value = e.target.value
                               setCountries(typeof value === "string" ?
                                   value.split(',') : value)

                           }}
                           color="secondary"
                           error={countries.length == 0}
                           helperText={countries.length == 0?"please select country":""}

                           SelectProps={{
                               multiple:true,
                           }}>
                    <MenuItem value="in">india
                    </MenuItem>
                    <MenuItem value="eu">eu</MenuItem>
                    <MenuItem value="us">us</MenuItem>
                </TextField>
            </Box>

            {/*mapping*/}
            <Box width="250px">
                <h4>map render</h4>
                <TextField
                    label="select value"
                    value={values}
                    select
                    fullWidth
                    onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => {
                            const value = e.target.value
                            setValues(typeof value === "string"? value.split(','):
                            value)
                        }
                    }
                    SelectProps={{
                        multiple:true,
                    }}
                >
                    {
                        api.map(value => <MenuItem value={value.toString()}>{value}</MenuItem>)
                    }


                </TextField>
                
            </Box>

        </Box>
    )
}