"use client"
import * as React from 'react';
import 'simplebar-react/dist/simplebar.min.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, TextField } from '@mui/material';

function isURL(str) {
    // Regular expression to match URLs (HTTP/HTTPS/FTP)
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(str);
}

function isFacebookLink(link) {
    // Check if the link contains "facebook.com" in the domain
    return link.includes("facebook.com");
}

function isYouTubeLink(link) {
    // Check if the link contains "youtube.com" in the domain
    return link.includes("youtube.com");
}


function getVideoID(link) {
    let data = {
        videoID: "",
        sourceMedia: ""
    }

    if (isFacebookLink(link)) {
        try {
            console.log(link)
            let match = link.match(/[?&]v=([^&]+)/);  // https://www.facebook.com/watch?v=3499090363695917
            if (!match) {
                match = link.match(/\/videos\/(\d+)\//);  // https://www.facebook.com/tsportsbd/videos/187850464333635/
            }
            data.videoID = match[1];
        } catch {
        }
        data.sourceMedia = 1; //"facebook"
    }
    else if (isYouTubeLink(link)) {
        try {
            data.videoID = link.match(/[?&]v=([^&]+)/)[1];
        } catch {

        }
        data.sourceMedia = 2; //"youtube"
    } else {
        data.videoID = ""
        data.sourceMedia = ""
    }
    return data
}



export default function DataUploadComponent(props) {

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

    const handleSubmitButtonClick = () => {
        // props.controlProps.submitButtonOnClick(props.rowIndex, inputData)
    }

    const handleChange = (event) => {
        let tempInputData = { ...inputData, [event.target.name]: event.target.value }
        inputData[event.target.name] = event.target.value;
        let url = event.target.value;
        if (event.target.name == "videoLink") {
            if (url.length > 15 && isURL(url)) { // may be valid link
                let data = getVideoID(url);
                console.log(data)
                if (data.sourceMedia == 1 || data.sourceMedia == 2) {
                    // setInputData({ ...inputData, ["sourceMedia"]: 1, });
                    inputData.sourceMedia = data.sourceMedia;
                    let videoInfo = {
                        sourceMedia: data.sourceMedia,
                        videoID: data.videoID
                    }
                    tempInputData = { ...inputData, ["sourceMedia"]: data.sourceMedia }
                    props.videoLinkCB(videoInfo)
                }
            }
        }
        setInputData(tempInputData);
    };
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
                <InputLabel id="source_media" label="source_media">Source Media</InputLabel>
                <Select
                    labelId="source_media_label"
                    id="source_media"
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
                    id="sourceName"
                    // sx={{width: '25ch' }}
                    variant="outlined"
                    size="small"
                    value={inputData.sourceName}
                    onChange={handleChange}
                    name="sourceName"
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
                    <MenuItem value={11}>WestBangla</MenuItem>
                    <MenuItem value={12}>Formal</MenuItem>
                    <MenuItem value={13}>Unrecognized</MenuItem>
                </Select>
                <FormHelperText></FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1 }}>
                <TextField
                    label="Contact"
                    id="contact"
                    // sx={{width: '25ch' }}
                    variant="outlined"
                    // multiline
                    // maxRows={4}
                    size="small"
                    value={inputData.contact}
                    onChange={handleChange}
                    name="contact"
                    placeholder="Email or Phone number of the source (not yours)"
                />
            </FormControl>
            <Button
                id="submitBtn"
                name="submitBtn"
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
