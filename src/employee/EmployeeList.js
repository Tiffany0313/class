import React, { useState } from "react";
import AppMenu from "../ui/AppMenu";
import Tab from "../ui/Tab";

import { List, ListItem, ListItemText } from "@mui/material";

export default function EmployeeList() {
    const [employees, setEmployees] = useState([
        { id: "0", name: "Ben", department: "IT" },
        { id: "1", name: "Rich", department: "Marketing" },
        { id: "2", name: "Ruby", department: "Management" },
        { id: "3", name: "Judy", department: "IT" },
        { id: "4", name: "Rain", department: "IT" }
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
                {employees.map((employee, index) => (
                    <ListItem
                        divider
                        key={index}
                        onClick={() => handleListItemClick(index)}
                        selected={selectedIndex === index}
                    >
                        <ListItemText
                            primary={employee.name}
                            secondary={"@" + employee.department}
                        ></ListItemText>
                    </ListItem>
                ))}
            </List>
        </>
    );
}
