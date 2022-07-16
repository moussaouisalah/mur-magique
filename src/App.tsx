import { Route, Routes } from "react-router-dom";
import ProtectedRouter from "./components/routers/ProtectedRouter";
import PublicOnlyRouter from "./components/routers/PublicOnlyRouter";
import Home from "./pages/Home";
import List from "./pages/List";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Upload from "./pages/Upload";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRouter redirectTo="login" />}>
        <Route path="upload" element={<Upload />} />
        <Route path="list" element={<List />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route element={<PublicOnlyRouter redirectTo="/" />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
