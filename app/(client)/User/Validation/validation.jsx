"use client"
import * as React from 'react';
import AnnotationInputRow from '@/component/AnnotationRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Add } from '@mui/icons-material';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import MetaDataBox from '@/component/MetaDataBox';
import FilterDataBox from '@/component/FilterDataBox';
import VideoPlayerComponent from '@/component/VideoPlayerComponent';


export default function ValidationPage() {

  // Map to store input row data
  const [rowData, setRowData] = React.useState([{}]);

  // Add key-value pair to the "hash map" with an auto-generated key
  const addRowData = () => {
    setRowData([...rowData, {}]);
  };

  // Remove the last input data (key-value pair) from the map
  const deleteLastRowData = () => {
    if (rowData.length > 1) {
      const newRows = [...rowData];
      newRows.pop();
      setRowData(newRows);
    }
  };

  const handleInputChangeRowdata = (index, event) => {
    const newRows = [...rowData];
    newRows[index][event.target.name] = event.target.value;
    setRowData(newRows);
  };

  const handleSubmitButtonClick = (index, rowData) => {
    console.log(index)
    console.log(rowData)
  };

  const controlProps = {
    buttonName: "Validate",
    handleRowDataChange: handleInputChangeRowdata,
    submitButtonOnClick: handleSubmitButtonClick
  }
  return (
    <>
      <div className='p-5 flex flex-row justify-evenly rounded'>
        <FilterDataBox />
        {/* <VideoPlayerComponent sourceType = "youtube" videoID = "EyJjW6aaSKI"/> */}
        <VideoPlayerComponent sourceType="facebook" videoID="261697626257069" />
        <MetaDataBox />
      </div>
      <div>
      </div>
      <div className="flex flex-col justify-items-center h-quto overflow-y-scrol">
        <SimpleBar style={{ maxHeight: 250 }}>
          {
            rowData.map((data, index) => (
              <AnnotationInputRow key={index} rowIndex={index} controlProps={controlProps} />
            ))
          }
        </SimpleBar>
        <div className="flex flex-row justify-center pt-5 space-x-4">
          <IconButton
            aria-label="delete"
            onClick={deleteLastRowData}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={addRowData}
          >
            <Add />
          </IconButton>
        </div>
      </div>
    </>
  )
}
