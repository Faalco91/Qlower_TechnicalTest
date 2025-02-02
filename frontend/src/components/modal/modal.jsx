import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './modal.css';

const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: '#000',
  borderRadius: '10px',
  border: '2px solid #2424248a;',
  boxShadow: 24,
  padding: '50px 50px 80px 50px',
};

export default function BasicModal({ title, children, buttonLabel, buttonStyle }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className='cta-modal' onClick={handleOpen} sx={buttonStyle}>{buttonLabel || 'Open modal'}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" className='modal-title' variant="h6" component="h2" sx={{ fontSize: '1.8rem', padding: '1rem', textAlign: 'center', fontWeight: '700' }} >
            {title}
          </Typography>
          <Box sx={{ mt: 2, width: '70%' }}>
            {children}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
