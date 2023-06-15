import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';

import { fetchUserEdit } from '@/store/slices/usersSlice';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

const EditUser = (props) => {
  const { name, phone, avatar, address, email, handleClose, open } = props;
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(fetchUserEdit({
      ...props,
      ...data,
    }))
      .then(() => handleClose())
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogContent>
        <span>Редактировать пользователя</span>
        <img width="50px" height="50px" src={avatar} alt={name} />
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            defaultValue={name}
            {...register('name', { required: true })}
          />
          <input
            type="text"
            defaultValue={phone}
            {...register('phone')}
          />
          <input
            type="text"
            defaultValue={email}
            {...register('email')}
          />
          <input
            type="text"
            defaultValue={address}
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
  )
}

export default EditUser
