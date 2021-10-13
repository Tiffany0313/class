import React, { useContext } from "react";
import Tab from "./Tab";
import SignUp from "../account/SignUp";
import SignIn from "../account/SignIn";
// import Button from "@mui/material/Button";
import { AuthContext, STATUS } from "../account/AuthContext";
// import { useHistory } from "react-router-dom";

export default function Main() {
  const authContext = useContext(AuthContext);

  // const history = useHistory();
  // useHistory 可以直接指定某頁面
  // const handleClick = () => {
  //   history.push("/product");
  // };

  return (
    <>
      {authContext.status === STATUS.signIn ? (
        <SignIn />
      ) : authContext.status === STATUS.signUp ? (
        <SignUp />
      ) : (
        <Tab />
      )}
      {/* <div
        style={{
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Product
        </Button>
      </div> */}
    </>
  );
}
