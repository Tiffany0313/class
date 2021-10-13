import React, { useState } from "react";
// import AppMenu from "./AppMenu";
import Tab from "./Tab";
import SignUp from "../account/SignUp";
import SignIn from "../account/SignIn";
// import Button from "@mui/material/Button";

// import { useHistory } from "react-router-dom";

import firebase from "firebase/app";

export default function Main() {
  const [status, setStatus] = useState("signIn");
  const user = firebase.auth().currentUser;

  // const history = useHistory();
  // useHistory 可以直接指定某頁面
  // const handleClick = () => {
  //   history.push("/product");
  // };
  return (
    <>
      {user ? <Tab setStatus={setStatus} /> : ""}
      {/* && history.push("/product") */}
      {status === "signIn" ? (
        <SignIn setStatus={setStatus} />
      ) : status === "signUp" ? (
        <SignUp setStatus={setStatus} />
      ) : (
        ""
        // <SignOut setStatus={setStatus} />
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
