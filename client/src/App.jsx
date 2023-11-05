import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Views/Landing/Landing";
import Form from "./Views/Form/Form";
import Navbar from "./Components/Navbar/Navbar";
import Details from "./Views/Details/Details";
import Home from "./Views/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Landing} />
          <Route path="/home" Component={Home} />
          <Route path="/form" Component={Form} />
          <Route path="/details:id" Component={Details} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
