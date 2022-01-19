import NavBar from "../globalComponents/NavBar";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import TaskApp from "../../pages/DndPage";

import { Routes, Route } from "react-router-dom";
import { MainContainer } from "./PageLayout";

const MainPage = () => {
  const pages = [
    {
      pathName: "Home Page",
      path: "",
    },
    {
      pathName: "About Page",
      path: "about",
    },
    {
      pathName: "Tasks Page",
      path: "Tasks",
    },
    {
      pathName: "SignIn Page",
      path: "login",
    },
  ];
  return (
    <MainContainer>
      <NavBar pages={pages} />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="About" element={<AboutPage />} />
        <Route path="Tasks" element={<TaskApp />} />
      </Routes>
    </MainContainer>
  );
};

export default MainPage;
