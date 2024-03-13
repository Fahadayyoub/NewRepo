import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import HomepageFour from "pages/HomepageFour";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "homepagefour",
      element: <HomepageFour />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
