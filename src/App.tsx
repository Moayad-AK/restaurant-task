import "./App.css";
import CategoriesPage from "./screens/Categories";
import ItemsListPage from "./screens/ItemsList";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/mainLayout";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={MainLayout}>
          <Route index Component={CategoriesPage} />
          <Route path="/items/:id" Component={ItemsListPage} />
        </Route>
        <Route path="*" Component={NotFound} />
      </Routes>
    </>
  );
}

export default App;
