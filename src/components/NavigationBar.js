import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import MyModal from "./MyModal";
import { logout } from "../storage/storage";
import { authAction } from "../store/authSlice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

//import "./NavigationBar.css"
const NavigationBar = (props) => {
  const user = useSelector((state) => {
    return state.auth.user;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  //const link = user.eamil !== "undefined" ? "/signup" : "/main";
  const HandleModal = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
    logout();
    dispatch(authAction.logOut());

    navigate("/");
  };
  console.log(user, Object.keys(user).length === 0);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="cont">
          <Navbar.Brand as={Link} to="/">
            Yad2
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            {Object.keys(user).length !== 0 ? (
              <div>
                <Nav onClick={HandleModal}>
                  <Nav.Link onClick={HandleModal}>LogOut</Nav.Link>
                </Nav>
              </div>
            ) : (
              <Nav>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link eventKey={2} as={Link} to="/signup">
                  SignUp
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showModal === true ? (
        <MyModal
          title="Login Out"
          body="Are You sure You Want To Loguot?"
          closeModal={handleClose}
          showModal={showModal}
        />
      ) : null}
    </div>
  );
};

export default NavigationBar;
