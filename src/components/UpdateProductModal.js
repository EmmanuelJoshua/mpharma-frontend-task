import React from 'react';
import {
    makeStyles,
    IconButton,
    Button,
    TextField
} from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CancelSharpIcon from '@material-ui/icons/CancelSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';

const useCustomStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        outline: "none",
        boxShadow: theme.shadows[5],
    },
    modalHeader: {
        display: "flex",
        alignItems: "center",
        color: "#fff",
        padding: theme.spacing(1, 1, 1, 2),
        backgroundColor: "#24292E",
    },
    cancelButton: {
        color: "white",
        marginLeft: "auto"
    },
    modalBody: {
        textAlign: "center",
        padding: theme.spacing(1, 1, 2, 1),
    },
    textfield: {
        width: "100%",
        margin: theme.spacing(0, 0, 2, 0),
    },
    updateButton: {
        backgroundColor: "#384047",
        marginRight: "auto"
    }
}));

export default function UpdateProductModal() {

    const styles = useCustomStyles();
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    const inputProps = {
        min: 0,
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={styles.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>

                    <div className={styles.paper}>
                        <div className={styles.modalHeader}>
                            <h2 >Update Product</h2>
                            <IconButton className={styles.cancelButton}>
                                <CancelSharpIcon />
                            </IconButton>
                        </div>
                        <div className={styles.modalBody}>
                            <form noValidate autoComplete="off">

                                <TextField className={styles.textfield} label="Product name" variant="filled" required />

                                <TextField className={styles.textfield} label="Product price" variant="filled" type="number" inputProps={inputProps} required />

                                <Button
                                    variant="contained"
                                    color="secondary"
                                    disableElevation
                                    className={styles.updateButton}
                                    endIcon={<EditSharpIcon />}
                                >
                                    Update
                                </Button>
                            </form>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div >
    )
}
