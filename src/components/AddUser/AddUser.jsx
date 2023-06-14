import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const AddUser = ({ onClick }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    onClick();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClickOpen}>
        Добавить пользователя
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">
          Добавить пользователя
        </DialogTitle>
        <DialogContent>
          <input type="text" placeholder='Имя' />
          <input type="text" placeholder='Номер' />
          <input type="text" placeholder='Электроннаяя почта' />
          <input type="text" placeholder='Адрес' />
        </DialogContent>
        <DialogActions>
          <button>Сохранить</button>
          <button>Отмена</button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddUser;
