import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [todoSelected, setTodoSelected] = useState(null);
  const onTodoStatus = (e) => {
    e.preveDefault();
    setTodoSelected(e.target.value);
  };
  // const getFilteredTodos = () => {
  //   if (todoSelected === null || todoSelected === "") {
  //     return todos;
  //   } else if (todoSelected === "completed") {
  //     todos.filter((todo) => todo.status === todoSelected);
  //   } else if (todoSelected === "uncompleted") {
  //     todos.filter((todo) => todo.status === todoSelected);
  //   } else {
  //     return <>There Is No User Data</>;
  //   }
  // };
  //fetch todos jsonplaceholder
  const getTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTodos();
  }, []);

  //data from todos for pagination
  const [page, setPage] = useState(0);
  const dataPerPage = 15;
  const noOfDataVisited = page * dataPerPage;
  const pageChange = ({ selected }) => {
    setPage(selected);
  };
  const totalNoOfPage = Math.ceil(todos.length / dataPerPage);
  const todosInfo = todos
    .slice(noOfDataVisited, noOfDataVisited + dataPerPage)
    .map((todo) => {
      return (
        <div
          key={todo.id}
          className="bg-white col-span-1 py-4 px-5 flex flex-col gap-2 rounded-[10px] shadow-md"
        >
          <p className="text-sm text-slate-700">{todo.title}</p>
          <p className="text-xl font-semibold border-slate-600 border-1">
            {todo.complete}
          </p>
        </div>
      );
    });
  return (
    <div className="py-4">
      <h1 className="font-bold text-2xl">Get Data For All Todos</h1>
      {loading && <div>loading...</div>}
      <select
        value={todoSelected}
        onChange={onTodoStatus}
        className="bg-white rounded-[5px] my-4 w-[20%] outline-none border-0"
      >
        <option value=""></option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
      <div className="albums-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-4 px-2 gap-4 my-4">
        {todosInfo}
      </div>
      <div className="flex items-center todo-paginate w-[100%] md:w-[80%] my-4 p-4">
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

export default Todos;
