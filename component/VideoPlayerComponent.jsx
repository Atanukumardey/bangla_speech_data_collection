import React from 'react'

function VideoPlayerComponent(props) {
    if (props.sourceType == "facebook") {
        return (
            < iframe
                src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F${props.videoID}%2F&width=500&show_text=false&height=280`}
                width={500}
                height={280}
                style={{ border: "none", overflow: "hidden" }
                }
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
        )
    }
    else if (props.sourceType == "youtube") {
        return (
            <iframe
                className='rounded'
                width="50%"
                height="320"
                src={`https://www.youtube.com/embed/${props.videoID}`}
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowFullScreen
            />
        )
    }else{
        return(
            <div>
                Loading....
            </div>
        )
    }
}

export default VideoPlayerComponent