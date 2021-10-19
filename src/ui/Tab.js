import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { NavLink, useHistory } from "react-router-dom";

export default function ColorTabs() {
    const history = useHistory();

    return (
        <AppBar position="sticky">
            <Box sx={{ width: "100%" }}>
                <Tabs
                    value={
                        history.location.pathname === '/'
                            ? false
                            : history.location.pathname
                    }
                    textColor="inherit"
                    indicatorColor="secondary"
                    centered
                >
                    <Tab
                        value="/product"
                        label="產品列表"
                        component={NavLink}
                        to="/product"
                    />
                    <Tab
                        value="/employee"
                        label="員工列表"
                        component={NavLink}
                        to="/employee"
                    />
                    <Tab
                        value="/customer"
                        label="顧客列表"
                        component={NavLink}
                        to="/customer"
                    />
                </Tabs>
            </Box>
        </AppBar>
    );
}
