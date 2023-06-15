import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';

import { fetchUserCreate } from '@/store/slices/usersSlice';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import avatar from "@/assets/images/avatar.jpg"

const AddUser = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(fetchUserCreate({
      ...data,
      avatar,
    }))
      .then(() => handleClose())
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogContent>
        <span>Добавить пользователя</span>
        <img width="50px" height="50px" src={avatar} alt="avatar" />
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder='Имя'
            {...register('name', { required: true })}
          />
          <input
            type="text"
            placeholder='Номер'
            {...register('phone')}
          />
          <input
            type="text"
            placeholder='Электронная почта'
            {...register('email')}
          />
          <input
            type="text"
            placeholder='Адрес'
            {...register('address')}
          />
          <button
            type="submit"
          >
            Сохранить
          </button>
          <button
            type='button'
            onClick={handleClose}
          >
            Отмена
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddUser;
