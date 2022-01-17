import TaskApp from "./pages/DndPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/globalComponents/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
const App = () => {
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
  ];
  return (
    <Router>
      <NavBar pages={pages} />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="Tasks" element={<TaskApp />} />
      </Routes>
    </Router>
  );
};

export default App;
