import Table from "@/components/Table/Table";
import Header from "@/components/Layout/Header/Header";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsersFind } from "@/store/slices/usersSlice";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const { list, status, sort } = useSelector(state => state.user);
  const listSort = list
    .concat()
    .filter(it =>
      String(it.id).includes(sort) ||
      String(it.name).includes(sort) ||
      String(it.address).includes(sort) ||
      String(it.phone).replace(/ /g,'').includes(sort) ||
      String(it.email).includes(sort)
    )
  useEffect(() => {
    dispatch(fetchUsersFind());
  }, [])
  return (
    <>
      <Header />
      <main>
        <Table data={listSort} />
      </main>
    </>
  )
};

export default App;
