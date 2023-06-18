import clsx from 'clsx';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { downloadList } from '@/store/slices/usersSlice';

import AddUser from '@/components/AddUser/AddUser';
import Save from "@/components/Save/Save";
import Download from "@/components/Download/Download";

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CreateIcon from '@mui/icons-material/Create';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  const { list } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handlerLoadList = (data) => {
    dispatch(downloadList(data));
  };

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
            className={clsx({
              ["menu__button"]: true,
              ["menu__button--up"]: true,
              ["bold"]: true,
              [" menu__button--activ"]: up,
            })}
            onFocus={() => setUp(true)}
            onBlur={() => setUp(false)}
            onMouseEnter={() => setUp(true)}
            onMouseLeave={() => setUp(false)}
          >
            <span className='menu__span'>
              <PersonAddIcon className='menu__svg' />
              Добавить пользователя
            </span>
          </button>
          <Download 
            setValue={setLeft}
            value={left}
            className={"menu__button--left"}
            onClick={handleClose}
            handlerLoadList={handlerLoadList}
          />
          <button
            className={clsx({
              ["menu__button"]: true,
              ["menu__button--down"]: true,
              ["bold"]: true,
              [" menu__button--activ"]: down,
            })}
            onFocus={() => setDown(true)}
            onBlur={() => setDown(false)}
            onMouseEnter={() => setDown(true)}
            onMouseLeave={() => setDown(false)}
          >
            <span className='menu__span'>
              <CreateIcon className='menu__svg' />
              Редкактировать список
            </span>
          </button>
          <Save
            data={list}
            setValue={setRight}
            value={right}
            className={"menu__button--right"}
            onClick={handleClose}
          />
        </DialogContent>
      </Dialog>
      <AddUser open={openUser} handleClose={handleCloseUser} />
    </div>
  );
};

export default Menu;
