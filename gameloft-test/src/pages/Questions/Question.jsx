
import Button from "@mui/material/Button";
import { Routes, Route, Link, useParams } from "react-router-dom";

import "./question.css";
import Question1 from "./Question1/Question1";
import Question2 from "./Question2/Question2";
import Question3 from "./Question3/Question3";
import QuestionHeader from "../../components/question-header/QuestionHeader";

function Question() {
  const { id } = useParams();

  const components = [
    {
      component: Question1,
      title: "What is your role within your family?",
    },
    {
      component: Question2,
      title: "What language is spoken in your household?",
    },
    {
      component: Question3,
      title:
        "Please tell us which touchscreen game, app or story you use most often with your child and why",
    },
  ];

  const QuestionComponent = components[+id - 1].component;

  return (
    <>
      {/* Question header */}
      <QuestionHeader page={id} questionPerPart={components.length} />

      <div
        style={{ textAlign: "center", maxWidth: "35%", margin: "20px auto" }}
      >
        {/* Question Content */}
        <h2>{components[+id - 1].title}</h2>
        <QuestionComponent />

        <Button
          style={{
            backgroundColor: "#002248",
            color: "white",
            textTransform: "none",
            paddingLeft: "60px",
            paddingRight: "60px",
            margin: "30px 0",
          }}
          LinkComponent={Link}
          to={+id === 3 ? "/form-submit" : `/questions/${+id + 1}`}
          size="medium"
          variant="outlined"
        >
          Continue
        </Button>
      </div>
    </>
  );
}

export default Question;
