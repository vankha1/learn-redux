import ReCAPTCHA from "react-google-recaptcha";
import Button from '@mui/material/Button';

import Paragraph from "../../components/paragraph/Paragraph";
import "./agreement.css";
import paragraphs from "../../mock-paragraph/agreement-para.js";

function Agreement() {
  console.log(paragraphs);
  return (
    <div className="agreement">
      <div className="agreement-title">
        <h1>Thank you for your interest</h1>
        <h5>Please read the information below</h5>
        <hr class="hr-text" data-content="AND"></hr>
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
            style={{ marginBottom: "20px"}}
          sitekey="6LcIlTopAAAAACo40GrelpgzhgSYT5x1dPp03lEO"
        />
        <div style={{marginTop: "10px", display: "flex", gap: "50px"}}>
            <Button style={{ paddingLeft: "50px", paddingRight: "50px", textTransform: "none" }} size="medium" variant="outlined">Cancel</Button>
            <Button style={{backgroundColor: "#002248", color: "white", textTransform: "none", paddingLeft: "60px", paddingRight: "60px"}} size="medium" variant="outlined">I have read and agree with the terms of use</Button>
        </div>
      </div>
    </div>
  );
}

export default Agreement;
