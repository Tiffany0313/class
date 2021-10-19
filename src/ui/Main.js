import React, { useState } from "react";
// import AppMenu from "./AppMenu";
import Tab from "./Tab";
import SignUp from "../account/SignUp";
import SignIn from "../account/SignIn";
// import Button from "@mui/material/Button";

// import { useHistory } from "react-router-dom";

export default function Main() {
    const [status, setStatus] = useState("signIn");

    // const history = useHistory();
    // useHistory 可以直接指定某頁面
    // const handleClick = (link) => {
    //   history.push(link);
    // };
    return (
        <>
            {/* && history.push("/product") */}
            {status === "signIn" ? (
                <SignIn setStatus={setStatus} />
            ) : status === "signUp" ? (
                <SignUp setStatus={setStatus} />
            ) : (
                <Tab setStatus={setStatus} />
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
                <Button variant="contained" color="primary" onClick={() => handleClick("/product")}>
                    Product
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handleClick("/employee")}>
                    Employee
                </Button>
            </div> */}
        </>
    );
}