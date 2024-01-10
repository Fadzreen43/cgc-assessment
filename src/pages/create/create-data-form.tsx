// CreateDataForm.jsx
import React from 'react';
import { Button, CircularProgress } from '@mui/material';
import FormInput from '@/pages/component/form-input';
import Notification from '@/components/notifcation';

const CreateDataForm = ({
    formData,
    loading,
    handleInputChange,
    handleSubmit,
    id,
    notificationOpen,
    handleNotificationClose,
    notificationSeverity,
    notificationMessage,
}: {
    formData: any,
    loading: Boolean,
    handleInputChange: any,
    handleSubmit: any,
    id: Number,
    notificationOpen: boolean,
    handleNotificationClose: any,
    notificationSeverity: string,
    notificationMessage: string,
}) => {
    
    return (
        <form className="w-[700px] h-auto mt-24 flex flex-col items-center">
            <Notification
                openSukses={notificationOpen}
                onClose={handleNotificationClose}
                error={notificationSeverity}
                message={notificationMessage}
            />
            <h1 className='font-bold  text-xl'>Form Tambah Ponsel</h1>
            
            <FormInput
                label="Title"
                value={formData.title}
                placeholder="Title"
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('title', e.target.value)} />
            <FormInput
                label="Description"
                value={formData.description}
                placeholder="Description"
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('description', e.target.value)} />
            <FormInput
                label="Price"
                value={formData.price}

                placeholder="Price"
                type="number"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('price', e.target.value)} />
            <FormInput
                label="Author"
                value={formData.author}
                placeholder="Author"
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('author', e.target.value)} />

            <Button
                className='mt-16 bg-slate-700 text-white'
                variant="contained"
                onClick={handleSubmit}>
                {loading ? 
                
                <CircularProgress 
                color="secondary" 
                />
               : id ? 'Updating...' : 'Submit'}
            </Button>
        </form>
    );
};

export default CreateDataForm;
