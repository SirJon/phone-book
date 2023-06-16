import clsx from 'clsx';
import { useState } from 'react';

import AddUser from '@/components/AddUser/AddUser';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CreateIcon from '@mui/icons-material/Create';
import BackupIcon from '@mui/icons-material/Backup';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [openUser, setOpenuser] = useState(false);

  const handleClickOpenUser = () => {
    setOpenuser(true);
  };

  const handleCloseUser = () => {
    setOpenuser(false);
  };

  return (
    <div className='menu'>
      <button className='menu__button--action' onClick={handleClickOpen}>
        <span className='visually-hidden'>Меню</span>
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        className='menu__dialog'
      >
        <DialogContent className='menu__content'>
          <div
            className={clsx({
              ["menu__circle"]: true,
              ["menu__circle--up"]: true,
              [" menu__circle--activ"]: up,
            })}
          />
          <div
            className={clsx({
              ["menu__circle"]: true,
              ["menu__circle--left"]: true,
              [" menu__circle--activ"]: left,
            })}
          />
          <div
            className={clsx({
              ["menu__circle"]: true,
              ["menu__circle--right"]: true,
              [" menu__circle--activ"]: right,
            })}
          />
          <div
            className={clsx({
              ["menu__circle"]: true,
              ["menu__circle--down"]: true,
              [" menu__circle--activ"]: down,
            })}
          />
          <button
            onClick={() => {
              handleClickOpenUser();
              handleClose();
            }}
            className='menu__button menu__button--up bold'
            onFocus={() => setUp(true)}
            onMouseEnter={() => setUp(true)}
            onMouseLeave={() => setUp(false)}
          >
            <span className='menu__span'>
              <PersonAddIcon className='menu__svg' />
              Добавить пользователя
            </span>
          </button>
          <button
            className='menu__button menu__button--left bold'
            onFocus={() => setLeft(true)}
            onMouseEnter={() => setLeft(true)}
            onMouseLeave={() => setLeft(false)}
          >
            <span className='menu__span'>
              <CloudDownloadIcon className='menu__svg' />
              Импортировать контакты
            </span>
          </button>
          <button
            className='menu__button menu__button--right bold'
            onFocus={() => setRight(true)}
            onMouseEnter={() => setRight(true)}
            onMouseLeave={() => setRight(false)}
          >
            <span className='menu__span'>
              <BackupIcon className='menu__svg' />
              Экспортировать контакты
            </span>
          </button>
          <button
            className='menu__button menu__button--down bold'
            onFocus={() => setDown(true)}
            onMouseEnter={() => setDown(true)}
            onMouseLeave={() => setDown(false)}
          >
            <span className='menu__span'>
              <CreateIcon className='menu__svg' />
              Редкактировать список
            </span>
          </button>
        </DialogContent>
      </Dialog>
      <AddUser open={openUser} handleClose={handleCloseUser} />
    </div>
  );
};

export default Menu;
