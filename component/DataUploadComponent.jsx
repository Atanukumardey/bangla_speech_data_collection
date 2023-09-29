"use client"
import * as React from 'react';
import 'simplebar-react/dist/simplebar.min.css';
import NavigationMenu from '@/component/NavigationMenu';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, TextField } from '@mui/material';

export default function DataUploadComponent() {

    const [inputData, setInputData] = React.useState(
        {
            videoLink: "",
            duration: "",
            tentitiveRegion: "",
            contact: "",
            sourceMedia: "",
            sourceName: "",
            videoType: ""
        }
    )

    const handleChange = (event) => {
        setInputData({ ...inputData, [event.target.name]: event.target.value });
        // console.log(event.target)
    };

    const handleSubmitButtonClick = () => {
        // props.controlProps.submitButtonOnClick(props.rowIndex, inputData)
    }

    return (
        <div className="flex flex-col justify-evenly pt-5">
            <FormControl sx={{ m: 1 }}>
                <TextField
                    label="Video Link"
                    id="videoLink"
                    sx={{ width: '50ch' }}
                    variant="outlined"
                    size="small"
                    value={inputData.videoLink}
                    onChange={handleChange}
                    name="videoLink"
                />
            </FormControl>
            <FormControl sx={{ m: 1 }}>
                <TextField
                    label="Duration"
                    id="duration"
                    // sx={{width: '25ch' }}
                    variant="outlined"
                    size="small"
                    value={inputData.duration}
                    onChange={handleChange}
                    name="duration"
                    placeholder='min:sec'
                />
            </FormControl>
            <FormControl sx={{ m: 1 }}>
                <InputLabel id="source_media--label">Source Media</InputLabel>
                <Select
                    labelId="source_media--label"
                    id="source_media-"
                    label="Source Media"
                    value={inputData.sourceMedia}
                    onChange={handleChange}
                    size="small"
                    name="sourceMedia"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Facebook</MenuItem>
                    <MenuItem value={2}>YouTube</MenuItem>
                    <MenuItem value={3}>Other Social Media</MenuItem>
                    <MenuItem value={4}>Recorded</MenuItem>
                    <MenuItem value={5}>Unknown</MenuItem>
                </Select>
                <FormHelperText></FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1 }}>
                <TextField
                    label="Source Name"
                    id="duration"
                    // sx={{width: '25ch' }}
                    variant="outlined"
                    size="small"
                    value={inputData.sourceName}
                    onChange={handleChange}
                    name="duration"
                    placeholder='Channel, Page, Profile name OR N/A'
                />
            </FormControl>
            <FormControl sx={{ m: 1 }}>
                <InputLabel id="demo-simple-select--label">Video Type</InputLabel>
                <Select
                    labelId="demo-simple-select--label"
                    id="demo-simple-select-"
                    name="videoType"
                    value={inputData.videoType}
                    label="Video Type"
                    size='small'
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Vlog</MenuItem>
                    <MenuItem value={2}>Debate</MenuItem>
                    <MenuItem value={3}>Drama</MenuItem>
                    <MenuItem value={4}>Tutorial</MenuItem>
                    <MenuItem value={5}>Discussion</MenuItem>
                    <MenuItem value={6}>Comedy</MenuItem>
                    <MenuItem value={7}>Interview</MenuItem>
                    <MenuItem value={8}>News</MenuItem>
                    <MenuItem value={9}>Crowd Talk</MenuItem>
                    <MenuItem value={10}>Other</MenuItem>
                </Select>
                <FormHelperText></FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1 }}>
                <InputLabel id="tentitiveRegion-select--label">Tentitive Region</InputLabel>
                <Select
                    labelId="tentitiveRegion-select--label"
                    id="tentitiveRegion-select"
                    label="Tentitive Region"
                    size="small"
                    value={inputData.tentitiveRegion}
                    onChange={handleChange}
                    name="tentitiveRegion"
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
            <FormControl sx={{ m: 1 }}>
                <TextField
                    label="Contact"
                    id="outlined-start-adornment"
                    // sx={{width: '25ch' }}
                    variant="outlined"
                    multiline
                    maxRows={4}
                    size="small"
                    value={inputData.contact}
                    onChange={handleChange}
                    name="contact"
                />
            </FormControl>
            <Button
                type="submit"
                variant="contained"
                sx={{ m: 1 }}
                className=' bg-blue-500'
                color='primary'
                onClick={handleSubmitButtonClick}
            >
                Submit
            </Button>
        </div>
    )
}
