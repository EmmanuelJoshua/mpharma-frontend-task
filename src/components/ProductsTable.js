import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    makeStyles,
    withStyles
} from '@material-ui/core';
import ProductsItem from './ProductsItem';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#384047",
        color: "#fff",
        fontFamily: "Open Sans",
        fontSize: 15
    },
}))(TableCell);



const useCustomStyles = makeStyles({
    table: {
        // minWidth: 650,
    },
});

export default function ProductsTable() {
    const styles = useCustomStyles();
    return (
        <TableContainer >
            <Table className={styles.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell width='30px'>S/N</StyledTableCell>
                        <StyledTableCell>Product Name</StyledTableCell>
                        <StyledTableCell>Product Price</StyledTableCell>
                        <StyledTableCell>Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <ProductsItem sn='1' productname='Emzor' productprice='2000' />
                    <ProductsItem sn='1' productname='Emzor' productprice='2000' />
                </TableBody>
            </Table>
        </TableContainer>
    )
}
