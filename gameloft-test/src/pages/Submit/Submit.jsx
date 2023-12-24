import { useState } from "react";
import {Link} from 'react-router-dom'
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Checkbox,
  FormControl,
  FormLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

import "./submit.css";

function Submit() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleChangeUserName = (event) => {
    setValue(event.target.value);
    setUsername(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleKeyPress = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (!isNaN(keyValue)) {
      event.preventDefault();
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, email)
  }

  return (
    <div className="form-submit">
      <div className="form-submit-title">
        <h2 style={{ width: "95%", margin: "0 auto" }}>
          Thank you for taking the time to complete our survey. Your help is
          very much appreciated.
        </h2>
        <div
          style={{ textAlign: "center", maxWidth: "100%", margin: "20px auto" }}
        >
          <p>
            If you have any questions or concerns, please email the lead
            researchers:
          </p>
          <ul style={{ marginTop: "40px", textAlign: "center" }}>
            <li style={{ textAlign: "center" }}>
              <strong>Research Group</strong> (research@gameloft.com)
            </li>
          </ul>

          <hr style={{ margin: "40px 0" }} />
        </div>
      </div>

      <div style={{ maxWidth: "37%", margin: "0 auto", textAlign: "left" }}>
        <h2
          style={{
            width: "100%",
            margin: "10px auto",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Interested in a summary of the survey?
        </h2>

        <p>
          If you would like to receive a summary of the survey findings OR if
          you are happy to be contacted by Gameloft about future research,
          please provide your details below and tick the relevant box/es.
        </p>
        <p>If you change your mind, you can always opt-out at a later date.</p>

        <form style={{ marginTop: "40px" }} onSubmit={handleSubmit}>
          <div style={{}}>
            <FormLabel
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "5px",
              }}
            >
              <PersonIcon /> YOUR NAME:
            </FormLabel>
            <TextField
              error={error}
              helperText={error ? "Numbers are not allowed." : ""}
              value={value}
              onChange={handleChangeUserName}
              onKeyPress={handleKeyPress}
              placeholder="Jennifer Lovewood"
              required
              variant="outlined"
              color="secondary"
              sx={{ mb: 3 }}
              fullWidth
              inputProps={{
                pattern: "[a-zA-Z]*",
              }}
            />
          </div>

          <div>
            <FormLabel
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "5px",
              }}
            >
              <EmailIcon /> EMAIL:
            </FormLabel>
            <TextField
                onChange={handleChangeEmail}
              placeholder="Jennilove@mail.com |"
              required
              variant="outlined"
              color="secondary"
              type="email"
              sx={{ mb: 3 }}
              fullWidth
            />
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox size="large" style={{ color: "#002248", margin: "0" }} />
            <ListItemText
              style={{ fontWeight: "500" }}
              primary="I agree to receive a summary of the survey findings."
            />
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox size="large" style={{ color: "#002248" }} />
            <ListItemText
              style={{ fontWeight: "500" }}
              primary="I agree to be contacted by Gameloft about future research."
            />
          </div>

          <p style={{ fontStyle: "italic" }}>
            <strong>Please note:</strong> your name and email address will not
            be linked with your survey answers.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "30px",
              marginBottom: "50px"
            }}
          >
            <Button
              style={{
                backgroundColor: "#fff",
                color: "#002248",
                textTransform: "none",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
              size="medium"
              variant="outlined"
              LinkComponent={Link}
              to={"/questions/3"}
            >
              <ArrowBackIosNewIcon fontSize="10px" />{" "}
              <span style={{ marginLeft: "5px" }}>Back to survey</span>
            </Button>

            <Button
              style={{
                backgroundColor: "#002248",
                color: "white",
                textTransform: "none",
                paddingLeft: "137px",
                paddingRight: "137px",
              }}
              size="medium"
              variant="outlined"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Submit;
