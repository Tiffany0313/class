import React, { useState, useEffect } from "react";

import { List, ListItem, ListItemText } from "@mui/material";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";

// import Tab from "../ui/Tab";
// import AppMenu from "../ui/AppMenu";
import ProductAdd from "./ProductAdd";
import ProductEdit from "./ProductEdit";
import ProductDelete from "./ProductDelete";

import { db } from "../settings/firebaseConfig";

export default function ProductList() {
    const [products, setProducts] = useState([
        // { desc: "iPad", price: 20000 },
        // { desc: "iPhone X", price: 30000 },
        // { desc: "Samsung", price: 34000 },
        // { desc: "Pixel 6", price: 31000 }
    ]);

    //窗格選取
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };
    //新增開關
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    //修改開關
    const [editOpen, setEditOpen] = useState(false);
    const handleEditOpen = () => {
        setEditOpen(true);
    };
    const handleEditClose = () => {
        setEditOpen(false);
    };
    //刪除開關
    const [deleteOpen, setDeleteOpen] = useState(false);
    const handleDeleteOpen = () => {
        setDeleteOpen(true);
    };
    const handleDeleteClose = () => {
        setDeleteOpen(false);
    };

    //修改選取
    const [product, setProduct] = useState({ index: 0, desc: "", price: 0 });
    const handleEditSelected = (index, desc, price) => {
        setProduct({
            index: index,
            desc: desc,
            price: price
        });
        handleEditOpen();
    };
    //刪除選取
    const [deleteSeleted, setDeleteDeleted] = useState();
    const handleDeleteSeleted = (index) => {
        setDeleteDeleted(index);
        handleDeleteOpen();
    };

    //新增商品
    const add = async (product) => {
        setProduct({ desc: "", price: "" });
        handleClose();
        try {
            const newProduct = {
                desc: product.desc,
                price: parseInt(product.price, 10)
            };
            await db.collection("product").add(newProduct);
            await readData();
        } catch (e) {
            console.log(e);
        }

        // console.log(newProduct);
        // if (newProduct.desc !== "") {
        // setProducts((oldProducts) => [...oldProducts, newProduct]);
        // }
    };
    //修改商品
    const edit = async ({ index, desc, price }) => {
        try {
            await db.collection("product").doc(products[index].id).set({
                desc: desc,
                price: price
            });
            await readData();
        } catch (e) {
            console.log(e);
        }
        // products.splice(index, 1, { desc, price });
        // setProducts([...products]);
        handleEditClose();
    };
    //刪除商品
    const deleteP = async (index) => {
        try {
            await db.collection("product").doc(products[index].id).delete();
            await readData();
        } catch (e) {
            console.log(e);
        }
        // products.splice(index, 1); //刪除index位置且刪除一次
        // setProducts([...products]);
        handleDeleteClose();
    };

    //資料讀取
    async function readData() {
        // console.log("reading...");
        setIsLoading(true);
        const newProducts = [];

        try {
            const querySnapshot = await db
                .collection("product")
                .orderBy("price")
                .get();
            querySnapshot.forEach((doc) => {
                const newProduct = {
                    id: doc.id,
                    desc: doc.data().desc,
                    price: doc.data().price
                };
                newProducts.push(newProduct);
            }); //foreach
        } catch (e) {
            console.log(e);
        }

        // setProducts([...newProducts]);
        setProducts(newProducts);
        setIsLoading(false);
    } //readData

    useEffect(() => {
        readData();
    }, []);

    const [isLoading, setIsLoading] = useState(false);

    const ProductListComponent = () => (
        <List>
            {/* subheader="Product list" aria-label="product list" align="center" */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="outlined" onClick={handleOpen}>
                    新增商品
                </Button>
            </div>
            {products.map((product, index) => (
                <ListItem
                    key={index}
                    selected={selectedIndex === index}
                    onClick={() => handleListItemClick(index)}
                >
                    <ListItemText
                        primary={product.desc}
                        secondary={`NT$ ${product.price}`}
                    ></ListItemText>
                    <IconButton
                        aria-label="edit"
                        onClick={() =>
                            handleEditSelected(index, product.desc, product.price)
                        }
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleDeleteSeleted(index)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItem>
            ))}
            <ProductAdd
                add={add}
                open={open}
                handleClose={handleClose}
                readData={readData}
            />
            <ProductEdit
                edit={edit}
                product={product}
                editOpen={editOpen}
                handleEditClose={handleEditClose}
            />
            <ProductDelete
                deleteSeleted={deleteSeleted}
                deleteP={deleteP}
                deleteOpen={deleteOpen}
                handleDeleteClose={handleDeleteClose}
            />
        </List>
    );
    return (
        <>
            {/* <AppMenu /> */}
            {/* <Tab /> */}
            {!isLoading ? (
                <ProductListComponent />
            ) : (
                <div
                    style={{
                        height: "90vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <CircularProgress color="secondary" />
                </div>
            )}
        </>
    );
}
