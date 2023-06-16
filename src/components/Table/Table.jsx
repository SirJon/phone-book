import { useEffect, useState, useRef } from "react";

import Menu from "@/components/Menu/Menu";

import TableData from "./components/TableData/TableData";

const Table = ({ data = [], setFetching }) => {
  const [userData, setUserData] = useState([]);
  const [fieldState, setFieldState] = useState('');
  const [returnValue, setReturnValue] = useState(-1);

  const triggerEnd = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      if (document.documentElement.clientWidth > triggerEnd.current?.offsetTop) {
        setFetching()
      }
    }, 100);
  }, [triggerEnd.current?.offsetTop])

  const scrollHandler = (e) => {
    if ((triggerEnd.current?.offsetTop - (e.target.documentElement.scrollTop + window.innerHeight) < 100)) {
      setFetching()
    };
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    const sortData = fieldState === ''
      ? data
      : data
        .concat()
        .sort((a, b) => {
          return a[fieldState] > b[fieldState]
            ? -1 * returnValue
            : 1 * returnValue
        })
    setUserData(sortData);
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
    setUserData(resultData);
    setFieldState(field);
  };

  return (
    <table className="table" >
      <thead className="table__head">
        <tr className="table__tr">
          <td>
            <Menu />
          </td>
          <td className="ns-resize" onClick={() => sortDate('name')}>Имя</td>
          <td className="bold ns-resize" onClick={() => sortDate('phone')}>Телефон</td>
          <td className="ns-resize" onClick={() => sortDate('address')}>Адрес</td>
          <td className="ns-resize" onClick={() => sortDate('email')}>Электронная почта</td>
          <td></td>
        </tr>
      </thead>
      <tbody className="table__body">
        {userData.map(it => (
          <TableData key={it.id} {...it} />
        ))}
        <tr
          className="table__trigger"
          ref={triggerEnd}
        />
      </tbody>
    </table>
  )
};

export default Table;
