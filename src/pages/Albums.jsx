import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  //fetch albums jsonplaceholder
  const getAlbums = () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAlbums(data);
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
  //data from albums for pagination
  const [page, setPage] = useState(0);
  const dataPerPage = 15;
  const noOfDataVisited = page * dataPerPage;
  const pageChange = ({ selected }) => {
    setPage(selected);
  };
  const totalNoOfPage = Math.ceil(albums.length / dataPerPage);
  const albumInfo = albums
    .slice(noOfDataVisited, noOfDataVisited + dataPerPage)
    .map((album) => {
      return (
        <div
          key={album.id}
          className="bg-white rounded-[10px]  py-6 px-4 col-span-1 shadow-md flex flex-col gap-2"
        >
          <p className="text-sm text-black-300 ">{album.title}</p>
          <p className="text-sm text-slate-400">{album.userid}</p>
        </div>
      );
    });
  return (
    <div>
      <h1 className="font-bold text-2xl mt-5">Get Data For All Albums</h1>
      {loading && <div>loading...</div>}
      <div className="albums-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-4 px-2 gap-4 my-4">
        {albumInfo}
      </div>
      <div className=" flex items-center album-paginate w-[100%] md:w-[80%] my-4 p-4">
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

export default Albums;
