// DataRow.js
import React, {useEffect} from 'react';
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

    const token  = localStorage?.getItem('token') || null;

    return (
        <TableRow key={row.id}>
            <TableCell>{row.userId}</TableCell>
            <TableCell>{row.title}</TableCell>
            <TableCell>{row.body}</TableCell>
            {token =='adminToken' &&
            <TableCell align='center'>
                <IconButton>
                    <DeleteIcon onClick={() => handleDelete(row.id)} />
                </IconButton>
                <IconButton onClick={() => handleEditClick(row.id)}>
                    <EditIcon />
                </IconButton>
            </TableCell>
            }
      
        </TableRow>
    );
};

export default DataRow;
