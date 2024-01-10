// CreateDataPage.jsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { DataEntity } from '@/modules/entities/DataEntity';
import { createData } from '@/modules/use-cases/createData';
import { getDataById } from '@/modules/use-cases/getDataById';
import { updateData } from '@/modules/use-cases/updateData';
import CreateDataForm from './create-data-form';
import '@/app/globals.css';

const CreateDataPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const [formData, setFormData] = useState<DataEntity>({
        id: 0,
        title: '',
        description: '',
        price: 0,
        author: '',
    });
    const [loading, setLoading] = useState(false);
    const [openSukses, setOpenSukses] = useState(false);
    const [notificationSeverity, setNotificationSeverity] = useState("");
    const [notificationMessage, setNotificationMessage] = useState("");

    const fetchDataById = async () => {
        try {
            const result = await getDataById(Number(id));
            setFormData(result);
        } catch (error) {
        }

    }
    const fetchUpdateData = async () => {
        try {
            await updateData(Number(id), formData);
            setTimeout(() => {
                router.push('/');
            }, 1000);

        } catch (error) {

        }

    }
    useEffect(() => {
        if (id) {
            fetchDataById();
        }
    }, [id]);

    const handleInputChange = (field: keyof DataEntity, value: string | number) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSukses(false);
    };

    const handleCreate = async () => {
        try {
            setLoading(true);
            setOpenSukses(true);
            await createData(formData);
            setNotificationSeverity("success");
            setNotificationMessage("Success updating data!");
            setOpenSukses(true);
            setTimeout(() => {
                router.push('/');
            }, 6000);
        } catch (error) {
            setNotificationSeverity("error");
            setNotificationMessage("Error fetching data!");
            setOpenSukses(true);

        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 1000);

        }
    };
    const handleUpdate = async () => {
        try {
            if (id) {
                setLoading(true);
                fetchUpdateData();
                setNotificationSeverity("success");
                setNotificationMessage("Success updating data!");
                setOpenSukses(true);
                setTimeout(() => {
                    router.push('/');
                }, 5000);
            }

        } catch (error) {
            setNotificationSeverity("error");
            setNotificationMessage("Error fetching data!");
            setOpenSukses(true);


        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    };

    const handleSubmit = async () => {
        if (id) {
            handleUpdate();
            setTimeout(() => {
                router.push('/');
            }, 5000);
        } else {
            handleCreate();
        }
    };

    return (
        <div className="flex w-full flex-col h-screen items-center">
            <CreateDataForm
                formData={formData}
                loading={loading}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                id={Number(id)}
                notificationOpen={openSukses}
                handleNotificationClose={handleClose}
                notificationSeverity={notificationSeverity}
                notificationMessage={notificationMessage}
            />
        </div>
    );
};

export default CreateDataPage;
