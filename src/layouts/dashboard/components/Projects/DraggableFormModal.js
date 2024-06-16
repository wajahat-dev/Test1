import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Modal, Paper, IconButton, TextField, MenuItem, Select, FormControl, InputLabel, Button, Checkbox, FormControlLabel, Typography, Box } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import './Modal.css'; // Ensure this is correctly pointing to your CSS file

const aaaaa = {
  width: "500px",
  height: "500px",
  overflow: "auto",
}

const DraggablePaperComponent = (props) => {
  return (
    <Draggable     handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} className="draggable-modal-paper" style={aaaaa}  />
    </Draggable>
  );
};

const DraggableFormModal = () => {
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
        <Paper className="draggable-modal-paper ">
          <div id="draggable-dialog-title" className="modal-header">
            <Typography variant="h5">New</Typography>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'white',
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className="modal-content" id="draggable-dialog-description">
            <form>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <TextField label="Vehicle number" required fullWidth />
                <TextField label="Device ID" required fullWidth />
                <TextField label="Additional IMEI" fullWidth />
                <FormControl fullWidth>
                  <InputLabel>Make</InputLabel>
                  <Select>
                    <MenuItem value=""><em>Select make</em></MenuItem>
                    {/* Add more options here */}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>Model</InputLabel>
                  <Select>
                    <MenuItem value=""><em>Select model</em></MenuItem>
                    {/* Add more options here */}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>Modification</InputLabel>
                  <Select>
                    <MenuItem value=""><em>Select modification</em></MenuItem>
                    {/* Add more options here */}
                  </Select>
                </FormControl>
                <TextField label="Color" fullWidth />
                <TextField label="Vehicle Type" fullWidth defaultValue="Car" />
                <TextField label="Device tags" fullWidth />
                <FormControl fullWidth>
                  <InputLabel>Device type</InputLabel>
                  <Select>
                    <MenuItem value=""><em>Select device type</em></MenuItem>
                    {/* Add more options here */}
                  </Select>
                </FormControl>
                <TextField label="Group" fullWidth defaultValue="ABDUL AZIZ NAQLIYATH" />
                <FormControl fullWidth>
                  <InputLabel>Template</InputLabel>
                  <Select>
                    <MenuItem value=""><em>Select template</em></MenuItem>
                    {/* Add more options here */}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>Time zone</InputLabel>
                  <Select defaultValue="Asia/Karachi">
                    <MenuItem value="Asia/Karachi">Asia/Karachi</MenuItem>
                    {/* Add more options here */}
                  </Select>
                </FormControl>
                <TextField label="Initial Odometer" type="number" fullWidth defaultValue="0" />
                <TextField label="Initial Machine Hours" type="number" fullWidth defaultValue="0" />
                <TextField label="Packages time shift" type="number" fullWidth defaultValue="0" />
                <TextField label="Description" fullWidth multiline rows={4} />
                <FormControlLabel control={<Checkbox />} label="Universal sales" />
              </Box>
            </form>
          </div>
          <div className="modal-footer">
            <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
            <Button variant="contained" onClick={handleClose}>Cancel</Button>
          </div>
        </Paper>
      </DraggablePaperComponent>
    </Modal>
  );
};

export default DraggableFormModal;
