import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProjectDetails from "./pages/project/ProjectDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/projects/:id" element={<ProjectDetails />}></Route>
    </Routes>
  );
};

export default Router;
