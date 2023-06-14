import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import AddUser from '@/components/AddUser/AddUser';

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClickOpen}>
        Меню
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <AddUser onClick={handleClose}/>
          <button>Импортировать контакты</button>
          <button>Экспортировать контакты</button>
          <button>Редкактировать список</button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Menu;
