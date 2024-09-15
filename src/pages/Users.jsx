import { useEffect, useState, useCallback } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchUsers, setSearchUsers] = useState("");
  const [sortBy, setSortBy] = useState(null);

  const handleUserSearch = (e) => {
    e.preventDefault();
    setSearchUsers(e.target.value);
  };
  const handleUserSort = (e) => {
    e.preventDefault();
    setSortBy(e.target.value);
  };
  //fetch users from jsonplaceholder
  const getUsers = useCallback(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (searchUsers.length > 3) {
          setUsers((data) => {
            data.filter((datium) => {
              datium.name.toLowerCase().includes(searchUsers.toLowerCase());
            });
          });
        } else if (sortBy === "name") {
          setUsers((data) => {
            data.sort(data.name);
          });
        } else if (sortBy === "email") {
          setUsers((data) => {
            data.sort(data.email);
          });
        } else {
          setUsers(data);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchUsers, sortBy]);
  useEffect(() => {
    getUsers();
  }, [users, getUsers]);
  //data from users for pagination
  const [page, setPage] = useState(0);
  const dataPerPage = 15;
  const noOfDataVisited = page * dataPerPage;
  const pageChange = ({ selected }) => {
    setPage(selected);
  };
  const totalNoOfPage = Math.ceil(users.length / dataPerPage);
  const postsInfo = users
    .slice(noOfDataVisited, noOfDataVisited + dataPerPage)
    .map((user) => {
      return (
        <Link to={`${user.id}`} key={user.id}>
          <div
            key={user.id}
            className="bg-white shadow-md rounded-[10px] col-span-1 flex flex-col gap-2 py-4 px-6"
          >
            <p className="font-bold text-sm">Cybersecurity Enabled Users</p>
            <div className="each-user flex flex-col gap-2 md:gap-3">
              <p className="text-sm">{user.name}</p>
              <p className="text-sm text-slate-300">{user.email}</p>
              <p className="text-sm">{user.address.city}</p>
              <p>{user.address.suite}</p>
            </div>
          </div>
        </Link>
      );
    });
  return (
    <div className="mt-[2rem]">
      <h1 className="font-bold text-2xl">Get Data For All Users</h1>
      {loading && <div>loading...</div>}
      <div className="search-sort flex w-[80%] md:w-[70%]justify-between gap-7 mt-4 my-3">
        <input
          type="todoSearch"
          name="todoSearch"
          id="todoSearch"
          value={searchUsers}
          onChange={handleUserSearch}
          placeholder="Search users by name"
          className="bg-white rounded-[5px] outline-none border-[1px] border-slate-400 py-2 md:py-1 pl-2 flex-1 text-sm text-slate-600"
        />
        <select
          value={sortBy}
          onChange={handleUserSort}
          className="bg-white rounded-[5px] flex-1  outline-none border-[1px] border-slate-400 py-2 md:py-1 pl-2text-sm text-slate-500"
        >
          <option value="">SortBy</option>
          <option value="email">Email</option>
          <option value="name">Name</option>
        </select>
      </div>
      <div className="albums-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-4 px-2 gap-4 my-4">
        {postsInfo}
      </div>
      <div className="flex items-center user-paginate w-[100%] md:w-[80%] my-4 p-4">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"Next"}
          pageCount={totalNoOfPage}
          onPageChange={pageChange}
          containerClassName={"navigationBtn"}
          previousLinkClassName={"prevBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"navDisabled"}
          activeClassName={"navActive"}
        />
      </div>
    </div>
  );
};

export default Users;
