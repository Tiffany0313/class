import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

export default function ProductAdd({
    edit,
    product,
    editOpen,
    handleEditClose
}) {
    const [productEdit, setProductEdit] = useState({
        index: "",
        desc: "",
        price: ""
    });
    // console.log(productEdit);
    useEffect(() => {
        setProductEdit({
            index: product.index,
            desc: product.desc,
            price: product.price
        });
    }, [editOpen]);

    return (
        <Dialog open={editOpen} onClose={handleEditClose}>
            <DialogTitle>修改</DialogTitle>
            <div style={{ display: "flex", flexDirection: "column", margin: 20 }}>
                <TextField
                    id="desc"
                    label="產品描述"
                    variant="standard"
                    value={productEdit.desc}
                    onChange={(e) =>
                        setProductEdit((old) => ({ ...old, desc: e.target.value }))
                    }
                />
                <br />
                <TextField
                    id="price"
                    label="產品價錢"
                    variant="standard"
                    value={productEdit.price}
                    onChange={(e) =>
                        setProductEdit((old) => ({ ...old, price: e.target.value }))
                    }
                />
                <br />
            </div>
            <DialogActions>
                <Button onClick={handleEditClose}>取消</Button>
                <Button variant="contained" onClick={() => edit(productEdit)}>
                    修改
                </Button>
            </DialogActions>
        </Dialog>
    );
}
