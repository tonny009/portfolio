import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import toast, { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import Projectdetails from "./components/Projectdetails";
import { useState } from "react";

// let datas = []


function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      loader: () => fetch('projects.json'),
      element: <Main></Main>,

    },
    {
      path: '/projectdetails',
      loader: () => fetch('projects.json'),
      element: <Projectdetails></Projectdetails>
    }

  ])
  return (
    <div>

      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
