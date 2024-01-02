import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../../../redux/userSlice";

function Question3() {
  const user = useSelector(e => e.user.value);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const shouldSetValue = value.length < 2000;

    if (shouldSetValue) {
      setValue(event.target.value)
      dispatch(info({ ...user, app: event.target.value }))
    };
  };

  console.log(user);

  return (
    <div>
      <textarea
        style={{
          padding: "15px 10px",
          fontSize: "16px",
          borderRadius: "5px",
          outline: value.length >= 2000 ? "2px solid red" : "",
        }}
        rows="15"
        cols="50"
        value={user.app}
        onChange={handleChange}
      />

      {value.length > 0 && (
        <h5 style={{ color: "red", marginBottom: "-15px" }}>
          {2000 - value.length}/2000 characters left
        </h5>
      )}
    </div>
  );
}

export default Question3;
