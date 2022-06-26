import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { Button } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import HomePage from "./hompage/pages/HomePage";
import SignUp from "./auth/Signup";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
