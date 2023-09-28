import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


export default function MetaDataBox() {
    const [metaData, setMetaData] = React.useState(
        {
            maleCount: "",
            femaleCount: "",
            videoType: "",
        }
    );

    const handleChange = (event) => {
        setMetaData({ ...metaData, [event.target.name]: event.target.value });
        console.log(event.target)
    };

    return (
        <div className='p-5 flex flex-col justify-start rounded-3xl w-auto border-2 border-cyan-700'>
            <div className='flex flex-row justify-center'>
                <h2 className='font-bold'>Meta Data</h2>
            </div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <TextField
                    label="Number of Female Speaker"
                    id="femaleCount"
                    sx={{ m: 0, width: '25ch' }}
                    variant="outlined"
                    type='number'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name = "femaleCount"
                    value={metaData.frmaleCount}
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <TextField
                    label="Number of Male Speaker"
                    id="maleCount"
                    sx={{ m: 0, width: '25ch' }}
                    variant="outlined"
                    type='number'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name = "maleCount"
                    value={metaData.femaleCount}
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select--label">Video Type</InputLabel>
                <Select
                    labelId="demo-simple-select--label"
                    id="demo-simple-select-"
                    name = "videoType"
                    value={metaData.videoType}
                    label="Video Type"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Vlog</MenuItem>
                    <MenuItem value={2}>Debate</MenuItem>
                    <MenuItem value={3}>Drama</MenuItem>
                    <MenuItem value={4}>Tutorial</MenuItem>
                    <MenuItem value={4}>Discussion</MenuItem>
                    <MenuItem value={7}>Comedy</MenuItem>
                    <MenuItem value={8}>Interview</MenuItem>
                    <MenuItem value={5}>News</MenuItem>
                    <MenuItem value={6}>Crowd Talk</MenuItem>
                </Select>
                <FormHelperText></FormHelperText>
            </FormControl>

            <FormControlLabel sx={{ m: 0, minWidth: 120 }} required control={<Switch />} label="Completed" />
        </div>
    );
}