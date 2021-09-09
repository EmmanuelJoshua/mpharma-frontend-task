import React from 'react'
import {
    TableCell,
    TableRow,
    IconButton,
    withStyles,
    makeStyles
} from '@material-ui/core';
import DeleteOutlineSharpIcon from '@material-ui/icons/DeleteOutlineSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        cursor: "pointer"
    },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
    body: {
        fontFamily: "Open Sans",
        fontSize: 15
    },
}))(TableCell);
const useCustomStyles = makeStyles((theme) => ({
    editButton: {
        marginRight: "8px",
        padding: "7px",
        color: "#6A7986"
    },
    deleteButton: {
        padding: "7px",
        color: "#DF225C"
    },
}));

export default function ProductsItem({ sn, productname, productprice, }) {

    const styles = useCustomStyles();

    return (
        <StyledTableRow>
            <StyledTableCell>{sn}</StyledTableCell>
            <StyledTableCell>{productname}</StyledTableCell>
            <StyledTableCell>{productprice}</StyledTableCell>
            <StyledTableCell>
                <IconButton aria-label="Edit Product" className={styles.editButton}>
                    <EditSharpIcon />
                </IconButton>
                <IconButton aria-label="Delete Product" className={styles.deleteButton} >
                    <DeleteOutlineSharpIcon />
                </IconButton>
            </StyledTableCell>
        </StyledTableRow>
    )
}
