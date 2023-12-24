import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import { Routes, Route, Link, useParams } from "react-router-dom";

import "./question.css";
import Question1 from "./Question1/Question1";
import Question2 from "./Question2/Question2";
import Question3 from "./Question3/Question3";

const limitQuestionPerPart = 2;

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
      <div className="question-header">
        {id === "1" ? (
          <div></div>
        ) : (
          <Link
            to={`/questions/${+id - 1}`}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <ArrowBackIosNewIcon fontSize="10px" />
            <span>Back</span>
          </Link>
        )}
        <div
          style={{
            border: "1px solid #dad8d8",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <span>
            <strong>[Part {Math.ceil(+id / limitQuestionPerPart)}]</strong>{" "}
            <strong>{+id < 10 ? `0${+id}` : id}/</strong>
            <span>
              {components.length < 10
                ? `0${+components.length}`
                : components.length}
            </span>{" "}
          </span>
        </div>
      </div>

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
