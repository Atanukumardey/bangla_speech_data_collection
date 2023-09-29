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

export default function UploadPage() {

    return (
        <main className="min-h-screen bg-white">
            <NavigationMenu />
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Upload</h1>
                </div>
            </header>
            <div className='flex flex-row justify-around min-w-full'>
                <DataUploadComponent />
            </div>
        </main>
    )
}
