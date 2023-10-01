"use client"
import * as React from 'react';
import 'simplebar-react/dist/simplebar.min.css';
import DataUploadComponent from '@/component/pageItems/DataUploadComponent';
import VideoPlayerComponent from '@/component/pageItems/VideoPlayerComponent';

export default function UploadPage() {

    const [videoData, setVideoData] = React.useState({
        isValid: "",
        videoID: "",
        sourceMedia: ""
    });

    const newVideoLinkCallback = (videoInfo) => {
        if (videoInfo.sourceMedia == 1 || videoInfo.sourceMedia == 2) { // facebook
            setVideoData({
                isValid: true,
                videoID: videoInfo.videoID,
                sourceMedia: videoInfo.sourceMedia == 1 ? "facebook" : "youtube"
            })
        }
    }

    return (
        <div className='flex flex-row justify-evenly min-w-full'>
            {
                videoData.isValid ?
                    <div className='pt-20'>
                        <VideoPlayerComponent sourceType={videoData.sourceMedia} videoID={videoData.videoID} />
                    </div> : ""
            }
            <DataUploadComponent videoLinkCB={newVideoLinkCallback} />
        </div>
    )
}
