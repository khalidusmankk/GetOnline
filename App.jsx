import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
//import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import "./app.css";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Career from "./components/Career";

// Define a layout with Navbar and routed components
const Layout = () => {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <Outlet /> {/* This renders the routed child components */}
      <Footer />
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/", // Root path
      element: <Layout />, // Use Layout to include Navbar
      children: [
        { path: "/", element: <Home /> },
        { path: "/Home", element: <Home /> },
        { path: "/About", element: <About /> },
        { path: "/Services", element: <Services /> },
        // { path: "/Blogs", element: <Blogs /> },
        { path: "/Contact", element: <Contact /> },
        { path: "/Career", element: <Career /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
