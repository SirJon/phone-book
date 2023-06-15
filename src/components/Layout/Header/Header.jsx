import { useDispatch } from "react-redux";
import { setSort } from "@/store/slices/usersSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handlerSort = (e) => {
    dispatch(setSort(e.target.value))
  };
  return (
    <header>
      <input type="text" placeholder="Поиск" onChange={handlerSort} />
    </header>
  )
}

export default Header
