import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, TextField } from '@mui/material';


// 1. 1st prop is a row state send form the parent
// 2. 2nd prop is function to update states of data in the parent 

export default function AnnotationInputRow(props) {

  const [inputData, setInputData] = React.useState(
    {
      startTime: "",
      endTime: "",
      region: "",
      regionText: "",
      formalText: "",
      emotion: "",
      ageGroup: "",
      gender: ""
    }
  )

  const handleChange = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
    // console.log(event.target)
  };

  const handleSubmitButtonClick = () =>{
    props.controlProps.submitButtonOnClick(props.rowIndex, inputData)
  }

  return (
    <div className="flex flex-row justify-center pt-5">
      <FormControl>
        <TextField
          label="Start Time"
          id={`startTime${props.rowIndex}`}
          sx={{ m: 1, width: '10ch' }}
          variant="outlined"
          size="small"
          value={inputData.startTime}
          onChange={handleChange}
          name="startTime"
        />
      </FormControl>
      <FormControl>
        <TextField
          label="End Time"
          id={`endTime${props.rowIndex}`}
          sx={{ m: 1, width: '10ch' }}
          variant="outlined"
          size="small"
          value={inputData.endTime}
          onChange={handleChange}
          name="endTime"
        />
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="region-select--label">Region</InputLabel>
        <Select
          labelId="region-select--label"
          id={`region-select${props.rowIndex}`}
          label="Region"
          size="small"
          value={inputData.region}
          onChange={handleChange}
          name="region"
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
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <TextField
          label="Region Text"
          id={`regionText${props.rowIndex}`}
          sx={{ m: 0, width: '20ch' }}
          variant="outlined"
          multiline
          maxRows={4}
          size="small"
          value={inputData.regionText}
          onChange={handleChange}
          name="regionText"
        />
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <TextField
          label="Formal Text"
          id={`outlined-start-adornment${props.rowIndex}`}
          sx={{ m: 0, width: '20ch' }}
          variant="outlined"
          multiline
          maxRows={4}
          size="small"
          value={inputData.formalText}
          onChange={handleChange}
          name="formalText"
        />
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select--label">Emotion</InputLabel>
        <Select
          labelId="demo-simple-select--label"
          id={`demo-simple-select-${props.rowIndex}`}
          label="Emotion"
          value={inputData.emotion}
          onChange={handleChange}
          size="small"
          name="emotion"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Anger</MenuItem>
          <MenuItem value={2}>Disgust</MenuItem>
          <MenuItem value={3}>Fear</MenuItem>
          <MenuItem value={4}>Joy</MenuItem>
          <MenuItem value={5}>Sadness</MenuItem>
          <MenuItem value={6}>Surprise</MenuItem>
          <MenuItem value={7}>Other</MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select--label">Age</InputLabel>
        <Select
          labelId="demo-simple-select--label"
          id={`demo-simple-select-${props.rowIndex}`}
          value={inputData.ageGroup}
          onChange={handleChange}
          label="Age Group"
          size="small"
          name="ageGroup"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Child(0-14)</MenuItem>
          <MenuItem value={2}>Youth(15-24)</MenuItem>
          <MenuItem value={3}>Adults(25-64)</MenuItem>
          <MenuItem value={4}>Seninors(65+)</MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select--label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select--label"
          id={`demo-simple-select-${props.rowIndex}`}
          label="Gender"
          value={inputData.gender}
          onChange={handleChange}
          size="small"
          name="gender"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Man</MenuItem>
          <MenuItem value={2}>Woman</MenuItem>
          <MenuItem value={3}>Unspecified</MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 1, mb:2, maxHeight:38}}
        className=' bg-blue-500'
        color = 'primary'
        onClick={handleSubmitButtonClick}
      >

   {/* (event) => handleInputChange(index, event) */}
        {props.controlProps.buttonName}
      </Button>
    </div>
  );
}

