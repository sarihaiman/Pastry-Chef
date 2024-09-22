import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import { useState } from 'react';
import { Typography } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function CustomizedDialogs() {

    const [open, setOpen] = useState(false);
    const [feedback, setFeedback] = useState('');

    const handleClose = () => {
        setOpen(false);
    };

    const handleFeedbackChange = (event: { target: { value: any; }; }) => {
        setFeedback(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <React.Fragment>
            <Button
                variant="outlined"
                onClick={handleClickOpen}
                sx={{
                    color: 'black',
                    position: 'fixed',
                    left: -32,
                    top: '80%',
                    transform: 'rotate(90deg)',
                    backgroundColor: 'rgb(111, 233, 224)',
                    '&:hover': {
                        backgroundColor: 'rgb(111, 233, 224)', // Set the hover background color to the same blue color
                    }
                }}
            >
                Feedback
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 , color: 'rgb(111, 233, 224)'}} id="customized-dialog-title">
                    Feedback
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        How do you feel about your visit today?
                    </Typography>
                    <RadioGroup aria-label="feedback" name="feedback" value={feedback} onChange={handleFeedbackChange} >
                        <FormControlLabel value="Excellent" control={<Radio  style={{  color: 'black',}}/>} label="Excellent" />
                        <FormControlLabel value="Good" control={<Radio style={{  color: 'black',}}/>} label="Good" />
                        <FormControlLabel value="Fair" control={<Radio style={{  color: 'black',}}/>} label="Fair" />
                        <FormControlLabel value="Poor" control={<Radio style={{  color: 'black',}}/>} label="Poor" />
                        <FormControlLabel value="Very Poor" control={<Radio style={{  color: 'black',}}/>} label="Very Poor" />
                    </RadioGroup>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Send
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}