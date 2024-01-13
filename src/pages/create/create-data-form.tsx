// CreateDataForm.jsx
import React from 'react';
import {  Button, CircularProgress } from '@mui/material';
import FormInput from '@/pages/component/form-input';
import Notification from '@/components/notifcation';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';


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
        <Box component="section" 
        sx={{
            display: 'flex',
            m: 1,
            p: 1,
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
            color: (theme) =>
              theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            border: '1px solid',
            borderColor: (theme) =>
              theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
            borderRadius: 2,
            fontSize: '0.875rem',
            fontWeight: '700',
            
          }}
  
        >
        <form className="w-[500px] h-auto mt-4 flex flex-col items-center">
            <Notification
                openSucess={notificationOpen}
                onClose={handleNotificationClose}
                error={notificationSeverity}
                message={notificationMessage}
            />
            <h1 className='font-bold  text-xl'>Update Forms</h1>
            
            <FormInput
                label="Title"
                value={formData.title}
                placeholder="Title"
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('title', e.target.value)} />
            <FormInput
                label="Description"
                value={formData.body}
                placeholder="Description"
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('body', e.target.value)} />

            <Button
                className='mt-16 bg-slate-700 text-white'
                variant="contained"
                onClick={handleSubmit}>
                {loading ? 
                
                <CircularProgress 
                color="secondary" 
                />
               : id ? 'Update' : 'Submit'}
            </Button>
        </form>
        </Box>
    );
};

export default CreateDataForm;
