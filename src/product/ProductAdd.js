import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

export default function ProductAdd({ add, open, handleClose, readData }) {
    const [product, setProduct] = useState({ desc: "", price: "" });

    const handleClick = (e) => {
        setProduct({ ...product, [e.target.id]: e.target.value });
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>新增</DialogTitle>
            <div style={{ display: "flex", flexDirection: "column", margin: 20 }}>
                {/* 產品描述:
      <input
        type="text"
        name="desc"
        value={product.desc}
        onChange={handleClick}
      />
      <br />
      產品價格:
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleClick}
      /> */}
                <TextField
                    id="desc"
                    label="產品描述"
                    variant="standard"
                    value={product.desc}
                    onChange={handleClick}
                />
                <br />
                <TextField
                    id="price"
                    label="產品價錢"
                    variant="standard"
                    value={product.price}
                    onChange={handleClick}
                />
                <br />
            </div>
            <DialogActions>
                <Button onClick={handleClose}>取消</Button>
                {/* <button onClick={update}>新增</button> */}
                <Button variant="contained" onClick={() => add(product)}>
                    新增
                </Button>
            </DialogActions>
        </Dialog>
    );
}
