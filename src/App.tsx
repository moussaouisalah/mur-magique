import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Upload from "./pages/Upload";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="upload" element={<Upload />} />
      <Route path="list" element={<List />} />
    </Routes>
  );
}

export default App;
