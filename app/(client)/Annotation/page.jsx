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


export default function AnnotationPage() {

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
    buttonName: "Update",
    handleRowDataChange: handleInputChangeRowdata,
    submitButtonOnClick: handleSubmitButtonClick
  }
  return (
    <main className="min-h-screen bg-gray-100">
      <NavigationMenu />
      <div className='p-5 flex flex-row justify-evenly rounded'>
        <FilterDataBox />
        {/* <iframe
              className='rounded'
              width="50%"
              height="320"
              src="https://www.youtube.com/embed/EyJjW6aaSKI"
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowFullScreen
            /> */}
        <iframe
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F261697626257069%2F&width=500&show_text=false&height=280"
          width={500}
          height={280}
          style={{ border: "none", overflow: "hidden" }}
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
        <MetaDataBox />
      </div>
      <div>
      </div>
      <div className="flex flex-col justify-items-center h-75 overflow-y-scrol">
        <SimpleBar style={{ maxHeight: 300 }}>
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
    </main>
  )
}
