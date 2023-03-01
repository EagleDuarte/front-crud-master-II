import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Requirements } from "./contexts/Auth/Requirements";
import { Private } from "./pages/Private";
import { Recados } from "./components/Recados/Recados";
import { Login } from "./pages/Login";
import { RegisterField } from "./pages/RegisterField";
import { Table } from "./components/Table/Table";
import { useContext, useEffect } from "react";
import { ContextsField } from "./contexts/Auth/ContextsField";
import { Editing } from "./components/Editing/Editing";

function App() {
  const navigate = useNavigate();
  const userToken = localStorage.getItem("authToken");
  const auth = useContext(ContextsField);

  useEffect(() => {
    if (userToken) {
      auth.loadTask(userToken);
      console.log("app");
      navigate("/private");
    }
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<RegisterField />} />
        <Route
          path='/tasks'
          element={
            <Requirements>
              <Recados />
            </Requirements>
          }
        />
        <Route
          path='/new_tasks'
          element={
            <Requirements>
              <Table />
            </Requirements>
          }
        />

        <Route
          path='/edit_tasks/:id'
          element={
            <Requirements>
              <Editing />
            </Requirements>
          }
        />
        <Route
          path='/private'
          element={
            <Requirements>
              <Private />
            </Requirements>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
