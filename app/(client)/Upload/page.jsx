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
import DataUploadComponent from '@/component/DataUploadComponent';

export default function ValidationPage() {

    const [inputData, setInputData] = React.useState(
        {
            sourceLink: "",
            duration: "",
            tentitiveRegion: "",
            regionText: "",
            contact: "",
            sourceMedia: "",
            sourceName: "",
            gender: ""
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
        <>
            {/* <div id="fb-root"></div>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0&appId=519045503304881&autoLogAppEvents=1" nonce="9Cpq6IgX"></script> */}

            <main className="min-h-screen bg-gray-100">
                <NavigationMenu />
                <div className='flex flex-row justify-around min-w-full'>
                    <DataUploadComponent />
                </div>
            </main>
        </>
    )
}
