import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const FoodModal = ({ open, onClose, children, title }) => (
  <Modal open={open} onClose={onClose}>
    <Box sx={{ p: 3, bgcolor: 'white', borderRadius: 2, width: 400, margin: '10% auto' }}>
      <Typography variant="h6" mb={2}>{title}</Typography>
      {children}
    </Box>
  </Modal>
);

export default FoodModal;