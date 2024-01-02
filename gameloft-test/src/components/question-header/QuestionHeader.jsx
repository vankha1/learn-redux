import { Routes, Route, Link, useParams } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import './questionHeader.css'

function QuestionHeader({ page, questionPerPart }) {
  const limitQuestionPerPart = 2;
  return (
    <div className="question-header">
      {page === "1" ? (
        <div></div>
      ) : (
        <Link
          to={`/questions/${+page - 1}`}
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
          <strong>[Part {Math.ceil(+page / limitQuestionPerPart)}]</strong>{" "}
          <strong>{+page < 10 ? `0${+page}` : page}/</strong>
          <span>
            {questionPerPart < 10
              ? `0${+questionPerPart}`
              : questionPerPart}
          </span>{" "}
        </span>
      </div>
    </div>
  );
}

export default QuestionHeader;
