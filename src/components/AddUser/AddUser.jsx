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
      className="form"
      open={open}
      onClose={handleClose}
    >
      <DialogContent className="form__content">
        <span className="form__title bold">Добавить пользователя</span>
        <img className="form__avatar" src={avatar} alt="avatar" />
        <form
          className="form__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="form__input"
            type="text"
            placeholder='Имя'
            {...register('name', { required: true })}
          />
          <input
            className="form__input"
            type="text"
            placeholder='Номер'
            {...register('phone')}
          />
          <input
            className="form__input"
            type="text"
            placeholder='Электронная почта'
            {...register('email')}
          />
          <input
            className="form__input"
            type="text"
            placeholder='Адрес'
            {...register('address')}
          />
          <div className="form__wrapper--buttons">
            <button
              className="form__button bold"
              type="submit"
            >
              Сохранить
            </button>
            <button
              className="form__button bold"
              type='button'
              onClick={handleClose}
            >
              Отмена
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddUser;
