import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { deepPurple } from "@mui/material/colors";

import ProductList from "../product/ProductList";
import EmployeeList from "../employee/EmployeeList";
import CustomerList from "../customer/CustomerList";
import firebase from "firebase/app";

import { AuthContext, STATUS } from "../account/AuthContext";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {index === 0 ? (
                <ProductList />
            ) : index === 1 ? (
                <EmployeeList />
            ) : (
                <CustomerList />
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}

export default function BasicTabs() {
    const authContext = useContext(AuthContext);
    const [hint, setHint] = useState(false);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSubmit = async function () {
        try {
            await firebase.auth().signOut();

            setHint(true);
            setTimeout(() => {
                setHint(false);
                authContext.setStatus(STATUS.signIn);
            }, 2000);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <Box sx={{ width: "100%", position: "relative", top: 0, left: 0 }}>
                <AppBar position="sticky">
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                            textColor="inherit"
                            indicatorColor="secondary"
                            centered
                        >
                            <Tab label="產品列表" {...a11yProps(0)} />
                            <Tab label="員工列表" {...a11yProps(1)} />
                            <Tab label="顧客列表" {...a11yProps(2)} />
                            <IconButton aria-label="logout" onClick={handleSubmit}>
                                <LogoutIcon fontSize="small" sx={{ color: deepPurple[50] }} />
                            </IconButton>
                        </Tabs>
                    </Box>
                </AppBar>
                <TabPanel value={value} index={0}>
                    ProductList
                </TabPanel>
                <TabPanel value={value} index={1}>
                    EmployeeList
                </TabPanel>
                <TabPanel value={value} index={2}>
                    CustomerList
                </TabPanel>
            </Box>
            {hint === true ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        margin: "auto"
                    }}
                >
                    <Alert severity="success">登出成功！</Alert>
                </div>
            ) : (
                ""
            )}
        </>
    );
}
