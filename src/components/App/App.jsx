import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_STATUS } from '@/constants/api_status';

import { fetchUsersFind, setFetching } from "@/store/slices/usersSlice";

import Table from "@/components/Table/Table";
import Header from "@/components/Layout/Header/Header";

const App = () => {
  const dispatch = useDispatch();
  const { list, status, fetching, sort, totalCount } = useSelector(state => state.user);

  useEffect(() => {
    if (fetching && totalCount > 0) {
      dispatch(fetchUsersFind());
    };
  }, [fetching]);

  const listSort = list
    .concat()
    .filter(it =>
      String(it.id).includes(sort) ||
      String(it.name).includes(sort) ||
      String(it.address).includes(sort) ||
      String(it.phone).replace(/ /g, '').includes(sort) ||
      String(it.email).includes(sort)
    )

  return (
    <>
      <Header />
      <main className="main">
        {listSort.length > 0 &&
          <Table data={listSort} setFetching={() => dispatch(setFetching(true))} />
        }
      </main>
    </>
  )
};

export default App;
