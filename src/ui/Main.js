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
            <div
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
            </div>
        </Box>
    );
}
