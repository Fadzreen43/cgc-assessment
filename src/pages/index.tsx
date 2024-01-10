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
            const result = await getData();
            const resultData = result.data;
            setData(resultData);
            console.log('Data:', result);
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
        router.push(`/create?id=${id}`);
    };
    const handleCreateClick = () => {
        router.push(`/create`);
    };


    return (
        <div className='max-w-[800px] ml-auto mr-auto mt-20'>
            <h1 className='text-6xl font-bold'>Daftar Ponsel</h1>
            <p className='text-xl font-bold mt-6  mb-6'>Jumlah Ponsel Tersedia:{data.length}</p>
            <Button
                className='bg-slate-700 text-white mb-6'
                onClick={handleCreateClick}
            >new data
            </Button>
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
