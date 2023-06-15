import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import EditUser from '@/components/EditUser/EditUser';


const TableData = (props) => {
  const { id, name, phone, avatar, address, email } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => { 
    setOpen(false);
  };

  return (
    <>
      <tr>
        <td onClick={handleClickOpen}>
          <img width="40px" height="40px" src={avatar} alt={name} />
        </td>
        <td onClick={handleClickOpen}>{name}</td>
        <td onClick={handleClickOpen}>{phone}</td>
        <td onClick={handleClickOpen}>{address}</td>
        <td onClick={handleClickOpen}>{email}</td>
        <td>
          <EditUser
            {...props}
          />
        </td>
      </tr>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          {id}
        </DialogContent>
      </Dialog>
    </>
  )
};

export default TableData;
