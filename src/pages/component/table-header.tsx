import React from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';

const TableHeader: React.FC = () => {
  // Move the localStorage access inside the component
  const token = typeof window !== 'undefined' ? localStorage?.getItem('token') || null : null;

  return (
    <TableHead>
      <TableRow>
        <TableCell>User ID</TableCell>
        <TableCell>Title</TableCell>
        <TableCell>Description</TableCell>
        {token === 'adminToken' && <TableCell align='center'>Action</TableCell>}
      </TableRow>
    </TableHead>
  );
};

// export default TableHeader;

export default TableHeader;
