import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  //fetch posts jsonplaceholder
  const getAlbums = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAlbums();
  }, []);
  //data from posts for pagination
  const [page, setPage] = useState(0);
  const dataPerPage = 15;
  const noOfDataVisited = page * dataPerPage;
  const pageChange = ({ selected }) => {
    setPage(selected);
  };
  const totalNoOfPage = Math.ceil(posts.length / dataPerPage);
  const postsInfo = posts
    .slice(noOfDataVisited, noOfDataVisited + dataPerPage)
    .map((post) => {
      return (
        <div
          key={post.id}
          className="bg-white dark:bg-[#304355] col-span-1 flex flex-col gap-2 py-4 px-5 rounded-[10px] showdow-md"
        >
          <p className="text-sm text-slate-500 dark:text-[white]">
            {post.title}
          </p>
          <p className="text-sm text-slate-700 dark:text-[white]">
            {post.post}
          </p>
          <p className="text-sm text-slate-700 dark:text-[#fffffd]">
            {post.body}
          </p>
          <p className="text-sm text-slate-700 dark:text-[#fffffd]">
            {post.user}
          </p>
        </div>
      );
    });
  return (
    <div>
      <h1 className="font-bold text-2xl dark:text-[white] mt-5">
        Get Data For All Posts
      </h1>
      {loading && <div className="dark:text-[white]">loading...</div>}
      <div className="albums-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-4 px-2 gap-4 my-4">
        {postsInfo}
      </div>
      <div className="post-paginate flex items-center w-[100%] md:w-[80%] my-4 p-4">
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

export default Posts;
