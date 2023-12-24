
function Error() {
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
      <h1>Sorry!</h1>

      <p>Something went wrong !!!</p>
    </div>
  );
}

export default Error;
