import { useEffect, useState, useCallback } from "react";
import ReactPaginate from "react-paginate";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [todoSelected, setTodoSelected] = useState(null);
  const onTodoStatus = (e) => {
    e.preventDefault();
    setTodoSelected(e.target.value);
  };
  //filter based on selection
  const returnedTodos = useCallback(
    (data) => {
      let result = data;
      if (todoSelected === "complete") {
        result = [...data].filter((datium) => {
          return datium.complete === true;
        });
      } else if (todoSelected === "uncompleted") {
        result = [...data].filter((datium) => {
          return datium.complete === false;
        });
      } else {
        return result;
      }
      return result;
    },
    [todoSelected]
  );
  //fetch todos jsonplaceholder
  const getTodos = useCallback(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodos(returnedTodos(data));

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [returnedTodos]);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

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
          className="bg-white dark:bg-[#304355] col-span-1 py-4 px-5 flex flex-col gap-2 rounded-[10px] shadow-md"
        >
          <p className="text-sm text-slate-700 dark:text-[white]">
            {todo.title}
          </p>
          <p
            className={`text-xl font-semibold  dark:text-[white] ${
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
      <h1 className="font-bold text-2xl dark:text-[white]">
        Get Data For All Todos
      </h1>
      {loading && <div className="dark:text-[white]">loading...</div>}
      <select
        value={todoSelected}
        onChange={onTodoStatus}
        className="bg-white dark:bg-[#304355] rounded-[5px] dark:text-[white] my-4 w-[80%] md:w-[40%] outline-none  border-[1px] border-slate-400 py-[0.4rem] md:py-1 pl-2"
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
