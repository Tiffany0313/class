import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

export default function ProductDelete({
    deleteSeleted,
    deleteP,
    deleteOpen,
    handleDeleteClose
}) {
    return (
        <Dialog open={deleteOpen} onClose={handleDeleteClose}>
            <DialogTitle>確定要刪除?</DialogTitle>
            <DialogActions>
                <Button onClick={handleDeleteClose}>取消</Button>
                <Button variant="contained" onClick={() => deleteP(deleteSeleted)}>
                    確定
                </Button>
            </DialogActions>
        </Dialog>
    );
}
