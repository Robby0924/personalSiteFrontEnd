import React from "react";

import { About, Architecture, Contact, Header, WebDevelopment } from "./";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const Main = () => {
  //-------Routes-------
  const routerHeader = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route path="/about" element={<About />} />
        <Route path="/web_development" element={<WebDevelopment />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );

  return (
    <div id="main">
      <RouterProvider router={routerHeader}></RouterProvider>
    </div>
  );
};

export default Main;
