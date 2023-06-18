import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';

import { fetchUserEdit, userEdit } from '@/store/slices/usersSlice';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

const EditUser = (props) => {
  const { id, name, phone, avatar, address, email, handleClose, open } = props;
  const { local } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { address: addressData, email: emailData, name: nameData, phone: phoneData } = data;
    if (!local) {
      dispatch(fetchUserEdit({
        id,
        name: nameData,
        avatar,
        address: addressData,
        email: emailData,
        phone: phoneData,
      }))
        .then(() => handleClose())
    } else {
      dispatch(userEdit({
        id,
        name: nameData,
        avatar,
        address: addressData,
        email: emailData,
        phone: phoneData,
      }));
      handleClose();
    };
  };
  return (
    <Dialog
      className="form"
      open={open}
      onClose={handleClose}
    >
      <DialogContent className="form__content">
        <span className="form__title bold">Редактировать пользователя</span>
        <img className="form__avatar" src={avatar} alt={name} />
        <form
          className="form__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="form__input"
            type="text"
            placeholder='Имя'
            defaultValue={name}
            {...register('name', { required: true })}
          />
          <input
            className="form__input"
            type="text"
            placeholder='Номер'
            defaultValue={phone}
            {...register('phone')}
          />
          <input
            className="form__input"
            type="text"
            placeholder='Электронная почта'
            defaultValue={email}
            {...register('email')}
          />
          <input
            className="form__input"
            type="text"
            placeholder='Адрес'
            defaultValue={address}
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
  )
}

export default EditUser
