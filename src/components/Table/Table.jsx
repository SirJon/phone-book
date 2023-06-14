import { useEffect, useState } from "react";
import TableData from "./components/TableData/TableData";

const Table = ({ data = [] }) => {
  const [userData, setUserData] = useState([]);
  const [fieldState, setFieldState] = useState('');
  const [returnValue, setReturnValue] = useState(-1);

  useEffect(() => {
    setUserData(data)
  }, [data]);

  const sortDate = (field) => {
    const resultData = userData
      .concat()
      .sort((a, b) => {
        if (field !== fieldState) {
          setReturnValue(-1);
          return a[field] > b[field]
            ? 1
            : -1
        } else {
          setReturnValue(returnValue * (-1))
          return a[field] > b[field]
            ? 1 * returnValue
            : -1 * returnValue
        }
      });
    setUserData(resultData)
    setFieldState(field);
  };

  return (
    <table border="1px">
      <thead>
        <tr>
          <td>
            <button>Открыть меню</button>
          </td>
          <td onClick={() => sortDate('name')}>Имя</td>
          <td onClick={() => sortDate('phone')}>Телефон</td>
          <td onClick={() => sortDate('address')}>Адрес</td>
          <td onClick={() => sortDate('email')}>Электронная почта</td>
          <td>Редактировать</td>
        </tr>
      </thead>
      <tbody>
        {userData.map(it => (
          <TableData key={it.id} {...it} />
        ))}
      </tbody>
    </table>
  )
};

export default Table;
