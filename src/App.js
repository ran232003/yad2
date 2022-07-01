import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { Button } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import HomePage from "./hompage/pages/HomePage";
import SignUp from "./auth/Signup";
import MainPage from "./main-page/MainPage";
import { useDispatch } from "react-redux";
import { authAction } from "./store/authSlice";

function App() {
  const dispatch = useDispatch();
  const checkStorage = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("user", user);
    if (user !== null) {
      console.log("in if");
      dispatch(authAction.userInit(user));
    }
  };
  checkStorage();
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
