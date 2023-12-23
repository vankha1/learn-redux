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
    </div>
  );
}

export default Agreement;
