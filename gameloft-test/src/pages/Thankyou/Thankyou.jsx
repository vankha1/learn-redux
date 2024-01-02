import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { profile, info } from "../../redux/userSlice";

function Thankyou() {

  const userInfo = useSelector(e => e.user.value);
  const userProfile = useSelector(e => e.user.submitInfo);

  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
        maxWidth: "90%",
        margin: "0 auto",
      }}
    >
      <h2>Thank you!</h2>

      <p>We appreciate your time so far</p>

      <h3>Result:</h3>
      <ul>
        <li>Username: {userProfile.username}</li>
        <li>Email: {userProfile.email}</li>
        <li>Role: {userInfo.role}</li>
        <li>Language: {!userInfo.isPrefed ? userInfo.language : 'Not prefering' }</li>
        <li>Story about app/game: {userInfo.app}</li>
        <li>Receiving summary: {userProfile.isReceivedSummary ? 'Yes' : 'No'}</li>
        <li>Contact: {userProfile.isContacted ? 'Yes' : 'No'}</li>
      </ul>
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
