import ReCAPTCHA from "react-google-recaptcha";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useRef, useState } from 'react'

import Paragraph from "../../components/paragraph/Paragraph";
import "./agreement.css";
import paragraphs from "../../mock-paragraph/agreement-para.js";

function Agreement() {
    
  const reCAPTCHA = useRef();
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaChange = () => {
    const captchaValue = reCAPTCHA.current.getValue();
    if (captchaValue) {
      setCaptchaVerified(true);
    }
  }

  return (
    <div className="agreement">
      <div className="agreement-title">
        <h1>Thank you for your interest</h1>
        <hr class="hr-text" data-content="Please read the information below"></hr>
        <p>
          Once you have read and understood the information, if you agree to
          take part in the research, click on the <strong>"I Agree"</strong>{" "}
          button to begin the survey.
        </p>
      </div>
      <div className="agreement-content">
        {paragraphs.map((paragraph, index) => {
          return (
            <Paragraph
              key={index}
              title={paragraph.title}
              text={paragraph.text}
            />
          );
        })}
      </div>
      <div className="agreement-confirm">
        <ReCAPTCHA
          ref={reCAPTCHA}
          style={{ marginBottom: "20px" }}
          sitekey="6LcIlTopAAAAACo40GrelpgzhgSYT5x1dPp03lEO"
          onChange={handleCaptchaChange}
        />
        <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
          <Button
            style={{
              paddingLeft: "70px",
              paddingRight: "70px",
              textTransform: "none",
              color: "#002248",
              borderColor: "#002248"
            }}
            size="medium"
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            style={{
              backgroundColor: "#002248",
              color: "white",
              textTransform: "none",
              paddingLeft: "60px",
              paddingRight: "60px",
            }}
            LinkComponent={captchaVerified ? Link : "button"}
            to={captchaVerified ? "/questions/1" : ""}
            disabled={!captchaVerified}
            size="medium"
            variant="outlined"
          >
            I have read and agree with the terms of use
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Agreement;
