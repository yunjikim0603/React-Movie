import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Group from "./routes/Group";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path={`/movie/:id`} element={<Detail />} />
        <Route path={`/page/:group/:page`} element={<Group />} />
        <Route path={"/"} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
