// Notification.jsx
import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const Notification = ({ openSucess, onClose, error, message  }) => {
  console.log('ini apa', error);
  return (
    <Snackbar  open={openSucess} autoHideDuration={3000} onClose={onClose}>
      <Alert  onClose={onClose} severity={error} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
