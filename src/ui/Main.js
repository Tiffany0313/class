import React from "react";
// import AppMenu from "./AppMenu";
import Tab from "./Tab";
import { Button, Box } from "@mui/material";

import { useHistory } from "react-router-dom";

export default function Main() {
    const history = useHistory();
    // useHistory 可以直接指定某頁面
    const handleClick = (link) => {
        history.push(link);
    };

    return (
        <Box>
            {/* <AppMenu /> */}
            <Tab />
            <Button variant="contained" color="primary" onClick={() => handleClick("/product")}>
                Product
            </Button>
            <Button variant="contained" color="secondary" onClick={() => handleClick("/employee")}>
                Employee
            </Button>
        </Box>
    );
}
