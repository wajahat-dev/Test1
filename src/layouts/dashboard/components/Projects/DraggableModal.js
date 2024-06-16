import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Modal, Paper, IconButton, Button,Typography } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import './Modal.css'; // Optional: Add custom styles if needed

const DraggablePaperComponent = (props) => {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} style={{ width: "500px" }} />
    </Draggable>
  );
};

const DraggableModal = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleSave = () => {
    // Add save functionality here
    console.log("Save button clicked");
    setModalOpen(false);
  };

  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="draggable-dialog-title"
      aria-describedby="draggable-dialog-description"
    >
      <DraggablePaperComponent>
        <Paper className="draggable-modal-paper">
          <div id="draggable-dialog-title" className="modal-header">
          <Typography variant="h5" style={{color: 'white'}}>Draggable Modal</Typography>
          <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'white', // White color for better contrast with the blue header
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className="modal-content" id="draggable-dialog-description">
          <Typography>This is a draggable modal. You can drag it around by grabbing the header.</Typography>
          </div>
          <div className="modal-footer">
            <Button variant="contained" style={{background: "var(--primary)", color: "white" }} className=".modal-button" onClick={handleSave}>Save</Button>
            <Button variant="contained" style={{background: "var(--primary)", color: "white" }} className=".modal-button" onClick={handleClose}>Cancel</Button>
          </div>
        </Paper>
      </DraggablePaperComponent>
    </Modal>
  );
};

export default DraggableModal;
