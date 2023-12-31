import { useDispatch } from "react-redux";
import { setSort } from "@/store/slices/usersSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handlerSort = (e) => {
    dispatch(setSort(e.target.value))
  };
  return (
    <header className="header">
      <input className="header__input" type="text" placeholder="Поиск" onChange={handlerSort} />
    </header>
  );
};

export default Header
