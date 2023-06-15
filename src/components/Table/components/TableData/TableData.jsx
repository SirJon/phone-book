import { useState } from 'react';
import EditUser from '@/components/EditUser/EditUser';


const TableData = (props) => {
  const { name, phone, avatar, address, email } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <tr onClick={handleClickOpen} className="table__tr">
        <td>
          <img className='table__img' src={avatar} alt={name} />
        </td>
        <td>{name}</td>
        <td className='bold'>{phone}</td>
        <td>{address}</td>
        <td>{email}</td>
        <td>
          <button className='table__button--edit bold'>Редактировать</button>
        </td>
      </tr>
      <EditUser
        {...props}
        open={open}
        handleClose={handleClose}
      />
    </>
  )
};

export default TableData;
