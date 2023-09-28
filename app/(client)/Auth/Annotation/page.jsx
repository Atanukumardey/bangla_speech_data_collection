"use client"
import * as React from 'react';
import AnnotationInputRow from '@/component/AnnotationRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Add } from '@mui/icons-material';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import MetaDataBox from '@/component/MetaDataBox';
import SelectDataBox from '@/component/FilterDataBox';
import NavigationMenu from '@/component/NavigationMenu';
import FilterDataBox from '@/component/FilterDataBox';


export default function UserMainPage() {
  return (
    <>
      {/* <div id="fb-root"></div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0&appId=519045503304881&autoLogAppEvents=1" nonce="9Cpq6IgX"></script> */}

      <div className="min-h-full bg-gray-100">
        <NavigationMenu />
        <main>
          <div className='p-5 flex flex-row justify-evenly rounded'>
            <FilterDataBox />
            <iframe
              className='rounded'
              width="50%"
              height="320"
              src="https://www.youtube.com/embed/EyJjW6aaSKI"
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowFullScreen
            />
            {/* <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F1518861422198262%2F&width=500&show_text=false&height=280"
              width={500}
              height={280}
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder={0}
              allowFullScreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            /> */}
            <MetaDataBox />
          </div>
          <div>
          </div>
          <div className="flex flex-col justify-items-center h-75 overflow-y-scrol">
            <SimpleBar style={{ maxHeight: 300 }}>
              {<AnnotationInputRow />}
              {<AnnotationInputRow />}
              {<AnnotationInputRow />}
              {<AnnotationInputRow />}
              {<AnnotationInputRow />}
              {<AnnotationInputRow />}
              {<AnnotationInputRow />}
              {<AnnotationInputRow />}
              {<AnnotationInputRow />}
              {<AnnotationInputRow />}
              {<AnnotationInputRow />}
              {<AnnotationInputRow />}
              {<AnnotationInputRow />}
              {<AnnotationInputRow />}
            </SimpleBar>
            <div className="flex flex-row justify-center pt-5 space-x-4">
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <Add />
              </IconButton>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
