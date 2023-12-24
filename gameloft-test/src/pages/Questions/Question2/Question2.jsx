import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { blue } from "@mui/material/colors";
import OutlinedInput from "@mui/material/OutlinedInput";
import { FormControlLabel, InputLabel, Radio, RadioGroup } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const options = ["Chinese", "English", "Vietnamese"];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function Question2() {
  const [selected, setSelected] = useState([]); // select
  const [selectValue, setSelectValue] = useState(""); // radio
  const isAllSelected =
    options.length > 0 && selected.length === options.length;

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
    setSelected(value);
    setSelectValue("");
  };

  const handleOnChange = (event) => {
    setSelectValue(event.target.value);
    setSelected([]);
  };

  return (
    <div style={{ maxWidth: "95%", margin: "0 auto" }}>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        onChange={handleOnChange}
        value={selectValue}
      >
        <FormControl
          style={{ margin: "10px", width: "450px", marginBottom: "224px" }}
        >
          <Select
            labelId="mutiple-select-label"
            multiple
            value={selected}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
            style={{ fontWeight: "bold" }}
            input={
              <OutlinedInput
                sx={{
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#002248",
                  },
                  textAlign: "left",
                }}
              />
            }
          >
            <MenuItem value="all">
              <ListItemIcon>
                <Checkbox
                  checked={isAllSelected}
                  style={{ color: "#002248" }}
                />
              </ListItemIcon>
              <ListItemText
                style={{ fontWeight: "500" }}
                primary="Select All"
              />
            </MenuItem>
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                <ListItemIcon>
                  <Checkbox
                    checked={selected.indexOf(option) > -1}
                    style={{ color: "#002248" }}
                  />
                </ListItemIcon>
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControlLabel
          style={{
            border:
              selectValue === "Prefer not to say"
                ? "2px solid #002248"
                : "2px solid #dad8d8",
            margin: "10px 0",
            borderRadius: "5px",
          }}
          value="Prefer not to say"
          control={
            <Radio
              style={{ color: "#002248" }}
              checkedIcon={<CheckCircleIcon />}
            />
          }
          label="Prefer not to say"
        />
      </RadioGroup>
    </div>
  );
}

export default Question2;
