import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import MyModal from "./MyModal";
//import "./NavigationBar.css"
const NavigationBar = (props) => {
  const user = useSelector((state) => {
    return state.auth.user;
  });
  const [showModal, setShowModal] = useState(false);
  //const link = user.eamil !== "undefined" ? "/signup" : "/main";
  const HandleModal = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  console.log("in nav", showModal);
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
            {user !== "undefined" ? (
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
