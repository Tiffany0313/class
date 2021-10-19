import React from "react";

import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//     active: {
//         backgroundColor: theme.palette.secondary.main,
//         color: theme.palette.text.secondary
//     }
// }));

export default function Main() {
    // const classes = useStyles();
    const theme = useTheme();
    const activeStyle = { backgroundColor: theme.palette.secondary.main, color: 'black' }
    return (
        <AppBar position="sticky">
            {/* Toolbar水平排列 */}
            <Toolbar>
                <Button>
                    {/* NavLink會去比對現在的頁面位置，當位置為我們設定的連結，就會套用activeStyle */}
                    <NavLink to="/employee" activeStyle={activeStyle}>
                        LINK to employee
                    </NavLink>
                </Button>
                <Button>
                    <NavLink to="/product" activeStyle={activeStyle}>
                        LINK to product
                    </NavLink>
                </Button>
            </Toolbar>
        </AppBar>
    );
}
