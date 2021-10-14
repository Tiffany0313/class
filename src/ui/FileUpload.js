import React from 'react'
import { Button, Input } from '@mui/material';

import firebase from "firebase/app";
import "firebase/storage";

export default function FileUpload() {
    let file = null;
    const storage = firebase.storage();

    const handleUpload = (e) => {
        console.log(e.target.files[0]);
        file = e.target.files[0]
    }

    const handleSubmit = async () => {
        if (file) {
            try {
                const imageRef = storage.ref().child(file.name);
                await imageRef.put(file);
                console.log("上傳成功");

                const url = await imageRef.getDownloadURL();
                console.log(url);
            }
            catch (e) {
                if (e.code === "storage/unauthorized") {
                    console.log("尚未登入");
                }
                else {
                    console.log(e.message);
                }
            }
        }
    }

    return (
        <div>
            <Input type="file" accept="image/x-png,image/jpeg" onChange={handleUpload} />
            <Button variant="contained" color="primary" onClick={handleSubmit}>上傳</Button>
        </div>
    )
}