import Table from "@/components/Table/Table";
import Header from "@/components/Layout/Header/Header";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsersFind } from "@/store/slices/usersSlice";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector(state => state.user);
  useEffect(() => {
    dispatch(fetchUsersFind());
  }, [])
  return (
    <>
      <Header />
      <main>
        <Table data={list} />
      </main>
    </>
  )
};

export default App;
