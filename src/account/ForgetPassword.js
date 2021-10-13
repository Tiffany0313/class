import React, { useState } from "react";

import { Alert, Stack, Button, TextField } from "@mui/material";
// import Link from "@mui/material/Link";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from "react-router-dom";

export default function SignIn({ setStatus }) {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [hint, setHint] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const sentEmail = async () => {
        try {
            await firebase.auth().sendPasswordResetEmail(email);
            setHint(true);
            setTimeout(() => {
                setHint(false);
                setEmail("");
            }, 5000);
        } catch (e) {
            console.log(e);
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
                <Stack spacing={1.8} direction="column">
                    <h1>忘記密碼</h1>
                    <TextField
                        type="email"
                        name="email"
                        value={email}
                        label="電子郵件信箱"
                        onChange={handleChange}
                    />

                    <Button variant="contained" disableElevation onClick={sentEmail}>
                        確認
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        disableElevation
                        sx={{ ":hover": { backgroundColor: "#E6A100" } }}
                        onClick={() => history.push("/")}
                    >
                        取消
                    </Button>
                    {hint === true ? (
                        <Alert severity="success">重設密碼信件已寄到您的信箱！</Alert>
                    ) : (
                        ""
                    )}
                </Stack>
            </form>
        </div>
    );
}
