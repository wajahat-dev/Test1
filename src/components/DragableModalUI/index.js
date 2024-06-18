import React, { useState } from 'react';
import { Close as CloseIcon } from '@mui/icons-material';
import { Box, Button, IconButton, makeStyles, Modal, Paper, Typography } from '@mui/material';
import Draggable from 'react-draggable';
import {
    draggableModalPaperStyle,
    modalHeaderStyle,
    modalContentStyle,
    modalFooterStyle,
    smallPaper,
    mediumPaper,
    largePaper,
} from './style'


const DraggablePaperComponent = (props: any) => {
    const paperStyle = props.size === "sm" ? smallPaper :
        props.size === "md" ? mediumPaper :
            largePaper;
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} style={{
                ...draggableModalPaperStyle,
                ...paperStyle
            }} />
        </Draggable>
    );
};




const DragableModalUI = ({ handleClose = null, handleSave = null, children, size = "sm" }: any) => {

    const [modalOpen, setModalOpen] = useState(true);

    const _handleClose = () => {
        handleClose && handleClose();
        setModalOpen(false);
    };

    const _handleSave = () => {
        handleSave && handleSave();
        setModalOpen(false);
    };

    return (
        <Modal
            open={modalOpen}
            onClose={_handleClose}
            aria-labelledby="draggable-dialog-title"
            aria-describedby="draggable-dialog-description"

        >
            <DraggablePaperComponent size={size}>
                <Paper  >
                    <div id="draggable-dialog-title" style={modalHeaderStyle}>
                        <Typography variant="h5" style={{ color: "white" }} >New</Typography>
                        <IconButton
                            aria-label="close"
                            onClick={_handleClose}
                            style={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: 'white',
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div style={modalContentStyle} id="draggable-dialog-description">
                        <form>
                            {children}
                        </form>
                    </div>
                    <div style={modalFooterStyle}>
                        <Button variant="contained" style={{ color: "white", backgroundColor: "#f6be50" }} color="primary" onClick={_handleSave}>Save</Button>
                        <Button variant="contained" style={{ color: "white", backgroundColor: "#68c656" }} onClick={_handleClose}>Cancel</Button>
                    </div>
                </Paper>
            </DraggablePaperComponent>
        </Modal>
    );
};

export default DragableModalUI;
