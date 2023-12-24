import { useRef, useState } from 'react'

import "./radioInput.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function RadioInput({styles}) {
    const [selectValue, setSelectValue] = useState("");

    const handleOnChange = (event) => {
        setSelectValue(event.target.value)
    }
    
  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
      style={styles}
      onChange={handleOnChange}
    >
      <FormControlLabel
        style={{ border: selectValue === "Mother" ? "2px solid #002248" : "2px solid #dad8d8", margin: "10px 0", borderRadius: "5px" }}
        value="Mother"
        control={<Radio style={{ color: "#002248"}} checkedIcon={<CheckCircleIcon />} />}
        label="Mother"
      />
      <FormControlLabel
        style={{ border: selectValue === "Father" ? "2px solid #002248" : "2px solid #dad8d8", margin: "10px 0", borderRadius: "5px" }}
        value="Father"
        control={<Radio style={{ color: "#002248"}} checkedIcon={<CheckCircleIcon />} />}
        label="Father"
      />
      <FormControlLabel
        style={{ border: selectValue === "Prefer not to say" ? "2px solid #002248" : "2px solid #dad8d8", margin: "10px 0", borderRadius: "5px" }}
        value="Prefer not to say"
        control={<Radio style={{ color: "#002248"}} checkedIcon={<CheckCircleIcon />} />}
        label="Prefer not to say"
      />
    </RadioGroup>
  );
}

export default RadioInput;
