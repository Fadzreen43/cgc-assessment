import React, { useState, useEffect } from 'react';
import { DataEntity } from '@/modules/entities/DataEntity';
import { getData } from '@/modules/use-cases/getData';
import '@/app/globals.css'
import { useRouter } from 'next/router';
import { deleteData } from '@/modules/use-cases/deleteData';
import TableHeader from './component/table-header';
import DataRow from './component/data-row';

import {
    Table,
    TableBody,
    TableContainer,
    Paper,
    TablePagination,
    TextField,
    Button,
} from '@mui/material';


export default function DataTablePage() {
    const [data, setData] = useState<DataEntity[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const router = useRouter();

    const fetchData = async () => {
        try {
        const storedData = localStorage.getItem('data');

      if (storedData) {
        setData(JSON.parse(storedData));
      } else {

        const result = await getData();
        setData(result);

        localStorage.setItem('data', JSON.stringify(result));
      }
        } catch (error) {
            console.error('Error fetching data:', (error as Error).message);
            throw error;
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteData(id);
            setData((prevData) => prevData.filter((row) => row.id !== id));

        } catch (error) {
            console.error('Error deleting data:', (error as Error).message);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    const originalDataLength = data.length;

    const filteredData = data.filter((row) =>
        Object.values(row).some((value) =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleEditClick = (id: number) => {
        // router.push(`/create?id=${id}`);

        // Find the item to edit
    const itemToEdit = data.find((item) => item.id === id);

    if (itemToEdit) {
      // Navigate to the edit page with the item data as a query parameter
      router.push({
        pathname: '/create',
        query: { id, data: JSON.stringify(itemToEdit) },
      });
    } else {
      console.error('Item not found');
    }
    };
    const handleCreateClick = () => {
        router.push(`/create`);
    };

    const { id } = router.query;

    // Check for the token on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');

    // If the token is not present, redirect to the login page
    if (!token) {
      router.push('/login');
    } else {
      // Handle different user roles or scenarios based on the token
      switch (token) {
        case 'userToken':
          console.log('Welcome, regular user!');
          break;
        case 'adminToken':
          console.log('Welcome, admin user!');
          break;
        default:
          console.error('Invalid token');
          router.push('/login'); // Redirect to login if the token is not recognized
          break;
      }
    }
  }, []);

    const handleLogout = () => {
        // Clear the token from local storage
        localStorage.removeItem('token');
    
        // Redirect to the login page after log-out
        router.push('/login');
      };


    return (
        <div className='max-w-[800px] ml-auto mr-auto mt-20'>
            <h1 className='text-6xl font-bold'>CGC Assessment</h1>
            <p className='text-xl font-bold mt-6  mb-6'>Number of list :{data.length}</p>
            {/* <Button
                className='bg-slate-700 text-white mb-6'
                onClick={handleCreateClick}
            >new data */}
            {/* </Button> */}
            <Button className='bg-slate-700 text-white mb-6' onClick={handleLogout}>Log Out</Button>
            <TextField
                className='w-full'
                label="Search"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '15px' }}
            />
            <TableContainer component={Paper}>
                <Table style={{ minWidth: 650 }} aria-label="simple table">
                    <TableHeader />
                    <TableBody>
                        {filteredData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (<>
                                <DataRow 
                                row={row}
                                handleDelete={handleDelete}
                                handleEditClick={handleEditClick}
                                />
                            </>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={originalDataLength}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
}
