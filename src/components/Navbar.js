import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    makeStyles
} from '@material-ui/core';
import NoteAddSharpIcon from '@material-ui/icons/NoteAddSharp';

const useCustomStyles = makeStyles((theme) => ({
    menu: {
        backgroundColor: "#24292E",
        boxShadow: "none",
        height: "100px",
        display: "flex",
        justifyContent: "center",
    },
    addButton: {
        color: "white",
        marginLeft: "auto"
    },
    typography: {
        fontWeight: "bold",
        fontFamily: "Open Sans",
        fontSize: 27
    },
}));


export default function Navbar() {
    const styles = useCustomStyles();
    return (
        <AppBar position="static" className={styles.menu}>
            <Toolbar>
                <Typography variant='h5' className={styles.typography}>
                    mPharma Product List
                </Typography>

                <IconButton aria-label="Delete Product" className={styles.addButton} >
                    <NoteAddSharpIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
