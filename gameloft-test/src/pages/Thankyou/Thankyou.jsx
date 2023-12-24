import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Thankyou() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
        maxWidth: "90%",
        margin: "0 auto",
      }}
    >
      <h2>Thank you!</h2>

      <p>We appreciate your time so far</p>

      <Button
        style={{
          backgroundColor: "#002248",
          color: "white",
          textTransform: "none",
          padding: "10px 10px",
          marginTop: "20px"
        }}
        size="medium"
        variant="outlined"
        href="https://www.gameloft.com/"
        target="_blank"
      >
        Back to Gameloft
      </Button>
    </div>
  );
}

export default Thankyou;
