// DataRow.js
import React from 'react';
import { TableCell, TableRow, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const DataRow = ({
    row,
    handleDelete,
    handleEditClick
}: {
    row: any,
    handleDelete: any,
    handleEditClick: any
}) => {
    const formatToRupiah = (number: number) => {
        const formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        });
        return formatter.format(number);
    };

    return (
        <TableRow key={row.id}>
            <TableCell>{row.title}</TableCell>
            <TableCell>{row.description}</TableCell>
            <TableCell>{formatToRupiah
                (row.price)
            }</TableCell>
            <TableCell>{row.author}</TableCell>
            <TableCell align='center'>
                <IconButton>
                    <DeleteIcon onClick={() => handleDelete(row.id)} />
                </IconButton>
                <IconButton onClick={() => handleEditClick(row.id)}>
                    <EditIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default DataRow;
