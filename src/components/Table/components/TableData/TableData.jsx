
const TableData = ({ id, name, phone, avatar, address, email }) => {
  return (
    <tr>
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
  )
};

export default TableData;
