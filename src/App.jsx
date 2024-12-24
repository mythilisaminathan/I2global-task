import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const Home = lazy(() => import("./Components/Home"));
const Notes = lazy(() => import("./Components/Notes"));
const Account = lazy(() => import("./Components/Account"));
const About = lazy(() => import("./Components/About"));
const Navbar = lazy(() => import("./Components/Navbar"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div className="loader"></div>}>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Home />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/account" element={<Account />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
