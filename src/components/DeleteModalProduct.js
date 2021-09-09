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
        textAlign: "right",
        padding: theme.spacing(2, 2, 2, 2),
    },
    yesButton: {
        backgroundColor: "#DF225C",
        marginRight: 10
    },
    noButton: {
        backgroundColor: "#384047",
    }
}));

export default function DeleteProductModal() {

    const styles = useCustomStyles();
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
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
                            <h4 >Do you want to delete this product?</h4>
                            <IconButton className={styles.cancelButton}>
                                <CancelSharpIcon />
                            </IconButton>
                        </div>
                        <div className={styles.modalBody}>
                            <Button
                                variant="contained"
                                color="secondary"
                                disableElevation
                                className={styles.yesButton} >
                                Yes
                                </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                disableElevation
                                className={styles.noButton} >
                                No
                                </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div >
    )
}
