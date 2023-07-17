import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTER } from "./router/router";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTER.HOME_ROUTE} element={<HomePage />} />
        <Route path={ROUTER.ERROR_ROUTE} element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
