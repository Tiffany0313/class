import React, { useState } from "react";

import { Button } from "@mui/material";

import firebase from "firebase/app";
import "firebase/auth";

export default function SignOut({ setStatus }) {
    const [message, setMessage] = useState("");

    const handleSubmit = async function () {
        setMessage("");

        try {
            await firebase.auth().signOut();
            setStatus("signIn");
        } catch (e) {
            setMessage(e);
        }
    };

    return (
        <div
            style={{
                height: "90vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <form>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    登出
                </Button>

                {message}
            </form>
        </div>
    );
}
