import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/Routers/PrivateRoute";
import LogInPage from "./pages/LogInPage";
import MainPage from "./components/globalComponents/MainPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<LogInPage />} />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
