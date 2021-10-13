import React, { useState } from "react";

import { Alert, Stack, Button, TextField } from "@mui/material";
import firebase from "firebase/app";
import "firebase/auth";

export default function SignUp({ setStatus }) {
    const changeStatus = () => {
        setStatus("signIn");
    };
    const [account, setAccount] = useState({
        email: "",
        password: "",
        displayName: ""
    });
    const [message, setMessage] = useState("");
    const handleChange = function (e) {
        setAccount({ ...account, [e.target.name]: e.target.value });
    };

    const [hint, setHint] = useState("fasle");
    const handleSubmit = async () => {
        setMessage("");
        try {
            const res = await firebase
                .auth()
                .createUserWithEmailAndPassword(account.email, account.password);
            // console.log(res);
            if (res) {
                res.user.updateProfile({ displayName: account.displayName });
                // console.log("success");
                setHint("true");
                setTimeout(() => {
                    setHint("false");
                    setStatus("signIn");
                }, 1000);
            }
            setAccount({ email: "", password: "", displayName: "" });
        } catch (e) {
            setMessage(e);
        }
    };

    return (
        <>
            <div
                style={{
                    height: "90vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    position: "relative"
                }}
            >
                <form>
                    <Stack spacing={1.8} direction="column">
                        <h1>註冊頁面</h1>
                        <TextField
                            name="displayName"
                            value={account.displayName}
                            label="姓名"
                            onChange={handleChange}
                        />

                        <TextField
                            name="email"
                            value={account.email}
                            label="電子郵件信箱"
                            onChange={handleChange}
                        />

                        <TextField
                            type="password"
                            name="password"
                            value={account.password}
                            label="密碼"
                            onChange={handleChange}
                            autoComplete="current-password"
                        />

                        <Button variant="contained" disableElevation onClick={handleSubmit}>
                            註冊
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            disableElevation
                            sx={{ ":hover": { backgroundColor: "#E6A100" } }}
                            onClick={changeStatus}
                        >
                            已經註冊，我要登入
                        </Button>
                        {hint === "true" ? (
                            <Alert severity="success">註冊成功！ 將跳轉登入頁面</Alert>
                        ) : (
                            ""
                        )}
                    </Stack>
                </form>
            </div>
        </>
    );
}
