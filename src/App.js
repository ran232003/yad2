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
import Login from "./auth/Login";
import AddItem from "./add-items/AddItem";
import Location from "./location/Location";
import SearchLocation from "./location/SearchLocation";
import Products from "./products/products";
import Cart from "./cart/Cart";

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
        <Route path="/login" element={<Login />}></Route>
        <Route path="/add-item" element={<AddItem />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/search-location" element={<SearchLocation />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
