import React, { useState } from "react";
// import AppMenu from "../ui/AppMenu";
import Tab from "../ui/Tab";

import { List, ListItem, ListItemText } from "@mui/material";

export default function CustomerList() {
    const [customers, setCustomers] = useState([
        { id: "0", name: "Tiffany", DateOfBirth: "2000/01/01" },
        { id: "1", name: "Vicky", DateOfBirth: "1992/12/22" },
        { id: "2", name: "Ivy", DateOfBirth: "1994/06/23" },
        { id: "3", name: "Nick", DateOfBirth: "1990/02/21" },
        { id: "4", name: "Kazen", DateOfBirth: "1994/04/17" }
    ]);

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <>
            {/* <AppMenu /> */}
            {/* <Tab /> */}
            {/* subheader="Employee list" aria-label="employee list" align="center" */}
            <List>
                {customers.map((customer, index) => (
                    <ListItem
                        divider
                        key={index}
                        onClick={() => handleListItemClick(index)}
                        selected={selectedIndex === index}
                    >
                        <ListItemText
                            primary={customer.name}
                            secondary={customer.DateOfBirth}
                        ></ListItemText>
                    </ListItem>
                ))}
            </List>
        </>
    );
}
