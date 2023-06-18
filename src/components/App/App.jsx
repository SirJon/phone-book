import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsersFind, setFetching } from "@/store/slices/usersSlice";

import Table from "@/components/Table/Table";
import Header from "@/components/Layout/Header/Header";

const App = () => {
  const dispatch = useDispatch();
  const { list, fetching, sort, totalCount, local } = useSelector(state => state.user);

  useEffect(() => {
    if (fetching && (totalCount > 0) && !local) {
      dispatch(fetchUsersFind());
    };
  }, [fetching]);

  const listSort = list
    .concat()
    .filter(it =>
      String(it.id).toLowerCase().includes(sort.toLowerCase()) ||
      String(it.name).toLowerCase().includes(sort.toLowerCase()) ||
      String(it.address).toLowerCase().includes(sort.toLowerCase()) ||
      String(it.phone).toLowerCase().replace(/ /g, '').includes(sort.toLowerCase()) ||
      String(it.email).toLowerCase().includes(sort.toLowerCase())
    )

  return (
    <>
      <Header />
      <main className="main">
        <Table data={listSort} setFetching={() => dispatch(setFetching(true))} />
      </main>
    </>
  )
};

export default App;
