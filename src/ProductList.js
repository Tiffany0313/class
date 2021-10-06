import React, { useState } from "react";

import List from "@mui/material/List";
import { ListItem, ListItemText } from "@mui/material";

export default function ProductList() {
    const products = [
        { desc: "iPad", price: 20000 },
        { desc: "iPhone X", price: 30000 }
    ];
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <List subheader="Product list" aria-label="product list">
            {products.map((product, index) => (
                // <ListItem divider key={index}>
                //   <ListItemText
                //     primary={product.desc}
                //     secondary={"NT$" + product.price}
                //   ></ListItemText>
                // </ListItem>
                <ListItem
                    key={index}
                    selected={selectedIndex === index}
                    onClick={() => handleListItemClick(index)}
                >
                    <ListItemText
                        primary={product.desc}
                        secondary={`NT$ ${product.price}`}
                    ></ListItemText>
                </ListItem>
            ))}
        </List>
    );
}
