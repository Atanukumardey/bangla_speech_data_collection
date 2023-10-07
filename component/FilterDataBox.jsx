import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import 'simplebar-react/dist/simplebar.min.css';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { blueGrey, pink } from '@mui/material/colors';
import { Button, Icon, IconButton, Typography } from '@mui/material';
import { ArrowBackRounded, ArrowCircleLeft, ArrowCircleLeftRounded, ArrowCircleRight, ArrowCircleRightRounded, ArrowForward, BackHand, Forward } from '@mui/icons-material';
import { BackwardIcon } from '@heroicons/react/24/outline';

export default function FilterDataBox() {

    const [filterData, setFilterData] = React.useState(
        {
            videoSource: "",
            tentativeRegion: "",
        }
    );

    const handleChange = (event) => {
        setFilterData({ ...filterData, [event.target.name]: event.target.value });
        console.log(event.target)
    };
    return (
        <div className='p-5 flex flex-col justify-evenly bg-slate-600'>
            <div className='flex flex-row justify-center'>
                <h2 className='font-bold'>Chose Data</h2>
            </div>
            <FormControl sx={{ m: 1, minWidth: 250 }}>
                <InputLabel id="demo-simple-select--label">Video Source</InputLabel>
                <Select
                    labelId="video-source-select--label"
                    id="videoSource"
                    value={filterData.videoSource}
                    label="Video Source"
                    name="videoSource"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Facebook</MenuItem>
                    <MenuItem value={2}>Youtube</MenuItem>
                    <MenuItem value={3}>Other</MenuItem>
                </Select>
                <FormHelperText></FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select--label">Tentative Region</InputLabel>
                <Select
                    labelId="tentative-region-select--label"
                    id="tentativeRegion"
                    value={filterData.tentativeRegion}
                    label="Tentative Region"
                    name="tentativeRegion"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Barishal</MenuItem>
                    <MenuItem value={2}>Chattogram</MenuItem>
                    <MenuItem value={3}>Cumilla</MenuItem>
                    <MenuItem value={4}>Khulna</MenuItem>
                    <MenuItem value={5}>Mymensingh</MenuItem>
                    <MenuItem value={6}>Noakhali</MenuItem>
                    <MenuItem value={7}>Old Dhaka</MenuItem>
                    <MenuItem value={8}>Rangpur</MenuItem>
                    <MenuItem value={9}>Rajshahi</MenuItem>
                    <MenuItem value={10}>Sylhet</MenuItem>
                    <MenuItem value={11}>WestBengle</MenuItem>
                    <MenuItem value={12}>Formal</MenuItem>
                    <MenuItem value={13}>Unrecognized</MenuItem>
                </Select>
                <FormHelperText></FormHelperText>
            </FormControl>
            <div className='flex flex-row justify-evenly'>
                <IconButton aria-label="Forward" sx={{ color: blueGrey[900]}}>
                    <ArrowCircleLeftRounded/>
                </IconButton>
                <IconButton aria-label = "backward" sx={{ color: blueGrey[900]}}>
                    <ArrowCircleRightRounded/>
                </IconButton>
            </div>
        </div>
    );
}