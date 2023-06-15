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
      <tr onClick={handleClickOpen}>
        <td>
          <img width="40px" height="40px" src={avatar} alt={name} />
        </td>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{address}</td>
        <td>{email}</td>
        <td>
          <button>Редактировать</button>
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
