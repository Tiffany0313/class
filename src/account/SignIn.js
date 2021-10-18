import React, { useState } from "react";

import { Alert, Stack, Button, TextField } from "@mui/material";
import Link from "@mui/material/Link";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from "react-router-dom";

export default function SignIn({ setStatus }) {
    const history = useHistory();
    const changeStatus = () => {
        setStatus("signUp");
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
    const [hint, setHint] = useState("false");
    const handleSubmit = async () => {
        setMessage("");
        try {
            const session = await firebase
                .auth()
                .setPersistence(firebase.auth.Auth.Persistence.SESSION);
            const res = await firebase
                .auth()
                .signInWithEmailAndPassword(account.email, account.password);
            if (res) {
                setHint("true");
                setTimeout(() => {
                    setHint("false");
                    setStatus("signOut");
                    setAccount({ email: "", password: "", displayName: "" });
                }, 1000);
                // console.log(res.user.displayName);
            }
            return res;
        } catch (e) {
            setMessage(e);
        }
    };

    const handleForgetPassWord = async () => {
        history.push("/forgetpassword");
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
                    <h1>登入頁面</h1>
                    <TextField
                        type="email"
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
                    <Link
                        href="#"
                        color="inherit"
                        variant="body2"
                        onClick={handleForgetPassWord}
                        sx={{ display: "flex", justifyContent: "flex-end" }}
                    >
                        忘記密碼?
                    </Link>
                    <Button variant="contained" disableElevation onClick={handleSubmit}>
                        登入
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        disableElevation
                        sx={{ ":hover": { backgroundColor: "#E6A100" } }}
                        onClick={changeStatus}
                    >
                        尚未註冊，我要註冊
                    </Button>
                    {hint === "true" ? <Alert severity="success">登入成功！</Alert> : ""}
                </Stack>
            </form>
        </div>
    );
}
