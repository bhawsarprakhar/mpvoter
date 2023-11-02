import Navbar from "react-bootstrap/Navbar";
import logo from "../../assests/Mp-LOGO.webp";
import React, { useState, useEffect } from "react";
import YouTube from "../../assests/images/logo-youtube.svg";

function AdminHeader() {
  const [isDarkHeader, setDarkHeader] = useState(false);
  const [logInUser, setLogInUser] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll >= 60) {
        setDarkHeader(true);
      } else {
        setDarkHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    getLoggedUser();
  }, []);

  const getLoggedUser = () => {
    const user = JSON.parse(localStorage?.getItem("user"));
    setLogInUser(user?.username);
  };
  const logOut = () => {
    localStorage.removeItem("Admin");
  };

  return (
    <>
      <header className={isDarkHeader ? "darkHeader" : ""}>
        <nav className="navbar container navbar-expand-lg navbar-light ">
          {/* <a className="navbar-brand" href="/"> */}
          {
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="80"
                height="80"
                className="d-inline-block align-top width-style"
                alt="mpvoter"
              />
            </Navbar.Brand>
          }
          {/* </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="nav-icon">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div
            className="collapse navbar-collapse  justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" onClick={logOut} href="/auth/admin">
                 Log Out
                </a>
              </li>

              <li className="you-t">
                <a
                  target="blank"
                  href="https://www.youtube.com/channel/UCpcxYVgDYLqDoigrk7VatYA"
                >
                  <img src={YouTube} alt="Youtube" width="40" height="40" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default AdminHeader;
