import { useEffect, useState, useCallback } from "react";
import ReactPaginate from "react-paginate";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [todoSelected, setTodoSelected] = useState(null);
  const onTodoStatus = (e) => {
    e.preveDefault();
    setTodoSelected(e.target.value);
  };

  //fetch todos jsonplaceholder
  const getTodos = useCallback(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (todoSelected === "complete") {
          setTodos((data) => {
            data.filter((datium) => datium.complete === true);
          });
        } else if (todoSelected === "uncompleted") {
          setTodos((data) => {
            data.filter((datium) => datium.complete === false);
          });
        } else {
          setTodos(data);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [todoSelected]);
  useEffect(() => {
    getTodos();
  }, [todos, getTodos]);

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
          <p
            className={`text-xl font-semibold border-slate-600 border-[1px] ${
              todo.complete === true ? "text-blue-800" : "text-red-500"
            }`}
          >
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
        className="bg-white rounded-[5px] my-4 w-[80%] md:w-[40%] outline-none  border-[1px] border-slate-400 py-[0.4rem] md:py-1 pl-2"
      >
        <option value="">Select Category</option>
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
