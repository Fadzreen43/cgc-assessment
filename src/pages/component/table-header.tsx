// TableHeader.js
import React from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';

const TableHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Judul</TableCell>
                <TableCell>Deskripsi</TableCell>
                <TableCell>Harga</TableCell>
                <TableCell>Penulis</TableCell>
                <TableCell align='center'>Aksi</TableCell>
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;
