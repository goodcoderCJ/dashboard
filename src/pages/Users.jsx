import { useEffect, useState, useCallback } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import picture from "../assets/unsplash_DrVJk1EaPSc.png";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchUsers, setSearchUsers] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleUserSearch = (e) => {
    e.preventDefault();
    setSearchUsers(e.target.value);
  };
  const handleUserSort = (e) => {
    e.preventDefault();
    setSortBy(e.target.value);
  };
  const filteredUsers = useCallback(
    (data) => {
      let usersData = data;
      if (searchUsers.length > 3 && sortBy === "") {
        usersData = [...data].filter((datium) => {
          return datium.name.toLowerCase().includes(searchUsers.toLowerCase());
        });
      } else if (searchUsers.length === 0 && sortBy === "email") {
        usersData = [...data].sort((a, b) => {
          return a.email.localeCompare(b.email);
        });
      } else if (searchUsers.length === 0 && sortBy === "name") {
        usersData = [...data].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      return usersData;
    },
    [searchUsers, sortBy]
  );
  //fetch users from jsonplaceholder
  const getUsers = useCallback(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(filteredUsers(data));

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filteredUsers]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);
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
        <Link to={`${user.id}`} key={user.id} className="p-1">
          <tr className="grid grid-cols-[20%_20%_36%_12%_12%] gap-12 text-xs md:text-sm py-1">
            <td className="w-[20%] col-span-1 mr-4">
              <img
                src={picture}
                className="w-7 md:w-8 h-7 md:h-8 rounded-full aspect-[1/1]"
              />
            </td>
            <td className="w-[20%]  col-span-1 mr-4">{user.name}</td>
            <td className="w-[36%]  col-span-1 mr-4">{user.email}</td>
            <td className="w-[12%]  col-span-1 mr-4">{user.address.city}</td>
            <td className="text-slate-400 w-[12%]  col-span-1 mr-4">
              {user.address.suite}
            </td>
          </tr>
        </Link>
      );
    });
  return (
    <div className="mt-[2rem]">
      <h1 className="font-bold text-2xl dark:text-[white]">
        Get Data For All Users
      </h1>
      {loading && <div className="dark:text-[white]">loading...</div>}
      <div className="search-sort flex w-[80%] md:w-[70%] justify-between gap-7  my-10">
        <input
          type="todoSearch"
          name="todoSearch"
          id="todoSearch"
          value={searchUsers}
          onChange={handleUserSearch}
          placeholder="Search users by name"
          className="bg-white dark:bg-[#304355] first-letter:rounded-[5px] outline-none border-[1px] border-slate-400 py-2 md:py-1 pl-2 flex-1 text-sm text-slate-600 dark:text-[white]"
        />
        <select
          value={sortBy}
          onChange={handleUserSort}
          className="bg-white dark:bg-[#304355] rounded-[5px] flex-1  outline-none border-[1px] border-slate-400 py-2 md:py-1 pl-2 text-sm text-slate-500 dark:text-[white]"
        >
          <option value="">SortBy</option>
          <option value="email">Email</option>
          <option value="name">Name</option>
        </select>
      </div>

      <table className="bg-white dark:bg-[#304355] shadow-md rounded-[10px] my-12 border-[1px] border-slate-300 w-[100%] flex  dark:text-[white] table-auto">
        <div className="table-data-wrapper w-full overflow-auto p-6  flex-1">
          <thead className="w-full flex-1">
            <tr className="text-xs md:text-sm font-bold grid grid-cols-[20%_20%_36%_12%_12%] gap-12 py-1">
              <th className="w-[20%] text-left col-span-1 mr-4">Picture</th>
              <th className="w-[20%] text-left col-span-1 mr-4">Name</th>
              <th className="w-[36%] text-left col-span-1 mr-4">Email</th>
              <th className="w-[12%] text-left col-span-1 mr-4">City</th>
              <th className="w-[12%] text-left col-span-1 mr-4">Suite</th>
            </tr>
          </thead>
          <tbody className="w-full flex-1"> {postsInfo}</tbody>
        </div>
      </table>

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
