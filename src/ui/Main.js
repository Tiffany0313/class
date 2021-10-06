import React from "react";
// import AppMenu from "./AppMenu";
import Tab from "./Tab";
import Button from "@mui/material/Button";

import { useHistory } from "react-router-dom";

export default function Main() {
    const history = useHistory();
    // useHistory 可以直接指定某頁面
    const handleClick = () => {
        history.push("/product");
    };

    return (
        <div>
            {/* <AppMenu /> */}
            <Tab />
            <Button variant="contained" color="secondary" onClick={handleClick}>
                Product
            </Button>
        </div>
    );
}
