import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Typography, Box } from '@mui/material';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  isSuccess: boolean;
}

const MessageDialog: React.FC<DialogProps> = ({ open, onClose, title, message, isSuccess }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Box display="flex" alignItems="center">
          {isSuccess ? <CheckCircleOutlineIcon color="success" sx={{ mr: 1 }} /> : <ErrorOutlineIcon color="error" sx={{ mr: 1 }} />}
          {title}
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant="body1">{message}</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MessageDialog;