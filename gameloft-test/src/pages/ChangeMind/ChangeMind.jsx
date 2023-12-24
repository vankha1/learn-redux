import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function ChangeMind() {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "50%",
        margin: "20px auto",
        color: "#002248",
      }}
    >
      <h2>"I no longer want to participate in the survey"</h2>

      <p>Your progress will be lost.</p>

      <div style={{ textAlign: "left", maxWidth: "60%", margin: "20px auto" }}>
        <p>
          You can learn more about the purpose of the survey by contacting our
          lead researchers if you have further questions.
        </p>
        <ul style={{ marginTop: "40px" }}>
          <li>
            <strong>Research Group</strong> (research@gameloft.com)
          </li>
        </ul>

        <hr style={{ margin: "40px 0" }} />
        <p>Are you sure you no longer want to take the survey?</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "80px",
          marginTop: "30px",
        }}
      >
        <Button
          style={{
            backgroundColor: "#002248",
            color: "white",
            textTransform: "none",
            fontSize: "16px",
            width: "40%",
          }}
          size="medium"
          variant="outlined"
        >
          I have changed my mind
        </Button>

        <Button
          style={{
            backgroundColor: "#fff",
            color: "#002248",
            textTransform: "none",
            fontSize: "16px",
            marginTop: "15px",
            border: "2px solid #002248",
            padding: "5px 80px",
          }}
          size="medium"
          variant="outlined"
          LinkComponent={Link}
          to={'/questions/1'}
        >
          Back to survey
        </Button>
      </div>
    </div>
  );
}

export default ChangeMind;
