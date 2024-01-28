import "./css/signin.css";
import Signin from './pages/signin';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Shome from "./pages/shome";
import Chome from "./pages/chome";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin/>}></Route>
        <Route path="/shome" element={<Shome/>}></Route>
        <Route path="/chome" element={<Chome/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
