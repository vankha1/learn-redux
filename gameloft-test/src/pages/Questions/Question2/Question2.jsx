import { useState } from "react";
import {
  FormControlLabel,
  InputLabel,
  Radio,
  RadioGroup,
  Checkbox,
  ListItemIcon,
  ListItemText,
  MenuItem,
  FormControl,
  Select,
  OutlinedInput,
  FormLabel,
  Input,
} from "@mui/material";
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

  const [isOpen, setIsOpen] = useState(false);
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

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
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
          style={{
            margin: "10px",
            width: "450px",
            marginBottom: isOpen ? "224px" : "20px",
          }}
          size="small"
        >
          <Select
            multiple
            value={selected}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
            style={{ fontWeight: "bold" }}
            onOpen={handleOpen}
            onClose={handleClose}
            notched
            // InputLabelProps={{ shrink: false }}
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
            <Input
              style={{
                textAlign: "center",
                border: "2px solid #002248",
                borderRadius: "5px",
                padding: "0 5px",
                marginLeft: "20px",
                width: "90%",
              }}
              color="secondary"
              placeholder="Search..."
            />
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
            margin: "10px auto",
            borderRadius: "5px",
            width: "98%",
          }}
          value="Prefer not to say"
          control={
            <Radio
              size="small"
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
