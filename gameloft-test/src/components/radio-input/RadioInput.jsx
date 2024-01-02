import { useRef, useState } from 'react'

import "./radioInput.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useDispatch, useSelector } from "react-redux";
import { info } from '../../redux/userSlice';

function RadioInput({styles}) {
    const user = useSelector(e => e.user.value);
    const dispatch = useDispatch();

    const [selectValue, setSelectValue] = useState("");

    const handleOnChange = (event) => {
      setSelectValue(event.target.value)
      dispatch(info({ ...user, role: event.target.value}))
    }
    
  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
      style={styles}
      onChange={handleOnChange}
    >
      <h1>{console.log(user)}</h1>
      <FormControlLabel
        style={{ border: selectValue === "Mother" ? "2px solid #002248" : "2px solid #dad8d8", margin: "10px 0", borderRadius: "5px" }}
        value="Mother"
        control={<Radio style={{ color: "#002248"}} checkedIcon={<CheckCircleIcon />} />}
        label="Mother"
        checked={user.role === "Mother"}
      />
      <FormControlLabel
        style={{ border: selectValue === "Father" ? "2px solid #002248" : "2px solid #dad8d8", margin: "10px 0", borderRadius: "5px" }}
        value="Father"
        control={<Radio style={{ color: "#002248"}} checkedIcon={<CheckCircleIcon />} />}
        label="Father"
        checked={user.role === "Father"}
      />
      <FormControlLabel
        style={{ border: selectValue === "Prefer not to say" ? "2px solid #002248" : "2px solid #dad8d8", margin: "10px 0", borderRadius: "5px" }}
        value="Prefer not to say"
        control={<Radio style={{ color: "#002248"}} checkedIcon={<CheckCircleIcon />} />}
        label="Prefer not to say"
        checked={user.role === "Prefer not to say"}
      />
    </RadioGroup>
  );
}

export default RadioInput;
