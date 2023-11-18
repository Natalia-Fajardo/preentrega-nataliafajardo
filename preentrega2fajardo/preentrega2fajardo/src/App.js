import "./App.css";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route element={<NavBar />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
             <Route
              path="/item/:id"
              element={<ItemDetailContainer />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
