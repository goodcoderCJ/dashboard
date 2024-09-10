import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Layout = lazy(() => import("../src/layout/Layout"));
const Albums = lazy(() => import("../src/pages/Albums"));
const Posts = lazy(() => import("../src/pages/Posts"));
const Users = lazy(() => import("../src/pages/Users"));
const Todos = lazy(() => import("../src/pages/Todos"));

function App() {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/albums" element={<Albums />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/users" element={<Users />} />
              <Route path="/todos" element={<Todos />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
